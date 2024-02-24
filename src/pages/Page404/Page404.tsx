import React from 'react';
import styled from 'styled-components';

import {Routes} from 'constants/routes';

export const Error404Text = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

const Page404 = () => {
  return (
    <>
      <Error404Text>
        Something goes wrong! <br /> Please go to{' '}
        <a href={`${Routes.mainLanding}`} rel='noreferrer'>
          main page
        </a>
        .
      </Error404Text>
    </>
  );
};

export default Page404;
