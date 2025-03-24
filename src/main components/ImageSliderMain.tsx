import React from 'react';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';
import car5 from '../assets/car5.jpg';
import ImageSlider from '../components/ImageSlider';

const IMAGES = [car1, car2, car3, car4, car5];

const ImageSliderMain = () => {
  return (
    <div className="w-full max-w-[1200px] h-full">
      <ImageSlider images={IMAGES} />
    </div>
  );
};

export default ImageSliderMain;
