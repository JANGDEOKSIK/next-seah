"use client";

import PageTransition from "../_components/layout/PageTransition";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const controls = useAnimationControls();
  const handleClick = () => {
    console.log(controls);
    controls.start({ x: 140 });
  };

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <PageTransition>
      <>
        <div style={{ height: "120vh" }}>234i234782348237949</div>
        <div style={{ position: "fixed", top: 0, left: 0, fontSize: 20 }}>
          {JSON.stringify(scrollYProgress.current)}
        </div>
        <motion.div
          className="box1"
          animate={{ opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 0.5 }} // 화면에 보일 때
          transition={{ delay: 0.4 }}
        ></motion.div>
        <hr />
        <div
          className="switch"
          data-ison={isOn}
          onClick={toggleSwitch}
        >
          <motion.div
            className="handle"
            layout
            animate={controls}
            initial={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 50,
            }}
          />
        </div>
        <button onClick={handleClick}>버튼 A</button>
      </>
    </PageTransition>
  );
}
