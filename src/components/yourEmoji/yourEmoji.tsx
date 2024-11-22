import "./yourEmoji.scss";
import { useState, useEffect } from "react";

export const YourEmoji = () => {
  return (
    <>
      <div className="your_emoji w-11/12 rounded-t-[10px] mx-auto relative z-20 mt-[120px] flex items-center flex-col gap-2 py-[10px]">
        <div className="text-1-div relative z-20 flex items-center gap-2">
          <b className="text-1 text-[.9em] text-white">У ТЕБЯ</b>{" "}
          <b className="volume">344</b>{" "}
          <b className="text-1 text-1 text-[.9em] text-white">ЭМОДЖИ</b>
        </div>
        <div className="text-2 relative z-20 text-white text-[1em] text-center">
          <b>
            СМОТРИ 3 НОЯБРЯ <br />
            НОВЫЙ ВЫПУСК ШОУ
          </b>
        </div>
        <div className="text-3 relative z-20 text-[.7em] text-white text-center">
          <p>
            И ПОДАРИ СВОИ ЭМОЦИИ <br />
            ЛЮБИМЫМ АРТИСТАМ В ПРЯМОМ ЭФИРЕ!
          </p>
        </div>
      </div>
    </>
  );
};
export const YourEmoji2 = () => {
  const [emojis, setEmojis] = useState(localStorage.getItem("emojis") || "0");

  useEffect(() => {
    const updateEmojis = () => {
      setEmojis(localStorage.getItem("emojis") || "0");
    };

    const storageEventHandler = () => updateEmojis();
    window.addEventListener("emojiUpdate", storageEventHandler);

    return () => {
      window.removeEventListener("emojiUpdate", storageEventHandler);
    };
  }, []);
  return (
    <>
      <div className="my-[30px]">
        <div className="text-1 text-[20px] font-[900] text-white text-center">
          Смотри сколько эмоджи <br />у тебя осталось:
        </div>
        <div className="volume">
          <span id="remaining-clicks text-900">{emojis}</span>
        </div>
        <div className="text-2 text-white text-[11px] mt-[10px] uppercase text-center">
          <p>
            Поделись ими до конца шоу <br />и участвуй в розыгрыше
          </p>
        </div>
      </div>
    </>
  );
};
export const YourEmoji3 = () => {
  return (
    <div className="your_emoji relative z-20 w-11/12 mx-auto mt-[130px]">
      <div className="relative z-20 flex items-center justify-center gap-2">
        <b className="text-[16px] text-white">У ТЕБЯ ЕЩЕ</b>
        <b className="volume !mt-[0] ">43242</b>
        <b className="text-[16px] text-white">ЭМОДЖИ</b>
      </div>
      <div className="relative z-20 text-center">
                    <b className="text-[20px] font-[900] uppercase text-white">
                        Не останавливайся! <br/>Скоро начнется <br/>новое выступление
                        </b>
                    </div>
                    <div className="relative z-20 text-center text-[.7em] text-white mt-[20px]">
                        <p>ПОДДЕРЖИВАЙ ЛЮБИМЫХ АРТИСТОВ</p>
                    </div>
    </div>
  );
};
export const YourEmoji4 = ()=> {
  return (
    <div className="your_emoji relative z-20 w-11/12 mx-auto mt-[130px]">
      <div className="relative z-20 flex items-center justify-center gap-2">
        <b className="text-[16px] text-white">У ТЕБЯ ЕЩЕ</b>
        <b className="volume !mt-[0] ">43242</b>
        <b className="text-[16px] text-white">ЭМОДЖИ</b>
      </div>
      <div className="relative z-20 text-center">
                    <b className="text-[20px] font-[900] uppercase text-white">
                    Смотри <br/>следующий эфир<br/>10 ноября в 19:00
                        </b>
                    </div>
                    <div className="relative z-20 text-center text-[.7em] text-white mt-[20px]">
                        <p>ПОДДЕРЖИВАЙ ЛЮБИМЫХ АРТИСТОВ</p>
                    </div>
    </div>
  );
}