import AWS from 'aws-sdk';

const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET;
const REGION = process.env.REACT_APP_AWS_REGION;
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

class AWSConnectorModel {
    constructor(app) {
        this.config = {
            s3Bucket: S3_BUCKET,
            region: REGION,
            accessKey: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY
        };

        AWS.config.update({
            accessKeyId: ACCESS_KEY,
            secretAccessKey: SECRET_ACCESS_KEY
        });

        this.s3 = new AWS.S3({
            region: REGION
        });

        this.app = app;
    }

    getS3() {
        return this.s3;
    }

    getBucketName() {
        return this.config.s3Bucket;
    }
}

export default AWSConnectorModel;