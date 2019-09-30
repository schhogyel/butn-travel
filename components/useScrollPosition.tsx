/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useLayoutEffect } from "react";
import { DependencyList } from "react";

const isBrowser = typeof window !== `undefined`;
function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };
  return { x: window.scrollX, y: window.scrollY };
}

export function useScrollPosition(
  effect: any,
  deps?: DependencyList,
  wait?: number
) {
  const position = useRef(getScrollPosition());

  let throttleTimeout: any = null;

  const callBack = () => {
    const currPos = getScrollPosition();

    effect({
      prevPos: position.current,
      currPos
    });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null
};
