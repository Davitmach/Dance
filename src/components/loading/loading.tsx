import React from "react";
import { useLoading } from "../../providers/loading"; 
import './loading.scss';
export const Loading = () => {
  const { active } = useLoading();
  const {setActive} = useLoading();
if(active == true) {
    setTimeout(()=> {
setActive(false)
    },2000)
    
}
  return (
    <div
      className={`loading-overlay ${active ? "visible" : "hidden"}`}
      id="loadingOverlay"
    >
      <div className="loading-spinner"></div>
    </div>
  );
};
