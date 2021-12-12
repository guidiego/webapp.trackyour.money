import nookies from "nookies";

import React, { useCallback } from "react";
import SetupContent from "~/features/setup";
import Header from "~/features/layout/Header";

import { useRouter } from "next/router";
import { disableCache } from "~/server/disableCache";

export const Setup: React.FC = () => {
  const router = useRouter();
  const onSuccess = useCallback(() => {
    router.push("/entries");
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <SetupContent onSuccess={onSuccess} />
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  disableCache(ctx.res);
  const { api, token } = nookies.get(ctx);

  if (api && token) {
    return {
      redirect: {
        permanent: false,
        destination: "/entries",
      },
    };
  }

  return { props: { config: {} } };
};

export default Setup;
