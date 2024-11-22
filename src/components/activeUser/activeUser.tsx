import React, { useEffect, useState } from "react";
import { useActiveUser } from "../../providers/activeUser";
import './activeUser.scss';
export const ActiveUser = () => {
    const { props } = useActiveUser();
    const [active,setActive] = useState(true);
    useEffect(()=> {
if(active == true) {
    setTimeout(() => {
        setActive(false)
    }, 2000);
}
    },[active])
    useEffect(()=> {
if(props) {
    setActive(true)
}
if(!props) setActive(false)
    },[props])
    return (
      <div style={active == true ? {
        visibility:'visible'
      }:{
        visibility:'hidden'
      }}  className="activeUser fixed z-20 w-[212px] h-[109px] left-[25%] top-[20px] py-[10px] ">
       <div className="text-center text-[#FED696] font-[900] text-[18px] bg-white/20 rounded-[10px] w-10/12 mx-auto"><b>ТЫ СРЕДИ  {typeof props === "object" ? JSON.stringify(props) : props}%</b></div>
       <div className="text-center text-[#FED696] font-[900] text-[16px] uppercase mt-[5px]"><b>активных <br/>зрителей шоу</b></div>
      </div>
    );
  };
  