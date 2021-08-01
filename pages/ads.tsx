import React from 'react';
import AdOne from '../components/ads/AdOne/AdOne';

interface Props {}

const AdsPage = (props: Props) => {
  return (
    <section>
      <h1>How to build ads like components smoothly</h1>
      <AdOne />
      <AdOne />
    </section>
  );
};

export default AdsPage;
