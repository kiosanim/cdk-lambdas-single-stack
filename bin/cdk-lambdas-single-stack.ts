#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { R10SampleStack } from '../lib/r10-sample-stack';

const app = new cdk.App();
new R10SampleStack(app, 'R10SampleStack', {});
