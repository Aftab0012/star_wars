import { useEffect } from 'react';
import { tailspin } from 'ldrs';

const CircleLoader = () => {
  useEffect(() => {
    tailspin.register();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <l-tailspin size="20" stroke="5" speed="0.9" color="black"></l-tailspin>
    </div>
  );
};

export default CircleLoader;
