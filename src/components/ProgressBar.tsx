import React from 'react';

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="outer-div container w-3/4 mx-auto my-4 rounded-2xl overflow-hidden border border-black">
      <div
        style={{ width: `${progress}%` }}
        // style={{ transform: `translateX(${progress - 100}%)` }}
        className={`inner-div bg-green-500 text-center text-black`}
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
