import React from "react";
import { GetServerSideProps } from "next";

export const Home: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: false,
    destination: "/entries",
  },
});

export default Home;
