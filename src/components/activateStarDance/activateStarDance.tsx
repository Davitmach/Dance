import './activateStarDance.scss';
import { useLoading } from '../../providers/loading';
export const ActivateStarDance = ()=> {
    const {setActive} = useLoading()
    return(
        <div className="dance_box relative z-20  w-11/12 rounded-t-[10px] mt-[130px] mx-auto flex flex-col items-center">
<button className='w-[52px] aspec-[1/1] relative z-10 mt-[35px] mb-[30px]'><img src='./checked.svg'/></button>
<div className="main-text relative z-10 text-white text-[1em] uppercase mt-[1vh] text-center">
                        Чтобы узнать <br/>
                        имена победителей <br/>
                        и не пропустить новые <br/>
                        выпуски шоу, <br/>
                        Активируй бот <br/>
                        <b className="star_text">звёздные танцы</b>
                    </div>
                    <button onClick={()=>setActive(true)} className="btn-active bg-linear relative z-20 text-white rounded-[50px] aspect-[1/.2] h-[40px] max-w-[240px] w-full font-['gteproRegular'] mt-[20px]" id="subscribe"><p>АКТИВИРОВАТЬ</p></button>
        </div>
    )
}