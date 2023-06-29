import main1 from "../static/main1.svg"
import main2 from "../static/main2.svg"
import Button from "./UI/Button"
import { useNavigate } from "react-router-dom"
const FirstField = () => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/companies')
  }

  return (
    <div className="flex flex-col justify-start items-start w-full pl-[80px] mt-[81px] pb-[147px] max-conf:pl-[20px] max-conf:pr-[20px]">
        <div className=" h-[168px] flex flex-col justify-start items-start  max-l:h-[120px]">
            <h1 className="h1-76-900-golos max-l:text-[40px] ">IT-компании</h1>
            <h1 className="h1-76-900-golos max-l:text-[40px]">Оренбургской области</h1>
        </div>
        <div className="flex flex-row w-[536px] justify-between mt-[57px] mb-[22px] max-s:flex-col max-s:w-[300px] max-s:h-[168px]">
            <img src={main1} alt="main"/>
            <img src={main2} alt="main"/>
        </div>
        <Button width="590px" height="54px"><p className="h1-20-900-golos !text-white" onClick={handleRoute}>Посмотреть результаты</p></Button>
    </div>
  )
}

export default FirstField