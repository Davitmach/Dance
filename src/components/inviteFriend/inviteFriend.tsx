import { Emojis } from '../emojis/emojis';
import { TimeZone } from '../timeZone/timeZone';
import './inviteFriend.scss';
export const InviteFriend = ()=> {
    return(
        <div className='invite_box relative z-20 w-11/12 mx-auto py-[10px] flex flex-col items-center gap-2'>
            <Emojis/>
            <div className="main-text-1 relative z-20  text-white text-[11px] text-center">ПОЛУЧИ ПО 1000 ЭМОДЖИ ЗА КАЖДОГО ПРИГЛАШЕННОГО ДРУГА</div>
           
            <button className="relative z-20 w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[1em] bg-linear rounded-[50px]"><p>ПРИГЛАСИТЬ ДРУЗЕЙ</p></button>
            <div className="main-text-2 relative z-20 text-white text-[.7em] text-center">
                        <p>УЧАСТНИКИ, ОТДАВШИЕ ОТ 10000 ЭМОДЖИ<br/>ЗА ВЫПУСК, УЧАСТВУЮТ В РОЗЫГРЫШЕ ПРИЗОВ</p>
                    </div>
            <TimeZone/>
        </div>
    )
}