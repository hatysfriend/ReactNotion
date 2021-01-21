//not used
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import PageComponent from "./components/PageComponent";
// import SidebarComponent from "./components/SidebarComponent";
// import HeaderComponent from "./components/HeaderComponent";
//library.add(fas, fab); 


{/* <div className="mainContent">
        <HeaderComponent DBdata={DBdata} />
        <PageComponent DBdata={DBdata} />
      </div> */}
{/* <SidebarComponent DBdata={DBdata} onAdd={handleAdd} showtextbox={showtextbox} onOffBtn={onOffBtn} /> */}



// const [DBdata, setDBdata] = useState(DataFromDB);
//   const [showtextbox, setShowTextbox] = useState(false);



  //checking new file name and add
  // const handleAdd = (value) => {
  //   let arr = [...DBdata];
  //   if (value === "" || value === null) {
  //     console.log("YOU ENTERED A NULL/EMPTY VALUE");
  //   } else {
  //     let boolExistingName = false;
  //     arr.map((page) => {
  //       if (page.pageName === value) boolExistingName = true;
  //     });
  //     if (!boolExistingName) {
  //       console.log(`valuePageName: ${value}`);
  //       arr.push({
  //         pageId: Math.random().toString(36).substring(7),
  //         pageName: value,
  //         pageData: value.pageData,
  //         file_inside: "",
  //       });
  //       setDBdata(arr);
  //       onOffBtn(showtextbox);
  //     }
  //   }
  // };

  // const onOffBtn = (showtextbox) => {
  //   setShowTextbox(!showtextbox);
  // }