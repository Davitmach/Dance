import './emojis.scss';
export const Emojis = ()=> {
    return(
        <div className="relative z-20 flex justify-center gap-2 mt-[10px]">
            <div><img className="w-[63px] h-[54px]" src="./smile_tears.png"/></div>
            <div><img className="w-[63px] h-[54px]" src="./smile_stars.png"/></div>
            <div><img className="w-[63px] h-[54px]" src="./smile_heart_break.png"/></div>
            <div><img className="w-[63px] h-[54px]" src="./smile_heart.png"/></div>
        </div>
    )
}
export const  EmojisComponent = ()=> {
    return(<>
<div className='emoji_div relative z-20 w-11/12 mx-auto py-[10px] mt-[30px]'>
<Emojis/>
<div className="text-center z-20 relative text-white text-[0.8em] mt-[20px]">
                        <p>Среди тех, кто использует 10000 и больше <br/>эмоджи за выпуск, мы разыграем призы</p>
                    </div>
</div>
    </>)
}