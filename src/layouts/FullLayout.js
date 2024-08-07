import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import { useSidebar } from "../context/SidebarContext";
import Cookies from "universal-cookie";
const FullLayout = () => {
  const token = new Cookies()
  const navigate = useNavigate()
  // const [toggleSidebar,setToggleSidebar] = useState()
  const { isSidebarOpen } = useSidebar();
 
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className={`sidebarArea shadow ${isSidebarOpen ? 'd-none' : ''}`} id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea" style={{width:'100vw'}}>
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
