import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding: 100px 32px;
  background-color: white;
  max-width: 1168px;
  margin: 0 auto;
`;

const MainLayout: FC<PropsWithChildren<any>> = (props) => {
  return (
    <AppContainer id='app'>
      <ContentContainer id='main'>{props.children}</ContentContainer>
    </AppContainer>
  );
};

export default MainLayout;
