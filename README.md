- use https://serverless.com/framework/docs/providers/aws/guide/credentials#creating-aws-access-keys to create AWS credentials
- `yarn dev` to test locally
- `yarn deploy` to deploy

lambda accepts the following body:

```
'POST',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({ url }),

```

use `loadTest.js` to do some simple benchmarking. replace `LAMBDA_URL`, `TEST_URL` and `numUrls` to your environment
