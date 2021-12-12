import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  baseURL: env.process.AUTH0_BASE_URL,
  issuerBaseURL: 'https://curs.eu.auth0.com',
  clientID: 'WWESOb30c23SE3egA65EJKw5vuQfdtff',
  clientSecret: 'FoH30fIJ9o4YQ8hbyT9QKSCf_5FQwJur1ALtwX-iTDSlHNiyelc7Rys6kOKqNAym',
  secret: 'FoH30fIJ9o4YQ8hbyT9QKSCf_5FQwJur1ALtwX-iTDSlHNiyelc7Rys6kOKqNAym543543r3f34g34g3gf3g3g',
  clockTolerance: 60,
  httpTimeout: 5000,
  authorizationParams: {
    scope: 'openid profile email',
    audience: 'MY_AUDIENCE'
  },
  routes: {
    callback: '/api/callback',
    postLogoutRedirect: '/'
  },
  session: {
    rollingDuration: 60 * 60 * 24,
    absoluteDuration: 60 * 60 * 24 * 7
  }
});

// AUTH0_SECRET=FoH30fIJ9o4YQ8hbyT9QKSCf_5FQwJur1ALtwX-iTDSlHNiyelc7Rys6kOKqNAym543543r3f34g34g3gf3g3g
// AUTH0_BASE_URL=http://localhost:3000
// AUTH0_ISSUER_BASE_URL='https://curs.eu.auth0.com'
// AUTH0_CLIENT_ID='WWESOb30c23SE3egA65EJKw5vuQfdtff'
// AUTH0_CLIENT_SECRET='FoH30fIJ9o4YQ8hbyT9QKSCf_5FQwJur1ALtwX-iTDSlHNiyelc7Rys6kOKqNAym'
// AUTH0_AUDIENCE=
// AUTH0_SCOPE='openid profile'
// PORTFOLIO_API_URL=http://localhost:3001/api/auth
// AUTH0_COOKIE_SECRET=qwfwqfwefwefewagfwegqel0wqegiq09wgwqelpf;wepfds;
