import main1 from "../static/main1.svg"
import main2 from "../static/main2.svg"
import Button from "./UI/Button"
const FirstField = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full pl-[80px] mt-[81px] pb-[147px]">
        <div className="w-[901px] h-[168px] flex flex-col justify-start items-start">
            <h1 className="h1-76-900-golos">IT-компании</h1>
            <h1 className="h1-76-900-golos">Оренбургской области</h1>
        </div>
        <div className="flex flex-row w-[536px] justify-between mt-[57px] mb-[22px]">
            <img src={main1} alt="main"/>
            <img src={main2} alt="main"/>
        </div>
        <Button width="590px" height="54px"><p className="h1-20-900-golos !text-white">Посмотреть результаты</p></Button>
    </div>
  )
}

export default FirstField