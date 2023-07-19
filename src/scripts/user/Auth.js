import { Auth0Client } from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
  domain: '<AUTH0_DOMAIN>',
  clientId: '<AUTH0_CLIENT_ID>',
  authorizationParams: {
    redirect_uri: '<MY_CALLBACK_URL>'
  }
});

//if you do this, you'll need to check the session yourself
try {
  await auth0.getTokenSilently();
} catch (error) {
  if (error.error !== 'login_required') {
    throw error;
  }
} 