import React,{useState,useEffect} from "react";
import Menu from "../components/hambarger";
import Navbar from "../components/navbar";
import VerticalTabs from "../components/TabPanel";

const DashBoard = (props)=>{
    const [tabDisplay,setTabDisplay]=useState(true);
    const toggleTabDisplay=()=>{
        setTabDisplay(prev=>!prev)
    }
    return <div style={{height:"100vh",width:"100%"}}>
        <Navbar toggleTabDisplay={toggleTabDisplay}/>
        <div >
        <VerticalTabs display={tabDisplay}/>
    </div></div>;
}

export default DashBoard;