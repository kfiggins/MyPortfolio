import { useState } from "react";

function HideShow({ children }) {
  const [on, setOn] = useState(false);

  const hide = () => {
    setOn(false);
  };

  const show = () => {
    setOn(true);
  };

  return children({ on: on, hide: hide, show: show });
}

export default HideShow;
