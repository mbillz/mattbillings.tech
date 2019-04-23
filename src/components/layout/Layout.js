import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';
import GlobalStyle from '../styled/GlobalStyle';
import favicon from '../../static/icons/favicon.png';
import appleTouchIcon from '../../static/icons/apple-touch-icon.png';
import SocialMeta from './SocialMeta';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({ site }) => (
        <>
          <Helmet title={site.siteMetadata.title}>
            <html lang="en" />
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href={favicon} />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={appleTouchIcon}
            />
            <SocialMeta />
          </Helmet>
          <GlobalStyle />
          <Main>{children}</Main>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

const Main = styled.div`
  position: relative;
`;
