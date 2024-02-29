import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "what is your name my name is Ritesh patra tell me somthing about you",
      live: false,
    },
    {
      title: "TTR",
      description:
        "what is your name my name is Ritesh patra tell me somthing about you",
      live: true,
    },
    {
      title: "YIR 2033",
      description:
        "what is your name my name is Ritesh patra tell me somthing about you",
      live: false,
    },
    {
      title: "Yahoo!",
      description:
        "what is your name my name is Ritesh patra tell me somthing about you",
      live: true,
    },
    {
      title: "Rainfall",
      description:
        "what is your name my name is Ritesh patra tell me somthing about you",
      live: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 15);
  };

  return (
    <div className="mt-20 mb-16 relative">
      {products.map((item, index) => {
        return <Product key={index} val={item} mover={mover} index={index} />;
      })}
      <div className=" w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          className="w-[18rem] h-[15rem] left-[42%] overflow-hidden absolute"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: 'linear', duration: 0.6 }}
            className="w-full h-full"
          >
            <img 
              src="https://i.pinimg.com/474x/30/9a/12/309a1203430fc43151336aace47e5139.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className="w-full h-full ">
            <img 
              src="https://i.pinimg.com/474x/4d/b4/8e/4db48e155c95b8d7d8ff2e3ef6f7aee3.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className="w-full h-full ">
            <img 
              src="https://i.pinimg.com/474x/d9/eb/27/d9eb277bb93800932b138ad05e949826.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className="w-full h-full ">
            <img  
              src="https://i.pinimg.com/474x/f6/bf/bc/f6bfbc8fdb2a5b3de5dc597c948ff072.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `rem` }} className="w-full h-full ">
            <img  
              src="https://i.pinimg.com/474x/23/ed/47/23ed474a5973bd3324e726c66a59fb1b.jpg"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
