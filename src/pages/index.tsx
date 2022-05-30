import React from "react";
import * as Components from "../components";

export default () => {
  return (
    <Components.L0.FadeInLoad>
      <Components.L0.GlobalWrapper title="Home">
        <Components.L2.SharedCanvasWrapper scenes={['Default', 'Main']}>
          <audio src="./audio/Regalo para Luis.mp3" />
        </Components.L2.SharedCanvasWrapper>
      </Components.L0.GlobalWrapper>
    </Components.L0.FadeInLoad>
  );
};
