import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';
import GlobalStyle from '../styled/GlobalStyle';
import favicon from '../../static/icons/favicon.png';
import appleTouchIcon from '../../static/icons/apple-touch-icon.png';

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
            <meta property="og:url" content="http://mattbillings.tech" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Matt Billings dot Tech" />
            <meta
              property="og:description"
              content="A website for an enthusiastic young man that wants a job making creative web products"
            />
            {/* <meta property="og:image" content={`${image}?v2`} /> */}
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            <meta name="twitter:title" content="http://mattbillings.tech" />
            {/* <meta name="twitter:description" content={description} /> */}
            {/* <meta
            name="twitter:image"
            content="https://volunteer.lamayor.org/static/images/VolunteerLA_SocialMeta.png"
          /> */}
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

const Main = styled.main`
  position: relative;
`;
