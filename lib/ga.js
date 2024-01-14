import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-XT0W232DRJ'); // Your Measurement ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category, action, label }) => {
  ReactGA.event({
    category, 
    action, 
    label
  });
};