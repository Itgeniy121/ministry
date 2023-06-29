import banner from "../static/banner.png"
import logo from "../../../assets/logo.svg"
import MainInput from "../../../components/UI/MainInput"
import MainButton from "../../../components/UI/MainButton"
import { Link } from "react-router-dom"
const RegistrModule = () => {
  return (
    <div className="flex flex-row justify-start items-start w-full h-full">
    <img src={banner} alt="banner" className="w-[352px] h-[100vh] max-l:hidden"/>
    <div className="flex flex-col w-full h-full items-start justify-between max-l:items-center">
        <div>
        <div className="flex flex-row justify-center items-center w-full h-[64px] mt-[29px]">
            <img src={logo} alt="logo" className="w-[64px] h-[64px] mr-[37px]"/>
            <h1 className="h1-22-600-inter">ИТ-НАВИГАТОР</h1>
        </div>
        <div className="flex flex-col items-start justify-start ml-[175px] mt-[80px] max-xl:ml-[30px] max-sf:ml-[5px]">
            <h1 className="h1-35-400-golos !text-[#0064DC] mb-[37px]">Регистрация</h1>
            <MainInput width="610px" height="59px" placehplder="Email"/>
            <MainInput width="610px" height="59px" placehplder="Пароль"/>
            <MainInput width="610px" height="59px" placehplder="Повторите пароль"/>
            <MainButton width="610px" height="59px"><p className="h1-30-400-golos !text-white max-fh:text-[20px]">Зарегестрироваться</p></MainButton>
            <div className="flex flex-row mt-[37px] justify-between">
                <p className="h1-17-400-golos mr-[5px]">Уже есть аккакнт?</p>
                <Link to="/auth" className="h1-17-400-golos !text-[#0064DC]">Войти</Link>
            </div>
        </div>
        </div>
        <div className="flex justify-end items-end w-full h-[94px] max-l:hidden">
            <div className="w-[505px] h-[94px] bg-[#233CA2]"></div>
        </div>
    </div>
</div>
  )
}

export default RegistrModule