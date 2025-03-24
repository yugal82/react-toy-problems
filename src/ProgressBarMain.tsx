import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';

const ProgressBarMain = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }

        return prev + 1;
      });
    }, 100);
  }, []);

  // return progressVals?.map((progress) => <ProgressBar key={progress} progress={progress} />);
  return (
    <>
      <ProgressBar progress={progress} />
      <div className="w-full flex items-center justify-center">{isComplete ? 'Complete' : 'Loading....'}</div>
    </>
  );
};

export default ProgressBarMain;
