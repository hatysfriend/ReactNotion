import React, { useState } from "react";

export const Testloop = () => {
  const [parent, setParent] = useState([
    { tit: "0", sub: [{ tit: "0.1", sub: [{ tit: "1.0" }, { tit: "1.1" }] }] },
  ]);

  let index = 0;
  function loop() {
    parent.map((child) => {
      console.log(child.tit);
      child.sub && loop2(child.sub);
      
    });
  }

  function loop2(arr) {
    arr.map(baby=>{
        console.log('arr tracting index is :' );
        console.log(baby.title);
       //
      baby.sub && loop2(baby.sub);
    }
    ) 
  }



  return <div>
    {parent}
    {loop()}
    
    </div>;
};
