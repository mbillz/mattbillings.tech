import React, { memo } from 'react';
import socialImage from '../../static/social.jpg';

const socialTitle = 'Matt Billings dot Tech';
const socialUrl = 'https://mattbillings.tech';
const socialDescription =
  'A playground for a reflective developer, hoping to make a positive impact on the world through code.';

const SocialMeta = () => {
  return (
    <>
      <meta property="og:url" content={socialUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={`${socialImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialUrl} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={socialImage} />
    </>
  );
};

export default memo(SocialMeta);
