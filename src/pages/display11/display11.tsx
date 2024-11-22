import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { YouGetHoodie, YouWin } from "../../components/winner/winner"

export const Display11 = ()=> {
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YouWin/>
<YouGetHoodie/>
        </div>
        </>
    )
}