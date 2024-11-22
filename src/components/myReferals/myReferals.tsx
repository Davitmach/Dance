import { HandleNavigate } from '../../utils/navigate';
import { RefList } from '../refList/refList';
import { TimeZone } from '../timeZone/timeZone';
import './myReferals.scss';

export const MyReferals = ()=> {

    return(
        <div className="myRefs relative mt-[10px] w-11/12 mx-auto z-20 py-[10px]">
           <div className="text-white text-[1em] font-[900] mt-[2vh] relative z-20 text-center"><b>МОИ РЕФЕРАЛЫ</b></div>
      <RefList refs={['dede@gmail.com','adeadgr@gmail.com','dede@gmail.com','adeadgr@gmail.com','dede@gmail.com','adeadgr@gmail.com','dede@gmail.com','adeadgr@gmail.com']}/>
      <div className="mx-auto relative z-20 flex gap-2 justify-center mt-[15px]">
                        <b className="font-[900] text-[20px] text-white">БОНУС</b>
                        <b className="Bonus_text">455</b>
                    </div>
                    <div className="relative z-20 text-white text-[.7em] uppercase mt-[1vh] text-center">
                        <p>
                            За каждого приглашенного друга 1000 эмоджи. <br/>
                            Пригласить можно не более 10 друзей за выпуск. <br/>
                            Друг должен активировать нашего бота <br/>
                            и согласиться с правилами участия сразу после активации (кнопка “Я ознакомлен и соглашаюсь”)
                        </p>
                    </div>
                    <TimeZone/>
                    <div className='relative z-20 flex justify-center'>  <button onClick={()=> HandleNavigate('https://rexona.tnt-online.ru/rules')} className="btn-n font-[gteproRegular] mt-[3%] text-white rounded-[50px] text-[1em] aspect-[1/0.2] bg-gradient-to-r from-[#ec523a] to-[#da40bb] w-[240px] h-[40px]" >ПРАВИЛА УЧАСТИЯ</button></div>
                    <div className='relative z-20 flex justify-center'>  <button onClick={()=> HandleNavigate('https://rexona.tnt-online.ru/#rexona_steps')} className="btn-n font-[gteproRegular] mt-[3%] text-white rounded-[50px] text-[1em] aspect-[1/0.2] bg-gradient-to-r from-[#ec523a] to-[#da40bb] w-[240px] h-[40px]" >КАК УЧАСТВОВАТЬ</button></div>
                    <div className='relative z-20 flex justify-center'>  <button onClick={()=> HandleNavigate('https://rexona.tnt-online.ru/winners')} className="btn-n font-[gteproRegular] mt-[3%] text-white rounded-[50px] text-[1em] aspect-[1/0.2] bg-gradient-to-r from-[#ec523a] to-[#da40bb] w-[240px] h-[40px]" >ПОБЕДИТЕЛИ</button></div>
                    <div className="text-white text-[.7em] my-[20px] relative z-10 text-center">
                        <p>ОСТАЛИСЬ ВОПРОСЫ? НАПИШИ НАМ</p>
                    </div>
                    <div className='relative z-10 flex justify-center'>  <button className="btn-c font-[gteproRegular] text-[1em] text-white rounded-[50px] border border-white aspect-[1/0.2] py-[10px] px-[20px] w-[240px] h-[40px]" >ЗАДАТЬ ВОПРОС</button></div>
        </div>
    )
}