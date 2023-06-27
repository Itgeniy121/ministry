import logo from "../static/logo.svg"
import Button from "./UI/Button"
import { Link } from "react-router-dom"
const Header = () => {


  return (
    <div className="w-full h-[41px] flex flex-row justify-between items-center pl-[]">
        <div className="flex flex-row justify-center items-center pl-[80px]">
            <img src={logo} alt="logo" className="w-[41px] h-[41px]"/>
            <h1 className="h1-18-600-inter ml-[11px]">ИТ-НАВИГАТОР</h1>
            <div className="flex flex-row justify-between items-center w-[432px] ml-[49px]">
              <Link to="/companies" className="h1-16-400-golos">Главная</Link>
              <p className="h1-16-400-golos">О хакатоне</p>
              <p className="h1-16-400-golos">Для кого</p>
              <p className="h1-16-400-golos">Этапы</p>
              <p className="h1-16-400-golos">Контакты</p>
            </div>
        </div>
        <div className="mr-[57px] flex flex-row items-center">
            <Link to="/auth" className="h1-18-400-golos !text-[#466BE1] mr-[37px]">Войти</Link>
            <Button width="184px" height="40px"><Link to="/registr" className="h1-18-900-golos !text-white">Регистрация</Link></Button>
        </div>
    </div>
  )
}

export default Header