import GoogleAdsense from 'next-google-ads'

export const GoogleAdsenseWidget = () => {
  return (
      <GoogleAdsense
        client="cca-pub-2326546523711729"
        slot="99999999"
        responsive="true"
      />
  )
}