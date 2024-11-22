import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { OnlineEmoji } from "../../components/onlineEmoji/onlineEmoji"
import { YourAction } from "../../components/yourAction/yourAction"

export const Display8 = ()=> {
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
    <YourAction/>
<OnlineEmoji/>
        </div>
        </>
    )
}