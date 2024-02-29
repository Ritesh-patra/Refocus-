import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div whileHover={{ backgroundColor : hover === true && "#7443FF",padding: "25px"}}
      className={`${width}  bg-zinc-800 text-white py-3 min-h-[21rem] px-3 flex flex-col justify-between rounded-2xl `}
    >
      <div className="flex flex-col">
        <div className=" flex items-center justify-between">
          <h4>up Next Project</h4>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="mt-5 text-3xl font-medium w-[80%]">
          Project and case studio
        </h1>
      </div>
      <div className="down mt-20 ">
        {start && (
          <>
            <h1 className="text-[5vw] font-semibold mt-5 tracking-tight leading-none">
              Start a project
            </h1>
            <button className="border-[.5px] text-lg px-5 mt-4 py-2 rounded-full border-zinc-100 ">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="font-medium text-sm">
            Know body fuck in know what will happen tomarrow.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
