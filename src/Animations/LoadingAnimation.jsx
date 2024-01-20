import { waveform } from 'ldrs';
import { useEffect } from 'react';

const LoadingAnimation = () => {
  useEffect(() => {
    waveform.register();
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <l-waveform size={40} lineWeight={3.5} speed={1} color="black" />
      <div className="waveform">
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
