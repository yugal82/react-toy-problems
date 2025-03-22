import React, { useState } from 'react';

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleOnPrevClick = () => {
    setImageIndex((prevIdx) => {
      if (prevIdx === 0) return images.length - 1;
      else return prevIdx - 1;
    });
  };

  const handleOnNextClick = () => {
    setImageIndex((prevIdx) => {
      if (prevIdx === images.length - 1) return 0;
      else return prevIdx + 1;
    });
  };

  return (
    <div className="w-full mt-10 ">
      <img className="w-1/2 h-[300px] mx-auto object-contain" src={images[imageIndex]} alt="" />
      <div className="w-full flex items-center justify-center mt-2">
        {images?.map((_, index) => (
          <button
            className={`w-3 h-3 rounded-full px-1 mx-0.5 ${
              index === imageIndex ? 'bg-[#787878]' : 'bg-[#e3e3e3]'
            }  cursor-pointer hover:scale-110`}
            onClick={() => setImageIndex(index)}
          ></button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button onClick={handleOnPrevClick} className="w-24 p-2 mx-2 bg-[#e3e3e3] rounded-xl cursor-pointer">
          Prev
        </button>
        <button onClick={handleOnNextClick} className="w-24 p-2 mx-2 bg-[#e3e3e3] rounded-xl cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
