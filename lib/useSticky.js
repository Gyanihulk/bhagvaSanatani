import { useEffect } from 'react';

const useSticky = () => {
  useEffect(() => {
    // Ensure hcSticky is only called in the browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const hcSticky = require('hc-sticky'); // Or however you import hcSticky

      const stickys = document.querySelectorAll('.sticky');
      if (stickys != null) {
        for (let i = 0; i < stickys.length; i++) {
          new hcSticky(stickys[i], {
            stickTo: stickys[i].parentNode,
            top: 28,
            bottomEnd: 0,
          });
        }
      }
    }
  }, []);
};

export default useSticky;
