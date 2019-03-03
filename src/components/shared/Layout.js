import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../styled/GlobalStyle';

const Layout = ({ children }) => (
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
          {/* <link rel="icon" href={favicon} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} /> */}
        </Helmet>
        <GlobalStyle />
        <main>{children}</main>
      </>
    )}
  />
);

export default Layout;
