// ========== Head
// import all modules
import React from 'react';
import PropsTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IHeadProps } from '../interfaces';

export const Head: React.FC<IHeadProps> = (props) => {
  const { title } = props;
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Group Chat |
          {' '}
          {title}
        </title>
      </Helmet>
    </HelmetProvider>
  );
};

Head.propTypes = {
  title: PropsTypes.string.isRequired,
};
