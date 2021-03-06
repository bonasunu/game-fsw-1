import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 
 intinya re-auth
 
 */
export default function withoutAuth(WrappedComponent, location = '/home') {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false
  });
}
