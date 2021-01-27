import React, { useState, useEffect } from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {GetAll} from './API'

export default function App() {
//<AiIcons.AiFillHome /><RiIcons.RiArrowDownSFill /><RiIcons.RiArrowUpSFill /><IoIcons.IoMdHelpCircle />
//<IoIcons.IoIosPaper /><FaIcons.FaCartPlus /><IoIcons.IoMdPeople /><FaIcons.FaEnvelope /><IoIcons.IoIosPaper />
  const [data, setdata] = useState([]);

  
  useEffect(()=>{
     GetAll()&&setdata(GetAll());
     console.log('what GetAll() returned is :'+JSON.stringify(GetAll()))
     console.log('after setdata:'+JSON.stringify(data))
  },[])


  
  //add new function
  // const HandleAdd = (value) => {
  //   console.log('new file add btn clicked: ' + value);
  //   let arr = [...data];
  //   if (value === "" || value === null) {
  //     // document.getElementById('errorMsg').innerHTML = 'Invalid File Name';
  //   } else {
  //     let boolExistingName = false;
  //     arr.map((obj) => {
  //       if (obj.title === value) boolExistingName = true;
  //     });
  //     if (!boolExistingName) {
  //       arr.push(
  //         {
  //           title: value,
  //           path: '/' + value,
  //           icon: <AiIcons.AiFillHome />,
  //           subNav: [],
  //           content: ()=><div className='lol'>{value}</div>
  //         }
  //       );
  //       setdata(arr);
  //       //console.log('original data updatad \n' + JSON.stringify(data))
  //       return 'data stored'
  //     }// document.getElementById('errorMsg').innerHTML = 'The File name is already exist';
  //   }
  // }

  return (
    <div className="App">
      <Router>
        {/* <Sidebar data={data} handleAdd={HandleAdd} /> */}
        <Switch>
          {routingLoop(data)}
        </Switch>
      </Router>
    </div>
  )
}

const routingLoop = (data) => {
  return (
    <>
      <Route path='/' exact component={()=><div className='lol'><h1>default page</h1></div>} />

      {data.map((item) => {
        let Pagefunc = eval(item.content)
        return (<Route key={item.path} path={item.path} exact component={Pagefunc} />);

      })}
    </>
  );
}











