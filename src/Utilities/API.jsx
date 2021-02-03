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
export const Delete_useState = (data, ArrIndexTrack) => {
  let arr = [...data]

  //delete p
  if (ArrIndexTrack.length == 1) { arr.splice(ArrIndexTrack[0], 1); }
  if (ArrIndexTrack.length == 2) { arr[ArrIndexTrack[0]].subNav.splice(ArrIndexTrack[1], 1); }
  if (ArrIndexTrack.length == 3) { arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav.splice(ArrIndexTrack[2], 1); }
  if (ArrIndexTrack.length == 4) { arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].subNav.splice(ArrIndexTrack[3], 1); }
 
  console.table(arr)
  return arr; 
}


//delate 2
export const Delete_API = (newArr, ArrIndexTrack,data) => {
  
  const arr = [...newArr];

  if(ArrIndexTrack.length == 1){ //ok
    axios
    .delete(`http://localhost:5000/api/posts/${data[ArrIndexTrack[0]]._id}`)
    .then((res) => {
      console.log(res.data);
      return true;
    })
    .catch((err) => {
      console.log(`ERROR WITH DELETE?: ${err}`);
      return false;
    });
  }

  else{
    axios
    .patch(`http://localhost:5000/api/posts/${data[ArrIndexTrack[0]]._id}`, arr[ArrIndexTrack[0]])
    .then((res) => {
      console.log(res.data);
      return true;
    })
    .catch((err) => {
      console.log(`ERROR WITH DELETE?: ${err}`);
      return false;
    });
  }

}

//update 1
export const Update_useState = (data, ArrIndexTrack, value) => {
  const arr = [...data];
  let tempPath = ''

  if (ArrIndexTrack.length == 1) {        //parent
    arr[ArrIndexTrack[0]].title = value
    arr[ArrIndexTrack[0]].path = '/' + value
  }

  if (ArrIndexTrack.length == 2) {         //2d arr
    tempPath = arr[ArrIndexTrack[0]].path
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].title = value
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].path = tempPath + "/" + value
  }

  if (ArrIndexTrack.length == 3) {         //3d arr
    tempPath = arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].title
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].title = value
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].path = `${tempPath}/${value}`
  }

  if (ArrIndexTrack.length == 4) {         //4d arr
    tempPath = arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].title
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].subNav[ArrIndexTrack[3]].title = value
    arr[ArrIndexTrack[0]].subNav[ArrIndexTrack[1]].subNav[ArrIndexTrack[2]].subNav[ArrIndexTrack[3]].path = `${tempPath}/${value}`
  }
  console.table(arr)
  return arr;
}

//update 2
export const Update_API = (ArrIndexTrack, newArr) => {

  axios
    .patch("http://localhost:5000/api/posts/" + newArr[ArrIndexTrack[0]]._id, newArr[ArrIndexTrack[0]])
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
  let lastObj;
  for (let i = 0; i < ArrIndexTrack.length; i++) {
    if (i == 0) lastObj = arr[ArrIndexTrack[i]]
    else lastObj = lastObj.subNav[ArrIndexTrack[i]]
  }
  let lastPath = lastObj.path;

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
