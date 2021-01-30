//import React from 'react'
import axios from "axios";

// get all(not working atm)
export const GetAll_API = () => {
  axios
    .get("http://localhost:5000/api/posts/")
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(`GETALL ERROR?: ${err}`);
      return '';
    })
}


//add 1
export const Add_useState = (value, data) => {

  let arr = [...data];
  if (value === "" || value === null) {
    // document.getElementById('errorMsg').innerHTML = 'Invalid File Name';
  } else {
    let boolExistingName = false;
    arr.map((obj) => {
      if (obj.title === value) boolExistingName = true;
    });
    if (!boolExistingName) {
      arr.push(
        {
          title: value,
          path: '/' + value,
          icon: '<AiIcons.AiFillHome />',
          content: [{ div: 'default' }]
        }
      );
      return arr;
    }
  }
}

//add 2
export const Add_API = (value) => {

  const obj = {
    title: value,
    path: '/' + value,
    content: [{ div: 'default' }]
  };

  axios
    .post("http://localhost:5000/api/posts/", obj)
    .then((res) => {
      console.log("post succeeded");
      return true;
    })
    .catch((err) => {
      console.log(`ERROR WITH ADD?: ${err}`);
      return false;
    });
}

//delete 1
export const Delete_useState = (id, data) => {
  const arr = [...data];
  let found = arr.find((page) => { return page._id = id; }) //find obj
  let index = arr.indexOf(found)                           //find index of the obj
  arr.splice(index, 1);
  return arr;

}

//delate 2
export const Delete_API = (id) => {

  axios
    .delete(`http://localhost:5000/api/posts/${id}`)
    .then((res) => {
      console.log(res.data);
      return true;
    })
    .catch((err) => {
      console.log(`ERROR WITH DELETE?: ${err}`);
      return false;
    });
}

//update 1
export const Update_useState = (data, id, value) => {
  const arr = [...data];
  let found = arr.find((page) => { return page._id === id; }) //find obj
  let index = arr.indexOf(found)                           //find index of the obj
  arr.splice(index, 1);
  found.title = value
  arr.push(found)
  return arr;

}
//update 2
export const Update_API = (id, value) => {
  const obj = {
    title: value,
    body: 'PATCH UPDATE Api',
    date: Date.now()
  };

  axios
    .patch("http://localhost:5000/api/posts/" + id, obj)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(`WHAT IS THIS ERROR?: ${err}`);
      return false;
    });
}

//add_child 1
export const AddChild_useState = (data, value, id) => {
  const arr = [...data];
  let found = arr.find((page) => {
     return page._id === id; }) //find obj
  let index = arr.indexOf(found)                           //find index of the obj
  arr.splice(index, 1);
  found.subNav.push(
    {
      _id: '1121221',
      title: value,
      body: 'PATCH UPDATE Api',
      date: Date.now(),
      path:found.path+'/'+value
    })
  arr.push(found)
  return arr;
}

//add_child 2
export const AddChild_API = (data, value, id) => {
  console.log(value)
  const arr = [...data];
  let found = arr.find((page) => { return page._id === id; }) 

  axios
    .patch("http://localhost:5000/api/posts/" + id, found)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(`WHAT IS THIS ERROR?: ${err}`);
      return false;
    });
}

//update
// useEffect(()=>{
//   const obj = {
//             title:'UDPATE this Object!!',
//             body:'PATCH UPDATE Api',
//             date: Date.now()
//         };
//    
