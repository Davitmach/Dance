import { useEffect } from "react";
import { Choose } from "../../components/choose/choose"
import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { YourEmoji2 } from "../../components/yourEmoji/yourEmoji";

export const Display6 = ()=> {


    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<Choose/>
<YourEmoji2/>
        </div>
        </>
    )
}