import GoogleAdsense from 'next-google-ads'
import { useEffect } from 'react'

export const GoogleAdsenseWidget = () => {
  useEffect(()=>{
document.getElementsByClassName("adsbygoogle")[0].style.width="100%"
  },[])
  return (
      <GoogleAdsense
      // className='google-advertisement'
        client="cca-pub-2326546523711729"
        slot="99999999"
        responsive="true"
      />
  )
}