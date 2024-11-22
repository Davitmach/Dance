import { HeaderComponent } from "../../components/headerComponent/headerComponent";
import { MyEmojiCount } from "../../components/myEmojiCount/myEmojiCount";
import { MyReferals } from "../../components/myReferals/myReferals";

function Display14() {
return(
    <>
    <div className="w-full h-full py-[1px]  ">
  <HeaderComponent/>
<MyEmojiCount/>
<MyReferals/>
    </div>
    </>
)
}
export default Display14;