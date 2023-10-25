'use client';

import { useEffect } from 'react';
import Smartlook from 'smartlook-client';

const SmartLookComponent = () => {
  useEffect(() => {
    Smartlook.init('cf2ac5a53432e3bc10c6eb0c130ab96eb44a89ba');
  }, []);
  return <></>;
};

export default SmartLookComponent;
