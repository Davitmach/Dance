import { Ads } from "../../components/ads/ads"
import { EmojisComponent } from "../../components/emojis/emojis"
import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import { InviteComponent } from "../../components/inviteComponent/inviteComponent"
import { YourEmoji3 } from "../../components/yourEmoji/yourEmoji"

export const Display9 = ()=> {
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YourEmoji3/>
<EmojisComponent/>
<Ads/>
<InviteComponent/>
        </div>
        </>
    )
}