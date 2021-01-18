import "./styles/App.css";
import PageComponent from "./components/PageComponent";
import SidebarComponent from "./components/SidebarComponent";
import HeaderComponent from "./components/HeaderComponent";
import { useState } from "react";

export default function App() {
  const [DBdata, setDBdata] = useState(DataFromDB);

  const handleAdd = (value) => {
    let arr = [...DBdata];
    if (value == "" || value == null) {
      console.log("YOU ENTERED A NULL/EMPTY VALUE");
      // document.getElementById("errorMessage").value = <p>error</p>;
    } else {
      let boolExistingName = false;
      arr.map((page) => {
        if (page.pageName === value) boolExistingName = true;
      });
       if(!boolExistingName) {
        console.log(`valuePageName: ${value}`);
        arr.push({
          pageId: Math.random().toString(36).substring(7),
          pageName: value,
          pageData: value.pageData,
          file_inside: "",
        });
        setDBdata(arr);
        console.log(`The new ARRAY: ${JSON.stringify({arr})}`);
        console.log(`The new ARRAY: ${JSON.stringify({DBdata})}`);
      }
    }
  };

  return (
    <div className="App">
      <SidebarComponent DBdata={DBdata} onAdd={handleAdd} />

      <div className="mainContent">
        <HeaderComponent DBdata={DBdata} />
        <PageComponent DBdata={DBdata} />
      </div>
    </div>
  );
}

// const handleAdd = (value) => {
//   if (value == "" || value == null) {
//     // document.getElementById("errorMessage").value = <p>error</p>;
//   } else {
//     let boolExistingName = false;
//     DBdata.map((page) => {
//       if (page.name == value) boolExistingName = true;
//     });
//     if (!boolExistingName) {
//       const arr = [...this.DBdata];
//       arr.push({
//         pageId: Math.random().toString(36).substring(7),
//         pageName: value.pageName,
//         pageData: value.pageData,
//         file_inside: "",
//       });
//     }
//   }
// };

const DataFromDB = [
  {
    pageId: "846u9qm",
    pageName: "React-Page-one",
    pageData: "1",
    file_inside: ""
  },
];
