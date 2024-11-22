import { Outlet, useLocation } from "react-router-dom"
import { Loading } from "./components/loading/loading"
import { LoadingProvider } from "./providers/loading"
import { CabinetBtn } from "./components/cabinetBtn/cabinetBtn"
import { useEffect } from "react"
import { ActiveUser } from "./components/activeUser/activeUser"
import { ActiveUserProvider } from "./providers/activeUser"
export const Layout = ()=> {
  const location = useLocation();
  
  useEffect(()=> {
    if(location.pathname !== 'display6' && location.pathname !== 'display8') {

    
localStorage.removeItem('heart');
localStorage.removeItem('disheart');
localStorage.removeItem('class');
localStorage.removeItem('cool');

localStorage.setItem('emojis','10000')}
  },[location.pathname])
    return(
        <LoadingProvider>
          <ActiveUserProvider>
        <>
          <Outlet />
          <Loading />
          <CabinetBtn/>
          <ActiveUser/>
        </>
        </ActiveUserProvider>
      </LoadingProvider>
    )
}