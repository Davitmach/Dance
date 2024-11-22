import './timeZone.scss';
export const TimeZone = ()=> {
    return(
        <div className="relative z-20 mx-auto flex justify-center mt-[15px]">
                        <select id="timezone-new" className="font-['gteproRegular'] text-white rounded-[50px] border border-white aspect-[1/.2] py-[10px] px-[20px] bg-transparent outline-none" >
                            <option value=""  className="btn-gmt">Часовой пояс (GMT+03)</option>
                            <option value="europe/moscow">Москва</option>
                            <option value="asia/krasnoyarsk">Красноярск</option>
                            <option value="asia/vladivostok">Владивосток</option>
                            <option value="asia/yekaterinburg">Екатеринбург</option>
                        </select>
                    </div>
    )
}