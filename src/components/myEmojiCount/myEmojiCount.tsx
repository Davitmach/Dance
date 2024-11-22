import { CloseBtn } from '../closeBtn/closeBtn';
import { Emojis } from '../emojis/emojis';
import './myEmojiCount.scss';

export const MyEmojiCount = ()=> {
    return(
        <div  className='w-11/12 myEmoji relative z-20 mx-auto mt-[130px] py-[10px] '>
            <div className='mx-auto'><img className=' mx-auto rounded-[50%] w-[75px] h-[75px] border-[2px] border-[#F7CD91] relative z-20' src='./avatar.png'/></div>
            <div className="mx-auto flex justify-center items-center gap-2 relative z-20 mt-[24px]">
                        <b className=" text-16 text-[16px] font-[900] text-white">У ТЕБЯ</b>
                        <b className="volume">344</b>
                        <b className="text-1 text-16 text-[16px] font-[900] text-white">ЭМОДЖИ</b>
                    </div>
                    <div className="uppercase text-white relative z-20 text-center text-[20px] font-[900]">
                        <p>
                        Приходи в 19:00 10 ноября
                        <br/>на следующий эфир 
                        </p>
                    </div>
                    <div className="uppercase text-white  relative z-20 text-[.7em] text-center mt-[10px]">
                        <p>
                            И поделись эмоциями с любимыми артистами<br/>
                            <br/>
                            Все, кто использовал 10000 и больше эмоджи<br/>
                            за эфир, участвуют в розыгрыше призов<br/>
                        </p>
                    </div>
                    <Emojis/>
                    <div className='relative z-20 flex justify-center'>  <button className="btn-n font-[gteproRegular] mt-[10%] text-white rounded-[50px] text-[1em] aspect-[1/0.2] bg-gradient-to-r from-[#ec523a] to-[#da40bb] w-[240px] h-[40px]" >ПРИГЛАСИТЬ ДРУЗЕЙ</button></div>
        </div>
    )
}