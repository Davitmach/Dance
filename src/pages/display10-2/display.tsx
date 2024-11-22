import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { SoonWin } from "../../components/winner/winner"
import { YourAction3 } from "../../components/yourAction/yourAction"

export const Display10_2 = ()=> {
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YourAction3/>
<SoonWin/>
        </div>
        </>
    )
}