import arrow from "../static/arrow.svg"
import folder from "../static/folder.svg"
const Filters = () => {
  return (
    <div className="flex flex-row items-start justify-between w-full h-[173px] pl-[107px] pr-[150px] mt-[47px] mb-[40px]">
    <div className="flex flex-col justify-start items-start">
      <p className="h1-40-400-golos">Оренбургские IT - компании</p>
      <div className="flex flex-row mt-[63px] justify-center items-center">
        <p className="h1-17-400-golos !text-[#F138C0] mr-[13px]">Количество карточек на страницу</p>
        <div className="bg-white w-[40px] h-[20px] rounded-[15px] flex justify-center items-center mr-[9px]"><p className="text-[#0064DC]">50</p></div>
        <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
      </div>
      <div className="flex flex-row justify-center items-center mt-[20px]">
        <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Технологии</p>
        <img src={arrow} alt="arrow" className="w-[18px] h-[10px] mr-[39px]"/>
        <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Выбрать область работы компании</p>
        <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start">
      <div className="flex flex-row justify-between items-center">
        <p className="h1-30-400-golos mr-[220px]">Популярные теги:</p>
        <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Искать по тегам</p>
        <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
      </div>
      <div className="flex flex-row justify-between w-full items-center mt-[9px]">
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center"><p className="text-[#0064DC]">ВСЕ</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center"><p className="text-black">Frontend</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center"><p className="text-black">Сайты</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center"><p className="text-black">1C</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center"><p className="text-black">AI</p></div>
      </div>
      <div className="w-full flex justify-end items-center mt-[54px]">
        <button className="bg-[#0064DC] w-[279px] h-[34px] rounded-[15px] flex flex-row justify-center items-center">
          <img src={folder} alt="folder"/>
          <p className="h1-17-400-golos !text-white ml-[10px]">Выгрузить в MS Excel</p>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Filters