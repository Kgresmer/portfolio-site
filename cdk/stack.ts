import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { AllowedMethods, CachedMethods, Distribution, OriginAccessIdentity, OriginRequestPolicy, ResponseHeadersPolicy, ViewerProtocolPolicy } from 'aws-cdk-lib/aws-cloudfront';
import {Construct} from 'constructs';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BlockPublicAccess, Bucket, BucketAccessControl, BucketEncryption, HttpMethods, ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy, Stack, Duration } from 'aws-cdk-lib';


export class PortfolioSiteStack extends Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id, {
            env: {
                account: process.env.CDK_DEFAULT_ACCOUNT,
                region: process.env.CDK_DEFAULT_REGION,
            }
        });

        const domainName = 'kevingresmer.com';

        // HostedZone
        const zone = route53.HostedZone.fromLookup(this, 'Zone', {
            domainName
        });

        // S3 Bucket
        const siteBucket = new Bucket(this, 'SiteBucket', {
            bucketName: domainName,
            cors: [{
                allowedMethods: [HttpMethods.GET],
                allowedOrigins: ['*'],
                allowedHeaders: ['*']
            }],
            enforceSSL: true,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
            encryption: BucketEncryption.S3_MANAGED,
            accessControl: BucketAccessControl.PRIVATE,
            removalPolicy: RemovalPolicy.RETAIN
        })

        const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
        siteBucket.grantRead(originAccessIdentity);

        // Certificate
        const certificate = new acm.Certificate(this, 'SiteCertificate', {
            domainName,
            validation: acm.CertificateValidation.fromDns(zone),
        });

        // // Distribution Cloudfront
        const distribution = new Distribution(this, 'SiteDistribution', {
            defaultBehavior: {
                origin: new S3Origin(siteBucket),
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN,
                responseHeadersPolicy: ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
            },
            errorResponses: [{
                httpStatus: 403,
                responseHttpStatus: 200,
                responsePagePath: '/index.html',
                ttl: Duration.minutes(10)
            }],
            defaultRootObject: "index.html",
            domainNames: [domainName],
            certificate,
        });

        // // A Record
        new route53.ARecord(this, 'SiteAliasRecord', {
            recordName: domainName,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
            zone
        })

        // // Copy OUT folder to S3
        new s3deploy.BucketDeployment(this, 'DeployToBucket', {
            sources: [s3deploy.Source.asset('./out')],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ['/*']
        })
    }
}
