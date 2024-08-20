"use client";

import PageTransition from "../_components/layout/PageTransition";
import {
  motion,
  useAnimationControls,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "./_components/Input";

export default function MainPage() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const controls = useAnimationControls();
  const handleClick = () => {
    console.log(controls);
    controls.start({ x: 140 });
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      console.log("보인다....");
    }
  }, [isInView]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PageTransition>
      <>
        <div style={{ height: "120vh" }}>234i234782348237949</div>
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

        <motion.div
          className="inView"
          ref={ref}
        >
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "red" }}
          ></div>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="id1"
            placeholder="입력1"
            {...register("id1", { required: "필수입력1" })}
            errors={errors?.id1 && errors.id1.message}
          />
          <Input
            id="id2"
            placeholder="입력2"
            {...register("id2", { required: "필수입력2" })}
            errors={errors?.id2 && errors.id2.message}
          />
          <button type="submit">Submit</button>
          <input
            type="checkbox"
            id="myChk1"
            {...register("myChk1")}
          />
        </form>
      </>
    </PageTransition>
  );
}
