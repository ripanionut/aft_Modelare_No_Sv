import { getSession } from "@auth0/nextjs-auth0";
import { initAuth0 } from "@auth0/nextjs-auth0";

// const auth0 = initAuth0({
//   secret: process.env.AUTH0_SECRET,
//   baseURL: process.env.AUTH0_BASE_URL,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
// });

const auth0 = initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  routes: {
      postLogoutRedirect: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI
  }
});
export const isAuthorized = (user, role) => {
  return user && user["http://portfolio-ripan.com/roles"].includes(role);
};

export const authorizeUser = async (req, res) => {
  const session = await getSession(req, res);

  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };

    return session.user;
  }
};

export const withAuth =
  (getData) =>
  (role) =>
  async ({ req, res }) => {
    const session = await getSession(req, res);
    if (
      !session ||
      !session.user ||
      (role && !isAuthorized(session.user, role))
    ) {
      return {
        redirect: {
          destination: "/api/auth/login",
          permanent: false,
        },
      };
    }

    const data = getData ? await getData({ req, res }, session.user) : {};
    return { props: { user: session.user, ...data } };
  };
