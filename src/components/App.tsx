import type { Component } from "solid-js";
import Card from "./Card";
import Header from "./Header";
import MainCard from "./MainCard/MainCard";

const App: Component = () => {
  const n = { front: "intrinsic", back: "Solidjs dumb" };

  return (
    <div class="bold text-3xl h-screen">
      <Header />
      <div class="flex items-center justify-center mt-10">
        <p class="hover: cursor-pointer">&lt;</p>
        <MainCard />
        <p class="hover: cursor-pointer">&gt;</p>
      </div>
      <div class="flex flex-col items-center mt-10">
        <Card front={n.front} back={n.back} />
      </div>
    </div>
  );
};

export default App;
