import logo from "../../../assets/logo.svg"
import MainButton from "../../../components/UI/MainButton"


const Header = () => {
  return (
    <div className="w-full h-[122px] flex flex-row justify-between bg-white items-center pl-[61px] pr-[78px]">
        <div className="flex flex-row justify-center items-center">
            <img src={logo} alt="logo" className="w-[64px] h-[64px]"/>
            <h1 className="h1-22-600-inter ml-[33px]">ИТ-НАВИГАТОР</h1>
            <div className="flex flex-row justify-between items-center w-[500px] ml-[96px]">
              <p className="h1-16-400-golos">Компании</p>
              <p className="h1-16-400-golos">Специалисты</p>
              <p className="h1-16-400-golos">Заказы</p>
              <p className="h1-16-400-golos">Проекты</p>
              <p className="h1-16-400-golos">Поддержка</p>
            </div>
        </div>
        <div className="flex flex-row items-center">
            <MainButton width="173px" height="40px"><p className="h1-18-400-golos !text-white">Регистрация</p></MainButton>
        </div>
    </div>
  )
}

export default Header