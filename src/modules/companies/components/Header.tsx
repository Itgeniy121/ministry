import logo from "../../../assets/logo.svg"
import MainButton from "../../../components/UI/MainButton"
import search from "../static/search.svg"
import search2 from "../static/search2.svg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/')
  }
  return (
    <div className="w-full h-[64px] flex flex-row justify-between items-center mt-[31px]">
        <div className="flex flex-row justify-center items-center pl-[35px]">
            <img src={logo} alt="logo" className="w-[64px] h-[64px]" onClick={handleRoute}/>
            <h1 className="h1-22-600-inter ml-[24px] cursor-pointer max-xl:hidden" onClick={handleRoute}>ИТ-НАВИГАТОР</h1>
            <div className="flex flex-row justify-between items-center w-[380px] ml-[90px] max-xxxl:ml-[30px] max-lt:w-[300px]">
              <Link to="/companies" className="h1-16-400-golos max-lt:text-[13px]">Компании</Link>
              <p className="h1-16-400-golos max-lt:text-[13px]">Заказы</p>
              <p className="h1-16-400-golos max-lt:text-[13px]">Проекты</p>
              <p className="h1-16-400-golos max-lt:text-[13px]">Поддержка</p>
            </div>
            <div className="inline-flex flex-row-reverse items-center border border-none bg-white rounded-[20px] w-[288px] h-[52px] ml-[38px] pl-[17px] max-xxxxl:w-[200px]">
                <input type="text" placeholder="Поиск" className="border-none w-full h-full outline-none h1-15-mont text-[#101010] rounded-[20px] " />
                <div className="flex flex-col justify-start items-end w-[18px] mr-[15px]">
                  <img src={search} alt="search" className="w-[18px] h-[18px]" />
                  <img src={search2} alt="search" className="w-[4px] h-[4px]"/>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center pr-[51px] max-xxxxl:pr-[20px]">
            <Link to="/auth" className="h1-18-400-golos !text-[#466BE1] mr-[37px]">Войти</Link>
            <MainButton width="173px" height="40px"><Link to="/registr" className="h1-18-400-golos !text-white">Регистрация</Link></MainButton>
        </div>
    </div>
  )
}

export default Header