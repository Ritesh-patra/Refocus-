import React from "react";
import Button from "./Button";

function Product({ val,mover,index }) {
  return (
    <div className="py-14 w-full h-[15rem] text-white ">
      <div onMouseEnter={()=>{mover(index)}} className=" max-w-screen-lg mx-auto  flex items-center justify-between">
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className=" end-1 mb-5 ">{val.description}</p>
          <div className="flex gap-5">
            <Button />
            {val.live && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
