import React, { useState, useEffect} from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageContent from './components/PageContent'
import {
  Add_useState, Add_API, Delete_useState, Delete_API, GetAll_API,
  Update_useState, Update_API, AddChild_useState, AddChild_API
} from './Utilities/API';
import axios from "axios";

//function component 
export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(`GETALL ERROR?: ${err}`);
      })
    // GetAll_API() && setData(GetAll_API());
  }, [data])

  //add_new function
  function HandleAdd(value) {
    const newArr = Add_useState(value, data);
    let bool = Add_API(value);
    bool && setData(newArr)
  }
  //add_new_inside function
  function HandleAddChild(id, value, ArrIndexTrack) {
    console.log(value)
    const newArr = AddChild_useState(data, value, id, ArrIndexTrack)
    let bool = AddChild_API(data, value, id);
    bool && setData(newArr)
  }
  //delete_page function
  const HandleDelete = (id) => {
    let newArr = Delete_useState(id, data)
    let bool = Delete_API(id)
    bool && setData(newArr)
  }
  //update_page function
  const HandleUpdate = (id, value) => {
    let newArr = Update_useState(data, id, value)
    let bool = Update_API(id, value)
    bool && setData(newArr)
  }




  //route loop for parent page
  function routingLoop() {
    return (
      <><Switch>
        <Route path='/' component={() => <div className='lol'><h1>default page</h1></div>} />
        {data.map((item) => {
          return (
            <Route key={item.path} path={item.path}
              render={() => <PageContent item={item} />} />
          );
        })}
      </Switch></>
    );
  }


  //render
  return (
    <div className="App">
      <Router>
        <Sidebar data={data} handleAdd={HandleAdd} HandleDelete={HandleDelete}
          HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild} />
        {routingLoop()}
      </Router>
    </div>
  )
}

//<AiIcons.AiFillHome /><RiIcons.RiArrowDownSFill /><RiIcons.RiArrowUpSFill /><IoIcons.IoMdHelpCircle />
//<IoIcons.IoIosPaper /><FaIcons.FaCartPlus /><IoIcons.IoMdPeople /><FaIcons.FaEnvelope /><IoIcons.IoIosPaper />
//not used 
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// import { GetAll } from './API'
// import Modal from './components/Modal'

// import axios from "axios";