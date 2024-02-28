import Head from "next/head";
function Meta({ title, site_name, url, description, image }) {
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={site_name} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </Head>;
}
export default Meta;
