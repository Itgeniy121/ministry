import location from "../assets/location.svg"
import MainButton from "./UI/MainButton"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="flex flex-row justify-start items-center h-[101px] w-full pl-[45px]">
      <h1 className="h1-18-600-inter ml-[11px]">ИТ-НАВИГАТОР</h1>
      <div className="flex flex-row justify-between items-center w-[491px] ml-[92px]">
        <Link to="/companies" className="h1-16-400-golos">Компании</Link>
        <Link to="/companies" className="h1-16-400-golos">Специалисты</Link>
        <Link to="/companies" className="h1-16-400-golos">Заказы</Link>
        <Link to="/companies" className="h1-16-400-golos">Проекты</Link>
        <Link to="/companies" className="h1-16-400-golos">Поддержка</Link>
      </div>
      <div className="flex flex-row items-center ml-[161px] mr-[220px]">
        <img src={location} alt="location"/>
        <p className="h1-16-400-golos ml-[5px]">Оренбург</p>
      </div>
      <MainButton width="169px" height="40px"><p className="h1-18-400-golos !text-white">Поддержка</p></MainButton>
    </div>
  )
}

export default Footer