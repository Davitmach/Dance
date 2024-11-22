import './choose.scss';
import { useState, useEffect } from 'react';

export const Choose = () => {

    const [emojis, setEmojis] = useState({
        cool: '0',
        class: '0',
        disheart: '0',
        heart: '0',
    });

    // Функция для обновления localStorage и состояния
    const HandleSet = (type: string) => {
        var emojis:any = localStorage.getItem('emojis');
        if(parseInt(emojis)>0) {
           
            
        

        
        let last: string | null = localStorage.getItem(type);
        let newValue = last ? parseInt(last, 10) + 1 : 1;

        localStorage.setItem(type, newValue.toString());
var newEmoji:any = parseInt(emojis) -1;
localStorage.setItem('emojis',newEmoji)
const event = new Event('emojiUpdate');
window.dispatchEvent(event);
        setEmojis((prev) => ({
            ...prev,
            [type]: newValue.toString(),
        }));}
    };

    // Функция для получения значений из localStorage
    const get = () => {
        return {
            cool: localStorage.getItem('cool') || '0',
            class: localStorage.getItem('class') || '0',
            disheart: localStorage.getItem('disheart') || '0',
            heart: localStorage.getItem('heart') || '0',
        };
    };

    // Загружаем данные при первом рендере
    useEffect(() => {
        setEmojis(get());
    }, []);
    
    return(
        <div className='choose_box mt-[130px] w-11/12 mx-auto relative z-20 flex flex-col items-center p-4 space-y-9 rounded-[10px] '>
            <div className="smail-string-1 relative z-20 flex gap-14">
                    
                    <div className="smile-tears-div flex flex-col items-center">
                        <button className="btn-cool smile-tears-btn "  onClick={()=> HandleSet('cool')}></button>
                        <div className="score-div">
                            <b className="score text-white text-[1.2em]" id="score-tears">{emojis.cool}</b>
                        </div>
                    </div>
                    <div className="smile-heart-div flex flex-col items-center">
                        <button className="btn-class smile-heart-btn"  onClick={()=> HandleSet('class')} ></button>
                        <div className="score-div">
                            <b className="score text-white text-[1.2em]" id="score-heart">{emojis.class}</b>
                        </div>
                    </div>
                </div>
                <div className="smail-string-2 flex gap-14">
                    <div className="smile-heart-break-div flex flex-col items-center">
                        <button className="btn-disheart smile-heart-break-btn"  onClick={()=> HandleSet('disheart')} ></button>
                        <div className="score-div">
                            <b className="score text-white text-[1.2em]" id="score-heartbreak">{emojis.disheart}</b>
                        </div>
                    </div>
                    <div className="smile-stars-div flex flex-col items-center  ">
                        <button className="btn-heart smile-stars-btn"  onClick={()=> HandleSet('heart')}></button>
                        <div className="score-div">
                            <b className="score text-white text-[1.2em]" id="score-stars">{emojis.heart}</b>
                        </div>
                    </div>
                </div>
        </div>
    )
}