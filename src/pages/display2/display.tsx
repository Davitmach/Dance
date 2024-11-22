import { Ads } from "../../components/ads/ads";
import { HeaderComponent } from "../../components/headerComponent/headerComponent";
import { HowParticipate } from "../../components/howParticipate/howParticipate";

function Display2() {
return(
    <>
    <div className="w-full h-full py-[1px]">
  <HeaderComponent/>
  <HowParticipate/>
  <Ads/>
    </div>
    </>
)
}
export default Display2;