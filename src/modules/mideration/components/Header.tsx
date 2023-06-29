import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/registr')
  }
  const routeOnMain = () =>{
    navigate('/')
  }

  return (
    <div className="w-full h-[122px] flex flex-row justify-between items-center max-s:flex-col max-s:items-start">
        <div className="flex flex-row justify-center items-center pl-[82px] max-conf:pl-[20px] max-md:flex-col max-md:items-start">
          <div className="flex flex-row items-center cursor-pointer" onClick={routeOnMain}>
            <h1 className="h1-22-600-inter">ИТ-НАВИГАТОР</h1>
          </div>
          <div className="flex flex-row justify-between items-center w-[600px] ml-[68px] max-xlfooter:w-[250px] max-conf:ml-[20px] max-md:ml-[0px] max-md:mt-[10px]">
            <Link to="/companies" className="h1-16-400-golos max-xlfooter:text-[12px]">Компании</Link>
            <p className="h1-16-400-golos max-xlfooter:text-[12px]">Специалисты</p>
            <Link to="/notifications" className="h1-16-400-golos max-xlfooter:text-[12px]">Уведомления (1)</Link>
            <p className="h1-16-400-golos max-xlfooter:text-[12px]">Добавить вид деятельности</p>
          </div>
        </div>
        <div className="mr-[57px] flex flex-row items-center max-conf:mr-[20px] max-s:pl-[20px] max-s:mt-[15px]">
            <Link to="/auth" className="h1-18-400-golos !text-[#466BE1] mr-[37px] max-xlfooter:text-[12px] max-xlfooter:mr-[20px]">Войти</Link>
            <button className="bg-[#0064DC] w-[182px] h-[40px] rounded-[10px] max-xlfooter:w-[120px] max-xlfooter:h-[30px]" onClick={handleRoute}><p className="h1-18-600-golos !text-white max-xlfooter:text-[16px] max-xlfooter:font-[400]">Регистрация</p></button>
        </div>
    </div>
  )
}

export default Header