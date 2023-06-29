import location from "../assets/location.svg"
import MainButton from "./UI/MainButton"
import { Link } from "react-router-dom"
import { FC } from "react"

interface footerProps{
  background?: string,
}

const Footer: FC<footerProps> = ({background}) => {
  return (
    <div className="flex flex-row justify-between items-center h-[101px] w-full pl-[54px] pr-[53px] max-conf:pl-[20px] max-conf:pr-[20px] max-s:flex-col max-s:items-start max-s:h-[150px] max-s:py-[10px]" style={{background}}>
      <div className="flex flex-row justify-start items-center max-hs:flex-col max-hs:items-start">
        <div>
          <h1 className="h1-18-600-inter">ИТ-НАВИГАТОР</h1>
        </div>
        <div className="flex flex-row justify-between items-center w-[489px]  ml-[92px] max-footer:ml-[40px] max-xlfooter:w-[350px] max-hs:ml-[0px] max-hs:mt-[10px] max-hs:mb-[10px] max-sf:w-[290px]">
          <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px] max-sf:text-[10px]">Компании</Link>
          <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px] max-sf:text-[10px]">Специалисты</Link>
          <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px] max-sf:text-[10px]">Заказы</Link>
          <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px] max-sf:text-[10px]">Проекты</Link>
          <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px] max-sf:text-[10px]">Поддержка</Link>
        </div>
        <div className="flex flex-row items-center ml-[161px] max-footer:ml-[40px] max-hs:ml-[0px]">
          <img src={location} alt="location"/>
          <p className="h1-16-400-golos ml-[5px] max-xlfooter:text-[12px]">Оренбург</p>
        </div>
      </div>
      <MainButton width="169px" height="40px"><p className="h1-18-400-golos !text-white">Поддержка</p></MainButton>
    </div>
  )
}

export default Footer