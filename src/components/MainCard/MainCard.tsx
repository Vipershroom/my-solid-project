import { Component } from "solid-js";
import style from "./MainCard.module.css";
import { createSignal } from "solid-js";

const MainCard: Component = () => {
  let cardRef: HTMLDivElement;
  let innerRef: HTMLDivElement;
  const [isActive, setActive] = createSignal(true);

  const changeActive = () => {
    if (isActive() === false) {
      cardRef.style.transformStyle = "transform 0.5s;";
      innerRef.style.transform = "rotateY( 180deg )";
      innerRef.style.transition = "transform 0.5s";
    } else {
      cardRef.style.transform = "";
      cardRef.style.transformStyle = "";
      innerRef.style.transform = "";
      innerRef.style.transition = "";
    }
  };

  return (
    <div ref={cardRef} id={style.card} class="w-1/2">
      <div ref={innerRef} id={style.inner}>
        <div
          class="hover: cursor-pointer"
          id={style.front}
          onClick={() => {
            if (isActive() === true) {
              setActive(false);
              changeActive();
            } else {
              setActive(true);
              changeActive();
            }
          }}
        >
          Front
        </div>
        <div
          class="hover: cursor-pointer"
          id={style.back}
          onClick={() => {
            if (isActive() === true) {
              setActive(false);
              changeActive();
            } else {
              setActive(true);
              changeActive();
            }
          }}
        >
          Back
        </div>
      </div>
    </div>
  );
};

export default MainCard;
