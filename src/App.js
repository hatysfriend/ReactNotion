import React, { useState, useEffect } from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, HashRouter, NavLink } from 'react-router-dom'
import PageContent from './components/PageContent'
import {
  Add_useState, Add_API, Delete_useState, Delete_API, GetAll_API,
  Update_useState, Update_API, AddChild_useState, AddChild_API
} from './Utilities/API';
import axios from "axios";

//function component 
export default function App() {

  const [data, setData] = useState([]);
  let Routes = []

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/")
      .then((res) => {
        setData(res.data)
        Routes = RoutingLooping(data)
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
  function HandleAddChild(value, ArrIndexTrack) {
    console.log(value)
    const newArr = AddChild_useState(data, value, ArrIndexTrack)
    let bool = AddChild_API(newArr, ArrIndexTrack);
    bool && setData(newArr)
  }
  //delete_page function
  const HandleDelete = (ArrIndexTrack) => {
    let newArr = Delete_useState(data, ArrIndexTrack)
    let bool = Delete_API(newArr, ArrIndexTrack, data)
    bool && setData(newArr)
  }
  //update_page function
  const HandleUpdate = (ArrIndexTrack, value) => {
    let newArr = Update_useState(data, ArrIndexTrack, value)
    let bool = Update_API(ArrIndexTrack, newArr)
    bool && setData(newArr)
  }






  //render
  return (
    <div className="App">
      <Router>
        <Sidebar data={data} handleAdd={HandleAdd} HandleDelete={HandleDelete}
          HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild} />
        <Switch>
          <Route path='/' exact component={() => <div className='lol'><h1>default page</h1></div>} />
          {data && RoutingLooping(data)}


        </Switch>
      </Router>
    </div>
  )
}

const RoutingLooping = (data) => {
  let routes = [];
  if (data) {
    let a = data.map((item) => {
      if (item.subNav) {
        let b = item.subNav.map((item2) => {
          if (item2.subNav) {
            let c = item2.subNav.map((item3) => {
              if (item3.subNav) {
                let d = item3.subNav.map((item4) => {
                  return <Route exact path={item4.path} component={() => <PageContent item={item4} />} />
                })
                routes.push(...d);
              }
              return <Route exact path={item3.path} component={() => <PageContent item={item3} />} />
            })
            routes.push(...c);
          }
          return <Route exact path={item2.path} component={() => <PageContent item={item2} />} />
        })
        routes.push(...b);
      }
      return <Route exact path={item.path} component={() => <PageContent item={item} />} />
    })
    routes.push(...a);
  }
  return routes;
}


// route loop for parent page
// export const RoutingLoop = ({ item }) => {
//   html = ''
//   if
// }

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