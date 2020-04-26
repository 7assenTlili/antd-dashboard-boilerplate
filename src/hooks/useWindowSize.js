import React from "react";

// This hook is highly inspired by this blog https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
const useWindowSize = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(
        () =>
          setSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        150
      );
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return [size, setSize];
};

export default useWindowSize;
