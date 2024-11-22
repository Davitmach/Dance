import './winner.scss'
export const SoonWin = ()=> {
    return(
        <div className="win_box relative z-20 w-11/12 mx-auto rounded-[10px] mt-[30px] py-[20px]">
            <div className="text-3 text-center relative z-20">
                        <b className=" uppercase text-white text-[20px] font-[900]">
                            Скоро мы объявим <br/>
                            победителей среди <br/>
                            зрителей
                        </b>
                    </div>
                    <div className='relative z-20 w-[200px] h-[200px] mx-auto'><img src={'./black_hoodie.png'}/></div>
                    <div className="text-center text-[11px] text-white relative z-20">
                        <p>
                            ПОЛУЧИ ПО 1000 ЭМОДЖИ <br/>
                            ЗА КАЖДОГО ПРИГЛАШЕННОГО ДРУГА
                        </p>
                    </div>
                   <div className='flex justify-center mt-[30px]'> <button className=" mx-auto relative z-10 w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[16px] bg-linear rounded-[50px] "><p>ПРИГЛАСИТЬ ДРУЗЕЙ</p></button></div>
        </div>
    )
}
export const YouWin = ()=> {
    return(
        <div className='win_box relative z-20 w-11/12 mx-auto rounded-[10px] mt-[130px] py-[20px] '>
            <div className="relative z-20 uppercase text-[20px] font-[900] text-white text-center">
                        <b className="text-900 text-20">Вот это активность!</b>
                    </div>
                    <div className="volume relative z-20 uppercase">Ты — победитель!</div>
        </div>
    )
}
export const YouGetHoodie = ()=> {
    return(
        <div className='win_box relative z-20 w-11/12 mx-auto rounded-[10px]  py-[20px] '>
      <div className="relative z-20 text-center">
                        <b className="font-[900] text-[20px] text-white uppercase">
                            Ты получаешь <br/>
                            фирменную толстовку
                        </b>
                    </div>
                    <div className="text-[11px] text-white text-center relative z-20 uppercase mt-[10px]">
                        Мы с тобой свяжемся через телеграм <br/>
                        аккаунт @tnt_tancy
                    </div>
                    <div className='relative z-20 w-[200px] h-[200px] mx-auto'><img src={'./black_hoodie.png'}/></div>
                    <div className="text-center text-[11px] text-white relative z-20">
                        <p>
                            ПОЛУЧИ ПО 1000 ЭМОДЖИ <br/>
                            ЗА КАЖДОГО ПРИГЛАШЕННОГО ДРУГА
                        </p>
                    </div>
                   <div className='flex justify-center mt-[30px]'> <button className=" mx-auto relative z-10 w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[16px] bg-linear rounded-[50px] "><p>ПРИГЛАСИТЬ ДРУЗЕЙ</p></button></div>
    </div> 
    )
}
export const WinnerName = ()=> {
    return(
        <div className='win_box relative z-20 mt-[130px] mx-auto py-[40px] w-11/12'>
            <div className="text-[20px] font-[900] text-white text-center relative z-20 uppercase">
                        <b className="text-900 text-20">Ура! Появились <br/>
                            имена победителей</b>
                    </div>
                    <div className="uppercase text-[11px] text-white relative z-20 text-center mt-[20px]">
                        Проверь, есть ли ты или кто-то <br/>
                        из твоих друзей в списке
                    </div>
                    <div className='flex justify-center mt-[30px]'> <button className=" mx-auto relative z-10 w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[16px] bg-linear rounded-[50px] "><p>ПОБЕДИТЕЛИ</p></button></div>
        </div>
    )
}
export const InviteFriend = ()=> {
    return(
        <div className='win_box relative z-20 mt-[13px] mx-auto py-[40px] w-11/12'>
              <div className='relative z-20 w-[200px] h-[200px] mx-auto'><img src={'./black_hoodie.png'}/></div>
              <div className="uppercase text-white text-[11px] relative z-20 text-center mt-[30px]">
                        Получи по 1000 эмоджи <br/> 
                        за каждого приглашенного друга
                    </div>
                    <div className='flex justify-center mt-[30px]'> <button className=" mx-auto relative z-10 w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[16px] bg-linear rounded-[50px] "><p>ПРИГЛАСИТЬ ДРУЗЕЙ</p></button></div>
        </div>
    )
}