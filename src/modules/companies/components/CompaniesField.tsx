import Header from "./Header"
import Filters from "./Filters"
import CompanyCard from "./CompanyCard"
import ptlogo from "../static/ptlogo.svg"
import { useNavigate } from "react-router-dom"
const CompaniesField = () => {

  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/company')
  }

  return (
    <div className="w-full h-full bg-[#F2F2F2]">
      <Header/>
      <Filters/>
      <div className="flex flex-row justify-between items-center mt-[80px] ml-[107px] pr-[135px] max-xxxxl:ml-[35px] max-xxxxl:pr-[35px]">
        <CompanyCard/>
        <CompanyCard/>
        <div className="flex flex-col justify-start items-center w-[400px] h-[447px] py-[23px] bg-white rounded-[10px] px-[35px] max-lt:w-[300px]">
          <div className="w-full flex justify-start items-start"><p className="h1-27-400-golos">Program Tactics</p></div>
          <img src={ptlogo} alt="logo" className="absolute w-[300px] h-[230px]"/>
          <p className="h1-17-400-golos !text-[#0064DC] mt-[150px]">Корпоративные решения</p>
          <div className="flex flex-row justify-between w-[351px] mt-[17px] max-lt:w-[250px]">
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center max-lt:px-[10px]"><p className="h1-20-400-inter !text-[#466BE1] max-lt:text-[15px]">JS</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center"><p className="h1-20-400-inter !text-[#466BE1] max-lt:text-[15px]">Автоматизация</p></div>
          </div>
          <div className="w-full text-center mt-[17px] mb-[15px]">
            <p className="h1-17-400-golos max-lt:text-[14px] text-center">Разработка корпоративных систем для бизнеса, предприятий и гос.учреждений</p>
          </div>
          <button className="bg-[#0064DC] rounded-[10px] max-fh:!w-[300px] w-[334px] h-[35px] max-lt:w-[200px]" onClick={handleRoute}><p className="h1-20-400-golos !text-white">Подробнее</p></button>
        </div>
      </div>
        <div className="flex flex-row justify-between items-center mt-[80px] ml-[107px] pr-[105px] max-xxxxl:ml-[35px] max-xxxxl:pr-[35px]">
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
      </div>
    </div>
  )
}

export default CompaniesField