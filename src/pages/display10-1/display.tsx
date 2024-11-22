import { useEffect } from "react"
import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { OnlineEmoji2 } from "../../components/onlineEmoji/onlineEmoji"
import { YourAction2 } from "../../components/yourAction/yourAction"
import { useActiveUser } from "../../providers/activeUser"

export const Display10_1 = ()=> {
    const {setProps} = useActiveUser();
    useEffect(()=> {
    setProps(33)
    },[])
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YourAction2/>
<OnlineEmoji2/>
        </div>
        </>
    )
}