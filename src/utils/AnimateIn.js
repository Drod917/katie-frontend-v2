import React from 'react';
import { useInView } from "react-intersection-observer"

const AnimateIn = ({ threshold = 0.20, triggerOnce = true, ...remainingProps }) => {
  const [ref, inView, entry] = useInView({ threshold, triggerOnce })

  return (
    <div
      className="animate-in"
      ref={ref}
      style={{
        // adjust these as desired
        transition: "opacity 400ms, transform 300ms",
        opacity: inView ? 1 : 0,
        // transform: `translateY(${inView ? 0 : 100}px)`,
      }}
      {...remainingProps}
    />
  )
}

export default AnimateIn;