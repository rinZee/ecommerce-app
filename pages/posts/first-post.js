import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> First Post </title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt={"My name"}
        ></Image>
      </h2>
    </Layout>
  );
}
