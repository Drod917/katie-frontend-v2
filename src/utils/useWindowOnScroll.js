import React from "react";
import { throttle } from "throttle-debounce";

const useWindowOnScroll = (handleWindowScroll, loadOnceOnMount = true) => {
  const internalHandleScroll = React.useMemo(() => {
    // 166 -> 60HZ
    // 322 -> 120HZ?
    // 399 -> 144HZ
    return handleWindowScroll ? throttle(399, handleWindowScroll) : handleWindowScroll;
  }, [handleWindowScroll]);

  React.useEffect(() => {
    if (internalHandleScroll == null) {
      return undefined;
    }

    window.addEventListener("scroll", internalHandleScroll);
    return () => {
      window.removeEventListener("scroll", internalHandleScroll);
      internalHandleScroll.cancel();
    };
  }, [internalHandleScroll]);

  React.useEffect(() => {
    if (loadOnceOnMount) {
      handleWindowScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowOnScroll;