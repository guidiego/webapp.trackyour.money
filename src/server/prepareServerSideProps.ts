import nookies from "nookies";
import client from "~/client";
import disableCache from "./disableCache";

export const prepareServerSideProps = (cb) => async (ctx) => {
  disableCache(ctx.res);
  const cookies = nookies.get(ctx, { path: "/" });

  if (!cookies.api && !cookies.token) {
    return {
      redirect: {
        destination: "/setup",
        permanent: false,
      },
    };
  }

  client.setup(cookies.api, cookies.token);
  const props = (await cb(ctx)) || {};

  return {
    props: {
      ...props,
      ...client.getDehydratedState(),
      config: {
        api: cookies.api,
        token: cookies.token,
      },
    },
  };
};

export default prepareServerSideProps;
