import "./howParticipate.scss";
import { useLoading } from "../../providers/loading";
export const HowParticipate = () => {
  const {setActive} = useLoading();
  return (
    <div className="participate mt-[126px] relative z-20 h-[310px] w-11/12 m-auto rounded-t-[10px] pt-[10px]">
      <div className="text-center uppercase main_text relative z-20 text-white text-[20px] font-[900] leading-5 ">
        Как участвовать
        <br />в конкурсе
      </div>
      <div className="step ">
        <b className="">ШАГ 1</b>
      </div>
      <div className="opis ">
        <p className="">ВО ВРЕМЯ ШОУ «ЗВЁЗДНЫЕ ТАНЦЫ» ТАПАЙ НА ЭМОДЖИ</p>
      </div>
      <div className="step">
        <b>ШАГ 2</b>
      </div>
      <div className="opis">
        <p>ПОЛУЧАЙ ПО 1000 ЭМОДЖИ ЗА ПРИГЛАШЕННЫХ ДРУЗЕЙ</p>
      </div>
      <div className="step">
        <b>ШАГ 3</b>
      </div>
      <div className="opis">
        <p>
          ИСПОЛЬЗУЙ 10 000 ЭМОДЖИ И БОЛЬШЕ, ЧТОБЫ СТАТЬ УЧАСТНИКОМ РОЗЫГРЫША
          ПРИЗОВ
        </p>
      </div>
      <div></div>
      <div className="btn-div mt-[10px] relative z-20 flex flex-col items-center gap-6 ">
                        <button onClick={()=>setActive(true)} className="w-[240px] h-[40px] border border-white rounded-[50px] aspect-[1/.2] text-white font-[gteproRegular]" >ПРАВИЛА</button>
                        <button className="w-[240px] h-[40px]  aspect-[1/.2] text-white font-[gteproRegular] text-[10px] bg-linear rounded-[50px]"><p>Я ОЗНАКОМЛЕН И СОГЛАШАЮСЬ С ПРАВИЛАМИ</p></button>
                    </div>
    </div>
  );
};
