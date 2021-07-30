import React from 'react';
import Article from '../components/home/Article/Article';
import Feed from '../components/home/Feed/Feed';
import CountProvider, { useCount } from '../context/CountProvider';

const HomePage = () => {
  console.log('HomePage...');
  return (
    <section>
      <Feed />
      <CountProvider>
        <Article />
        <Test />
      </CountProvider>
    </section>
  );
};

function Test() {
  const { count, setCount } = useCount();
  console.log('Test...');

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}

export default HomePage;
