"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

const dummyData = [
  {
    id: "1",
    title: "타이틀1",
    content: "콘텐츠 내용1 콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1콘텐츠 내용1",
  },
  {
    id: "2",
    title: "타이틀2",
    content: "콘텐츠 내용2 콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2콘텐츠 내용2",
  },
  {
    id: "3",
    title: "타이틀3",
    content: "콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3 콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3콘텐츠 내용3",
  }
]

export default function TestPage() {
  const checkAccorType = useRef();
  const [indexArr, setIndexArr] = useState([]);

  const handleAccordion = (index) => {
    const accorType = checkAccorType.current.dataset.accorType;

    if(accorType === "multi") {
      const updatedIndexArr = indexArr.includes(index)
        ? indexArr.filter((i) => i !== index)
        : [...indexArr, index];
      setIndexArr(updatedIndexArr);
    }else{
      indexArr.includes(index) ? setIndexArr([-1]) : setIndexArr([index]);
    }
  };

  useEffect(()=>{
    console.log("indexArr", indexArr);
  }, [indexArr])

  return (
    <>
      <h3>아코디언 framer-motion 연습</h3>
      <div className="accordion-wrap" ref={checkAccorType} data-accor-type="multi">
          {dummyData?.map((item, index)=>{
            return (
              <li key={item.id} className="list">
                <button type="button" className="title" onClick={() => handleAccordion(index)}>{item.title}</button>
                <AnimatePresence>
                  {indexArr.includes(index) && (
                    <motion.div
                      className="toggle-area"
                      initial={{ height:0,  opacity: 0 }}
                      animate={{ height:'auto', opacity: 1 }}
                      exit={{ height:0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                      <p className="content">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
      </div>
    </>
  )
}
