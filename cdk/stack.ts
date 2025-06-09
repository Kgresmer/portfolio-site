import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import {Construct} from 'constructs';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';

const SITE_URL = 'staticnextjs.kevingresmer.com';

export class Stack extends cdk.Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id, {
            env: {
                account: process.env.CDK_DEFAULT_ACCOUNT,
                region: process.env.CDK_DEFAULT_REGION,
            }
        });

        const domainName = 'kevingresmer.com';
        const siteDomain = 'www.' + domainName;

        // HostedZone
        const zone = route53.HostedZone.fromLookup(this, 'Zone', {
            domainName
        });

        // S3 Bucket
        const siteBucket = new s3.Bucket(this, 'SiteBucket', {
            bucketName: SITE_URL,
            publicReadAccess: false,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        })

        const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI');

        siteBucket.grantRead(originAccessIdentity);

        // Certificate
        const certificate = new acm.Certificate(this, 'SiteCertificate', {
            domainName: siteDomain,
            validation: acm.CertificateValidation.fromDns(zone),
        });

        // // Distribution Cloudfront
        const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
            defaultBehavior: {
                allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                compress: true,
                origin: new cloudfront_origins.S3Origin(siteBucket, {
                    originAccessIdentity,
                }),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            defaultRootObject: "index.html",
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 403,
                    responsePagePath: "/error.html",
                    ttl: cdk.Duration.minutes(30),
                },
            ],
            domainNames: [siteDomain],
            certificate,
        });

        // // A Record
        new route53.ARecord(this, 'SiteAliasRecord', {
            recordName: SITE_URL,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
            zone
        })
        //
        // // Copy OUT folder to S3
        new s3deploy.BucketDeployment(this, 'DeployToBucket', {
            sources: [s3deploy.Source.asset('./out')],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ['/*']
        })
    }
}
