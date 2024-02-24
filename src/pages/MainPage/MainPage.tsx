import React, {useState} from 'react';

import Battle from 'components/Battle';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const MainPage = () => {
  const [isBattleInProgress, setIsBattleInProgress] = useState<boolean>(false);

  const handleStartBattle = () => {
    setIsBattleInProgress(true);
  };

  return (
    <div>
      {isBattleInProgress ? (
        <Battle />
      ) : (
        <Button variant='outlined' onClick={handleStartBattle} endIcon={<SendIcon />}>
          Start Battle
        </Button>
      )}
    </div>
  );
};

export default MainPage;
