import React, { useState } from "react";
const Dynaminimage = ({ imgs }) => {
  const [myimg, setmyimg] = useState(imgs[0]);
  return (
    <div className="flex items-center justify-center gap-10 sm:gap-20">
      <div>
        {imgs.map((curElm, index) => {
          return (
            <figure key={index}>
              <img
                src={curElm}
                alt=""
                className="w-20"
                onClick={() => setmyimg(curElm)}
              />
            </figure>
          );
        })}
      </div>
      <div>
        <img src={myimg} alt="" className="sm:w-72" />
      </div>
    </div>
  );
};
export default Dynaminimage;