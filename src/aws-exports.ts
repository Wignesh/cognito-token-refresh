// const awsconfig = {
//   aws_project_region: 'us-east-1',
//   aws_cognito_region: 'us-east-1',
//   aws_user_pools_id: 'us-east-1_Dt5uY60yv',
//   aws_user_pools_web_client_id: '4nuqatinij99p1kgpqsn93n9r8',
//   oauth: {
//     domain: 'uptrack-ad.auth.us-east-1.amazoncognito.com',
//     scope: ['email', 'openid', 'aws.cognito.signin.user.admin'],
//     redirectSignIn: 'http://localhost:4200/',
//     redirectSignOut: 'http://localhost:4200/',
//     responseType: 'code',
//   },
// };

// export default awsconfig;

export const awsconfig = {
  Auth: {
    identityPoolId: 'us-east-1:5fc5d4c1-f50d-48f7-b066-58a1dcc31287',
    region: 'us-east-1',
    userPoolId: 'us-east-1_Dt5uY60yv',
    userPoolWebClientId: '4nuqatinij99p1kgpqsn93n9r8',
    oauth: {
      domain: 'uptrack-ad.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid', 'aws.cognito.signin.user.admin', 'profile'],
      redirectSignIn: 'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code',
    },
  },
  API: {
    endpoints: [
      {
        // name: environment.apiName,
        // endpoint: environment.baseUrl,
        // region: environment.region,
      },
    ],
  },
};
