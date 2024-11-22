import { HeaderComponent } from "../../components/headerComponent/headerComponent"
import {Ads} from '../../components/ads/ads'
import { YourEmoji } from "../../components/yourEmoji/yourEmoji"
import { InviteFriend } from "../../components/inviteFriend/inviteFriend"
export const Display4 = ()=> {
    return(
        <>
        <div className="w-full h-full py-[1px]  ">
    <HeaderComponent/>
<YourEmoji/>
<InviteFriend/>
<Ads/>
        </div>
        </>
    )
}