import { useEffect, useState } from "react"

export const RefList = ({refs}:{refs:string[]})=> {
    const [ref,setRef] = useState<string[]>([]);

    useEffect(()=> {
if(Array.isArray(refs) && refs) {
setRef(refs)
}
    },[refs])
    return(
        <div style={{background:'rgba(255, 255, 255, 0.2)'}} className="flex  flex-col items-center mx-auto relative z-20 w-[70%] h-[13vh] rounded-[10px] overflow-y-auto pt-[5px]" >{
            ref.map((e)=>(
                <div className="text-white  font-[400]">{e}</div>
            ))
        }</div>
    )
}