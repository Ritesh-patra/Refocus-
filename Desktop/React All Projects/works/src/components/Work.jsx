import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function Work() {
  const [image, setImages] = useState([
    {
      url: "https://i.pinimg.com/474x/d4/dc/49/d4dc4927e71a1662ff0261d8cd7c0d14.jpg",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/474x/dc/a7/e7/dca7e77101af5ba5af961189904d7789.jpg",
      top: "58%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/474x/62/f4/44/62f44495b72a70c35cac6c1e1b643ce2.jpg",
      top: "63%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/474x/e3/7b/d7/e37bd7d91180c5dc06164db9e3f96351.jpg",
      top: "59%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/474x/01/43/4e/01434e27b042a7e09f2363e64324ff85.jpg",
      top: "58%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages( prev => 
         prev.map((item, index) =>
          arr.indexOf(index) === -1
          ? { ...item, isActive: false}
          : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 4:
        imageShow([0, 1]);
        break;
      case 6:
        imageShow([0, 1, 2]);
        break;
      case 8:
        imageShow([0, 1, 2, 3]);
        break;
      case 10:
        imageShow([0, 1, 2, 3, 4]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="max-w-screen-lg text-center mx-auto relative">
        <h1 className="text-[34vw]  leading-none text-white tracking-tight font-medium select-none">
          work
        </h1>
      </div>
      <div className="w-full h-full absolute top-0">
        {image.map(
          (item, index) =>
            item.isActive && (
              <img
                className=" absolute w-48 rounded-lg h-60 object-cover -translate-x-[50%] -translate-y-[50%]"
                style={{ top: item.top, left: item.left }}
                src={item.url}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
