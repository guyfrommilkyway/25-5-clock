// import components below
import NextHead from '@/layout/Head';
import Clock from '@/components/Clock';

const HomePage = () => {
  return (
    <>
      <NextHead title='25+5 Clock' />
      <Clock />
    </>
  );
};

export default HomePage;
