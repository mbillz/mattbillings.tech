import React, { memo, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ delay, x, children }) => {
  const [visible, setVisible] = useState(false);

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? `translateX(0)` : `translateX(${x})`,
  });

  useEffect(() => {
    setTimeout(() => setVisible(true), delay);
  });

  return <animated.div style={spring}>{children}</animated.div>;
};

export default memo(AnimatedText);
