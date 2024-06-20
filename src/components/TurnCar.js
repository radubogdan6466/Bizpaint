import React, { useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";
import img1 from "../assets/images/BMW/1.jpg";
import img2 from "../assets/images/BMW/2.jpg";
import img3 from "../assets/images/BMW/3.jpg";
import img4 from "../assets/images/BMW/4.jpg";
import img5 from "../assets/images/BMW/5.jpg";
import img6 from "../assets/images/BMW/6.jpg";
import img7 from "../assets/images/BMW/7.jpg";
import img8 from "../assets/images/BMW/8.jpg";
import img9 from "../assets/images/BMW/9.jpg";
import img10 from "../assets/images/BMW/10.jpg";
import img11 from "../assets/images/BMW/11.jpg";
import img12 from "../assets/images/BMW/12.jpg";
import img13 from "../assets/images/BMW/13.jpg";
import img14 from "../assets/images/BMW/14.jpg";
import img15 from "../assets/images/BMW/15.jpg";
import img16 from "../assets/images/BMW/16.jpg";
import img17 from "../assets/images/BMW/17.jpg";
import img18 from "../assets/images/BMW/18.jpg";
import img19 from "../assets/images/BMW/19.jpg";
import img20 from "../assets/images/BMW/20.jpg";
import img21 from "../assets/images/BMW/21.jpg";
import img22 from "../assets/images/BMW/22.jpg";
import img23 from "../assets/images/BMW/23.jpg";
import img24 from "../assets/images/BMW/24.jpg";
import img25 from "../assets/images/BMW/25.jpg";
import img26 from "../assets/images/BMW/26.jpg";
import img27 from "../assets/images/BMW/27.jpg";
import img28 from "../assets/images/BMW/28.jpg";
import img29 from "../assets/images/BMW/29.jpg";
import img30 from "../assets/images/BMW/30.jpg";
import img31 from "../assets/images/BMW/31.jpg";
import img32 from "../assets/images/BMW/32.jpg";
import img33 from "../assets/images/BMW/33.jpg";
import img34 from "../assets/images/BMW/34.jpg";
import img35 from "../assets/images/BMW/35.jpg";
import img36 from "../assets/images/BMW/36.jpg";

export const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
];

function TurnCar(props) {
  const [rotationDisabled, setRotationDisabled] = useState(false);

  const handleKeyDown = (ev) => {
    if (rotationDisabled) return;

    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  return (
    <ReactImageTurntable
      images={images}
      autoRotate={{ disabled: true }} // Ensure auto-rotation is disabled
      onPointerDown={() => setRotationDisabled(false)} // Enable rotation on pointer down
      onPointerUp={() => setRotationDisabled(true)} // Disable rotation on pointer up
      onKeyDown={handleKeyDown}
      onKeyUp={() => setRotationDisabled(true)}
      {...props}
    />
  );
}

export default TurnCar;
