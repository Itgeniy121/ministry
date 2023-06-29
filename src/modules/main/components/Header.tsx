import logo from "../static/logo.svg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/registr')
  }

  return (
    <div className="w-full h-[41px] flex flex-row justify-between items-center max-s:flex-col max-s:items-start">
        <div className="flex flex-row justify-center items-center pl-[80px] max-conf:pl-[20px] max-md:flex-col max-md:items-start">
          <div className="flex flex-row items-center">
            <img src={logo} alt="logo" className="w-[41px] h-[41px]"/>
            <h1 className="h1-18-600-inter ml-[11px] ">ИТ-НАВИГАТОР</h1>
            </div>
            <div className="flex flex-row justify-between items-center w-[323px] ml-[49px] max-xlfooter:w-[250px] max-conf:ml-[20px] max-md:ml-[0px] max-md:mt-[10px]">
              <Link to="/" className="h1-16-400-golos max-xlfooter:text-[12px]">Главная</Link>
              <p className="h1-16-400-golos max-xlfooter:text-[12px]">Для кого</p>
              <p className="h1-16-400-golos max-xlfooter:text-[12px]">Этапы</p>
              <p className="h1-16-400-golos max-xlfooter:text-[12px]">Контакты</p>
            </div>
        </div>
        <div className="mr-[57px] flex flex-row items-center max-conf:mr-[20px] max-s:pl-[20px] max-s:mt-[15px]">
            <Link to="/auth" className="h1-18-400-golos !text-[#466BE1] mr-[37px] max-xlfooter:text-[12px] max-xlfooter:mr-[20px]">Войти</Link>
            <button className="bg-[#466BE1] w-[184px] h-[40px] rounded-[10px] max-xlfooter:w-[120px] max-xlfooter:h-[30px]" onClick={handleRoute}><p className="h1-18-900-golos !text-white max-xlfooter:text-[16px] max-xlfooter:font-[400]">Регистрация</p></button>
        </div>
    </div>
  )
}

export default Header