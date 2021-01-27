import React, { useState, useEffect, Component, setState } from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { GetAll } from './API'
import Modal from './components/Modal'
import axios from "axios";

//function component 
export default function App() {
  const [data, setData] = useState([]);

    useEffect(() => { //get All
    axios
      .get("http://localhost:5000/api/posts/")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(`GETALL ERROR?: ${err}`);
      });
  }, [data])


  //route loop for parent page
  // routingLoop = () => {
  //   return (
  //     <>
  //       <Route path='/' exact component={() => <div className='lol'><h1>default page</h1></div>} />

  //       {data.map((item) => {
  //         //let Pagefunc = eval(item.content)
  //         //return (<Route key={item.path} path={item.path} exact component={Pagefunc} />);
  //       })}
  //     </>
  //   );
  // }

  //-----------------------[add]------------------------------------------------

  //add new function
  async function HandleAdd_useState(value){
    console.log('new file add btn clicked: ' + value);
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
            icon: <AiIcons.AiFillHome />,
            subNav: [],
            content: () => <div className='lol'>{value}</div>
          }
        );
        await HandleAdd_API(value, arr);
        
      }
    }
  }

   async function HandleAdd_API(value, arr){
    const obj = {
      title: value,
      path: '/' + value,
    };
    axios
      .post("http://localhost:5000/api/posts/", obj)
      .then((res) => {
        console.log("post succeeded");
        setData(arr);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(`ERROR WITH ADD?: ${err}`);
      });
  }

  //----------------------[delete]-------------------------------------------------------

  //handleDelete
   const HandleDelete_useState = (id) => {
    const arr = [...data];
    let found = arr.find((page) => { return page._id = id; }) //find obj
    let index = arr.indexOf(found)                           //find index of the obj
    arr.splice(index, 1); 
                                               
    HandleDelete_API(id, arr, index)
  }

  //handleDelete
  const HandleDelete_API = (id, arr, index) => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(arr);  
        
        // window.location.reload();
      })
      .catch((err) => {
        console.log(`ERROR WITH DELETE?: ${err}`);
      });
  }


  //------------------------[render]---------------------------------------------------
  return (
    <div className="App">
      <Router>
        <Sidebar data={data} handleAdd={HandleAdd_useState} HandleDelete={HandleDelete_useState}  />
        
        <Switch>
          {/* {routingLoop()} */}
        </Switch>
      </Router>
    </div>
  )
}

//<AiIcons.AiFillHome /><RiIcons.RiArrowDownSFill /><RiIcons.RiArrowUpSFill /><IoIcons.IoMdHelpCircle />
//<IoIcons.IoIosPaper /><FaIcons.FaCartPlus /><IoIcons.IoMdPeople /><FaIcons.FaEnvelope /><IoIcons.IoIosPaper />