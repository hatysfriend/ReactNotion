import React, { useState, setState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";


export default function SidebarComponent() {
  const [pageList, setPageList] = useState(defaultPage);

  return (
    <HashRouter>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="sidenav">
          {pageList.map((page) => {
              console.log(`Is there a page there?: ${page.pageName}`);
              return <NavLink to="/">{page.pageName}</NavLink>;
            })}
        </div>

        {/* <div>
          <Route path="/" component={PageComponent}/>
        </div> */}
        
      </body>
     
    </HashRouter>
  );
}
function loadPage(id){
    
}


const defaultPage = [
  {
    pageId: "846u9qm",
    pageName: "kakeru",
    data: "1",
  },
  {
    pageId: "fjoweit",
    pageName: "thomas",
    data: "2",
  },
  {
    pageId: "8423tvewtkjgfhdfsqm",
    pageName: "loligirl",
    data: "3",
  },
];
