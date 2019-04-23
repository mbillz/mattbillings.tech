import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';
import GlobalStyle from '../styled/GlobalStyle';
import socialImage from '../../static/social.jpg';

const socialTitle = 'Matt Billings dot Tech';
const socialUrl = 'https://mattbillings.tech';
const socialDescription =
  'A playground for a reflective developer, hoping to make a positive impact on the world through code.';

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
            <meta property="og:url" content={socialUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={socialTitle} />
            <meta property="og:description" content={socialDescription} />
            <meta property="og:image" content={`${socialImage}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={socialUrl} />
            <meta name="twitter:description" content={socialDescription} />
            <meta name="twitter:image" content={socialImage} />
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
