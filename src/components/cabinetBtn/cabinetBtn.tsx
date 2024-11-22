import { useNavigate } from 'react-router-dom'
import { HandleNavigate } from '../../utils/navigate'
import './cabinetBtn.scss'
export const CabinetBtn = ()=> {
    const navigate = useNavigate();
  
    
   return(
    <button className='Cabinet_btn' onClick={()=> {navigate('display14',{replace:true})}}></button>
   ) 
}