import React, { useEffect, useState } from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a fallback component during SSR
    return null;
  }

  return (
    <Html center>
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
        </div>
    </Html>
  );
};

export default Loader;