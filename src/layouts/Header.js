import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Cookies from "universal-cookie";
import { logoutApi } from "../features/userApis";
import { ReactComponent as LogoWhite } from "../assets/images/logos/bi2.svg";
import user2 from "../assets/images/users/avatar.jpg";
import { socket } from "../socket";
import { getNotification } from "../features/userApis";
import moment from "moment"
const cookie = new Cookies();

const Header = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('bicuserData'))
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownOpenNotification, setDropdownOpenNotification] = React.useState(false);
  const [notification,setNotification] = useState([])
  const [count,setCount] = useState(0)

  const handlerLogout = async () => {
    const res = await logoutApi();
    if (res.data.success === true) {
      localStorage.removeItem("bicuserData");
      cookie.remove("bictoken");
      nav("/");
      window.location.reload();
    }
  };


  useEffect(() => {
    const gettingNotification = async () => {
      const res = await getNotification()
      setNotification(res?.data?.data)
    }
    user?.role === 'admin' && gettingNotification()
  },[])
  
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleNotification = () => {
    setDropdownOpenNotification((prevState) => !prevState)
    setCount(0)
  };

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  useEffect(() => {
    socket.on('receive-notification',(data)=> {
      setNotification((prev) => [data,...prev])
      setCount((prev) => prev + 1)
    })
    return () => {
      socket.off('receive-notification');
    };
  },[socket])

  return (
    <Navbar color="light" font="dark" expand="md" >
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen} style={{backgroundColor:'#1B1B29 !important'}}>
        <Nav className="me-auto" navbar>
          {/* <NavItem>
            <div className="nav-link" onClick={handlernav}>
              Starter
            </div>
          </NavItem>
          <NavItem>
            <div className="nav-link" onClick={handlernav}>
              About
            </div>
          </NavItem> */}
          {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Quality Assurance
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {/* isOpen={dropdownOpen} toggle={toggle} */}
        {(user?.role === 'admin') && <Dropdown style={{position:'relative'}} isOpen={dropdownOpenNotification} toggle={toggleNotification}>
          {count > 0 && <div className="d-flex justify-content-center align-items-center" 
            style={{color:'#000',backgroundColor:'#fff',padding:'5px'
            ,position:'absolute',right:'-5px',borderRadius:'20px',height:'18px'}}>
            {count}
          </div>}
          <DropdownToggle color="transparent" style={{border:'1px solid #DBDBDB', borderRadius:'10px'}}>
            <i class="bi bi-bell-fill text-white" width="30"></i>
          </DropdownToggle>
          {notification.length > 0 ? <DropdownMenu style={{maxHeight:'490px',minHeight:'90px',overflowY:'scroll'}}>
            {/* <DropdownItem header></DropdownItem> */}
            {/* <DropdownItem divider /> */}
            {notification.map((item) => (
              <DropdownItem>
                <div className="fw-bold">{item.userName} {item.description}</div>  
                <div className="text-sm">{moment(item.lastActive).format('MMMM Do YYYY, h:mm a')}</div>
                <DropdownItem divider />
              </DropdownItem>
            ))}
          </DropdownMenu> : 
          <DropdownMenu>
            <span style={{display:'flex',justifyContent:'center'}}>no notification</span>
          </DropdownMenu>
          }
        </Dropdown>}
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user2}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Role: {user?.role}</DropdownItem>
            <DropdownItem>{user?.email}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handlerLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
