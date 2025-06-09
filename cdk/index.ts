#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioSiteStack } from  './stack';

const app = new cdk.App();
new PortfolioSiteStack(app, 'StaticNextJsStack');