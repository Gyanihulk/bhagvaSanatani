import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-2326546523711729"
         data-ad-slot="1677248406"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default GoogleAd;
