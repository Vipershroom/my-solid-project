import { Component } from "solid-js";

interface MainCardProps {
  front: string;
  back: string;
}

const Card: Component = (props: MainCardProps) => {
  return (
    <div class="flex mt-10 w-1/2 border border-solid border-black justify-between rounded-md shadow-lg">
      <div class="w-1/2 text-2xl p-2 border-r-black border-r-2">
        <h2>{props.front}</h2>
      </div>
      <div class="w-1/2 text-2xl flex justify-end p-2">
        <h2>{props.back}</h2>
      </div>
      <div />
    </div>
  );
};

export default Card;
