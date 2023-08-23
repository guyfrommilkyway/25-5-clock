// import packages below
import Head from 'next/head';

const NextHead = (props) => {
  // destructure props
  const { title } = props;

  return (
    <Head>
      <meta name='viewport' content='width=device-width, scale=1.0' />
      <meta name='author' content='Almer Tampus' />
      <meta name='description' content='25+5 Clock' />
      <title>{title}</title>
    </Head>
  );
};

export default NextHead;
