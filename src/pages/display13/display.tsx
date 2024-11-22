import { Ads } from "../../components/ads/ads"
import { EmojisComponent } from "../../components/emojis/emojis"
import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { InviteComponent } from "../../components/inviteComponent/inviteComponent"
import { YourEmoji4 } from "../../components/yourEmoji/yourEmoji"

export const Display13 = ()=> {
    return(
        <>
       <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YourEmoji4/>
<EmojisComponent/>
<Ads/>
<InviteComponent/>
        </div>
    </>
    )
}