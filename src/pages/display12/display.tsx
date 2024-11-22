import { HeaderComponent } from "../../components/headerComponent/headerComponent"

import { InviteFriend, WinnerName } from "../../components/winner/winner"

export const Display12 = ()=> {
    return(<>
       <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<WinnerName/>
<InviteFriend/>

        </div>
    </>)
}