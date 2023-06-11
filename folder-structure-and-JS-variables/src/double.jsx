import React from "react";
import image1 from "./old man.jpg";
import image2 from "./car.jpg";
import image3 from "./camera.jpg";
import image4 from "./view.jpg";
//Map fucntion callback
export function doublenum(number) {
  return number * 2;
  console.log(number);
}
//Array Destructuring
export const ArrDes = () => {
  const Values = ["live", "Observe", "Picture it", "travel"];
  const [firstElement, secondElement] = Values;
  console.log(firstElement);
  console.log(secondElement);
};
//Object Destructuring
export const ObjDes = () => {
  const Images = {
    img1: image1,
    img2: image2,
    img3: image3,
    img4: image4,
  };
  const { img1, img2, ...otherElements } = Images;
  console.log(img1);
  console.log(img2);
  console.log(otherElements);
};
