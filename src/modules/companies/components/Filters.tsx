import arrow from "../static/arrow.svg"
import folder from "../static/folder.svg"
const Filters = () => {
  return (
    <div className="flex flex-row items-start justify-between w-full h-[173px] pl-[107px] pr-[150px] mt-[47px] mb-[40px] max-xxxxl:pl-[35px] max-xxxxl:pr-[35px]">
    <div className="flex flex-col justify-start items-start">
      <p className="h1-40-400-golos max-lt:text-[30px]">Оренбургские IT - компании</p>
      <div className="flex flex-row mt-[63px] justify-center items-center max-lt:mt-[40px]">
        <p className="h1-17-400-golos !text-[#F138C0] mr-[13px]">Количество карточек на страницу</p>
        <div className="bg-white w-[40px] h-[20px] rounded-[15px] flex justify-center items-center mr-[9px]"><p className="text-[#0064DC]">50</p></div>
        <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
      </div>
      <div className="flex flex-row justify-center items-center mt-[20px]">
        <div className="flex flex-row items-center">
          <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Технологии</p>
          <img src={arrow} alt="arrow" className="w-[18px] h-[10px] mr-[39px]"/>
        </div>
        <div className="flex flex-row items-center">
          <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Выбрать область работы компании</p>
          <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start ml-[10px] ">
      <div className="flex flex-row justify-between items-center">
        <p className="h1-30-400-golos mr-[220px] max-footer:mr-[40px] max-xlfooter:text-[20px]">Популярные теги:</p>
        <div className="flex flex-row">
          <p className="h1-17-400-golos !text-[#0064DC] mr-[13px]">Искать по тегам</p>
          <img src={arrow} alt="arrow" className="w-[18px] h-[10px]"/>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full items-center mt-[9px]">
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center max-footer:px-[18px]"><p className="!text-[#0064DC] h1-17-400-golos max-footer:text-[13px]">ВСЕ</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center max-footer:px-[18px]"><p className="text-black h1-17-400-golos max-footer:text-[13px]">Frontend</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center max-footer:px-[18px]"><p className="text-black h1-17-400-golos max-footer:text-[13px]">Сайты</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center max-footer:px-[18px]"><p className="text-black h1-17-400-golos max-footer:text-[13px]">1C</p></div>
        <div className="rounded-[15px] bg-white px-[37px] h-[33px] flex justify-center items-center max-footer:px-[18px]"><p className="text-black h1-17-400-golos max-footer:text-[13px]">AI</p></div>
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