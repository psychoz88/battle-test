import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react';
import animationData from '../battle-animation.json';

import {Alert} from '@mui/material';

enum EResult {
  VICTORY = 'VICTORY',
  DEFEAT = 'DEFEAT',
}

const Battle: React.FC = () => {
  const [outcome, setOutcome] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = Math.random() < 0.5 ? EResult.VICTORY : EResult.DEFEAT;
      setOutcome(result);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {outcome ? (
        <div>
          {outcome === EResult.VICTORY ? (
            <Alert severity='success'>{EResult.VICTORY}</Alert>
          ) : (
            <Alert severity='error'>{EResult.DEFEAT}</Alert>
          )}
        </div>
      ) : (
        <Lottie animationData={animationData} autoplay loop={false} />
      )}
    </div>
  );
};

export default Battle;
