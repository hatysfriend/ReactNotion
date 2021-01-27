import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetAll=()=> {
   axios
      .get("http://localhost:5000/api/posts/")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(`GETALL ERROR?: ${err}`);
        return null
      });
}
//useEffect + useState => when useEffect trigged=>useState triggered => re-rendered

// export const API = () => {
//   useEffect(() => {
//     const obj = {
//       title: "League Of Legends",
//       path: "/lol",
//       content: "()=><div className='lol'>lol</div>",
//     };

//     axios
//       .post("http://localhost:5000/api/posts/", obj)
//       .then((res) => {
//         console.log("post succeeded");
//         return res.data
//       })
//       .catch((err) => {
//         console.log(`WHAT IS THIS ERROR?: ${err}`);
//       });
//   }, []);
//   return null;
// };


//update
// useEffect(()=>{
//   const obj = {
//             title:'UDPATE this Object!!',
//             body:'PATCH UPDATE Api',
//             date: Date.now()
//         };
//     axios
//       .patch("http://localhost:5000/api/posts/60105c9694952451303e4c11",obj)
//       .then((res) => {
//         console.log(res.data);
//         //find obj id=id, set new one
//         setTestnum(100);
//       })
//       .catch((err) => {
//         console.log(`WHAT IS THIS ERROR?: ${err}`);
//       });
//     }, [])

//delete
//     useEffect(()=>{
//         axios
//           .delete("http://localhost:5000/api/posts/60105c9694952451303e4c11")
//           .then((res) => {
//             console.log(res.data);
//             // setTestnum(100);
//             // setDataFromDB(res.data);
//           })
//           .catch((err) => {
//             console.log(`WHAT IS THIS ERROR?: ${err}`);
//           });
//         }, [])



//get everything
// useEffect(()=>{
//   axios
//     .get("http://localhost:5000/api/posts/")
//     .then((res) => {
//       console.log(res.data);
//       setTestnum(100);
//       setDataFromDB(res.data);
//     })
//     .catch((err) => {
//       console.log(`WHAT IS THIS ERROR?: ${err}`);
//     });
//   }, [])

//add =>result should be 6 objs
