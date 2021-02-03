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

//add parent 1
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
          content: [{ div: 'default' }],
          subNav: null
        }
      );
      return arr;
    }
  }
}

//add parent 2
export const Add_API = (value) => {
  const obj = {
    title: value,
    path: '/' + value,
    content: [{ div: 'default' }],
    subNav: null
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
export const Delete_useState = (data, ArrIndexTrack) => { //0.1
  console.log(`ARRAY INDEX: ${JSON.stringify(ArrIndexTrack)}`)
  console.log(`PREVIOUS ARRAY: ${JSON.stringify(data[ArrIndexTrack[0]])}`) //test
  //------------------------------------------
  let arr = [...data]
  console.log(`${JSON.stringify(arr[0, 0])}`);
  let temp = []
  for (let i = 0; i < ArrIndexTrack.length - 1; i++) {
    temp += ArrIndexTrack[i]             //temp is parent of last element

  }
  console.log(`test: ${JSON.stringify(arr[temp])}`) //test 
  arr[temp].subNav.splice(0, 1)
  console.log(`test2: ${JSON.stringify(arr[ArrIndexTrack[0]])}`) //test

  // const arr = [...data];
  // let newArrIndexTrack = ArrIndexTrack;
  // newArrIndexTrack.splice(newArrIndexTrack.length,1); //get 0,0
  // console.log(`${JSON.stringify(  arr[0,0]  )}`);
  // let newArray2 = ArrIndexTrack.splice(ArrIndexTrack.length,1); //get 1
  // console.log(`${JSON.stringify(  arr[newArrIndexTrack]  )}`);
  // arr[newArrIndexTrack].splice(newArray2,1)

  //-------------------------------------------
  //console.log(`NEW ARRAY: ${JSON.stringify(arr[ArrIndexTrack[0]])}`) //test
  return arr;
}


//delate 2
export const Delete_API = (data, ArrIndexTrack) => {
  // const arr = [...data];
  // arr.splice((ArrIndexTrack), 1);
  // console.log(`PARENT INDEX: ${ArrIndexTrack[0]}`);
  // console.log(`parent obj to be updated: ${JSON.stringify( arr[ArrIndexTrack[0]] )}`);

  // if(ArrIndexTrack.length == 1){ //ok
  //   axios
  //   .delete(`http://localhost:5000/api/posts/${arr[ArrIndexTrack[0]]._id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     return true;
  //   })
  //   .catch((err) => {
  //     console.log(`ERROR WITH DELETE?: ${err}`);
  //     return false;
  //   });

  // }
  // else{
  //   axios
  //   .patch(`http://localhost:5000/api/posts/${arr[ArrIndexTrack[0]]._id}`, arr[ArrIndexTrack[0]])
  //   .then((res) => {
  //     console.log(res.data);
  //     return true;
  //   })
  //   .catch((err) => {
  //     console.log(`ERROR WITH DELETE?: ${err}`);
  //     return false;
  //   });
  // }


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
export const AddChild_useState = (data, value, ArrIndexTrack) => {// 0.0 =>0.0.0
  const arr = [...data];
  let lastPath = ''

  let temp = {
    title: value,
    path: `${lastPath}/${value}`,
    content: [{ div: 'default' }],
    subNav: []
  }

  if (ArrIndexTrack.length == 1) {        //2d arr
    lastPath = arr[ArrIndexTrack[0]].path;
    if (!arr[ArrIndexTrack].subNav) {
      arr[ArrIndexTrack[0]].subNav = [temp]
    } else {
      arr[ArrIndexTrack[0]].subNav.push(temp)
    }
  }

  if (ArrIndexTrack.length == 2) {         //3d arr
    lastPath = arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].title
    if (!arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav) {
      arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav = [temp]
    } else {
      arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav.push(temp)
    }
  }

  if (ArrIndexTrack.length == 3) {         //4d arr
    lastPath = arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].title
    if (!arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]]) {
      arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].subNav = [temp]
    } else {
      arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].subNav.push(temp)
    }
  }
  console.log(JSON.stringify(arr))
  return arr;

}


//add_child 2
export const AddChild_API = (newArr, ArrIndexTrack) => {
  let arr = [...newArr];

  axios
    .patch("http://localhost:5000/api/posts/" + arr[ArrIndexTrack[0]]._id, arr[ArrIndexTrack[0]])
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(`WHAT IS THIS ERROR?: ${err}`);
      return false;
    });
}
