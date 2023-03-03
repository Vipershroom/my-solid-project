import type { Component } from 'solid-js';
import Card from './Card';
import Header from './Header';
import MainCard from './MainCard/MainCard';

const App: Component = () => {
  return (
    <div class='bold text-3xl h-screen'>
      <Header />
      <div class='flex flex-col items-center mt-10'>
        <MainCard />
        <Card />
      </div>
    </div>
  );
};

export default App;
