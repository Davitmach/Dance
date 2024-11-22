import './avatarComponent.scss';
export const AvatarComponent=()=> {
    return(
        <div className="avatar_box w-11/12  mx-[auto] rounded-[10px] relative pb-[2.2rem]">
            <div className="avatar   relative z-10 pt-[40px]"><img className='w-[20%] rounded-full mx-auto border-[2px] border-[#f7cd91]' src="./avatar.png"/></div>
            <div className=" mt-[2%] text-1 relative z-10 w-full text-center"><b className=' text-white text-[1.2em]'>ЗВЁЗДНЫЕ ТАНЦЫ</b></div>
            <div className="text-2 relative z-10 text-center">
                <p className='text-white text-[0.7em]'>
                    БОТ, КОТОРЫЙ ВМЕСТЕ С РЕКСОНОЙ <br/>
                    ПОМОЖЕТ ТЕБЕ ПОДДЕРЖИВАТЬ УЧАСТНИКОВ <br/>
                    ШОУ “ЗВЁЗДНЫЕ ТАНЦЫ”</p></div>
        </div>
    )
}
export const MainContainer= ()=> {
    return(
        <div className='main_div w-11/12 mt-[-40px] mx-auto z-20 relative pt-6 pb-[2rem] flex justify-center flex-col'>
<div className='text-center'><p className='text-white text-[1.2em] relative z-10'>ПОДПИШИСЬ <br/>НА ТЕКСТОВЫЕ СООБЩЕНИЯ, <br/>ЧТОБЫ БЫТЬ В КУРСЕ <br/>ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЕЙ <br/>И СТАРТА ВЫПУСКОВ ШОУ</p></div>
<div className="w-full flex justify-center confirmation-div relative z-10 text-white text-[0.7em] mt-[10%] ">
                <label className=" relative checkbox-container pl-[35px]">РАЗРЕШИТЬ ЗВЁЗДНЫМ ТАНЦАМ <br/>ПИСАТЬ МНЕ СООБЩЕНИЯ
                    <input type="checkbox" className='opacity-0' id="myCheckbox"/>
                    <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] rounded-md border-[#fed696] border-[2px]"></span>
                </label>
            </div>
            <div className="btn-div relative z-30 w-full mx-auto mt-5 flex items-center flex-col ">
                <button className="btn-c font-[gteproRegular] text-[1em] text-white rounded-[50px] border border-white aspect-[1/0.2] py-[10px] px-[20px] w-[240px] h-[40px]" >ОТМЕНА</button>
                <button className="btn-n font-[gteproRegular] mt-[10%] text-white rounded-[50px] text-[1em] aspect-[1/0.2] bg-gradient-to-r from-[#ec523a] to-[#da40bb] w-[240px] h-[40px]" >НАЧАТЬ</button>
            </div>
        </div>
    )
}