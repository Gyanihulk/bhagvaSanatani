import { logEvent } from "../lib/ga";


export default function Test() {
  const handleClick = () => {
    logEvent({
      category: 'User',
      action: 'Clicked Button',
      label: 'My Special Button'
    });
  };

  return <button onClick={handleClick}>Click Me</button>;
}
