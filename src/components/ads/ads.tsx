import './ads.scss';
export const Ads =()=> {
    return(
        <div className="ads mt-[10vh] w-11/12 relative m-auto h-[30vh]">
<div style={{background:'url(./rexona_galka.svg)',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPositionX:'center'}} className=' w-full z-20 h-full absolute ' ></div>
<div className='w-full relative z-20'><img className='mx-auto w-[190px] h-[82px] aspec-[164/62.08]' src='./logoText.png'/></div>
<div className="rexona-text relative z-20 mt-[3.8vh] text-white font-[700] text-[18px] text-center uppercase">
                        Поддержи участников <br/>
                        и помоги им почувствовать <br/>
                        уверенность вместе с Рексоной
                    </div>
        </div>
    )
}
export const Ads2 =()=> {
    return(
        <div className='w-11/12 mx-auto mt-[20px] mb-[70px]'>
            <img src='./footer.png'/>
        </div>
    )
}