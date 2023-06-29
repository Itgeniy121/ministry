import banner from "../static/banner.png"
import { useNavigate } from "react-router-dom"
const Banner = () => {
  const navigate = useNavigate()
    const handleRoute = () =>{
      navigate('/notifications')
    }
    
  return (
    <div className="w-full h-[167px]" style={{backgroundImage: `url(${banner})`}}>
        <div className="flex flex-row h-full items-center justify-between pl-[80px] pr-[59px]">
            <p className="h1-76-400-golos z-100 !text-white">Кабинет модератора</p>
            <button className="h-[61px] px-[49px] bg-white rounded-[10px]" onClick={handleRoute}><p className="h1-35-400-golos">Уведомления (1)</p></button>
        </div>
    </div>
  )
}

export default Banner