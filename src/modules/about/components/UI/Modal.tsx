import MainButton from "../../../../components/UI/MainButton"

const Modal = () => {

  const handler = () =>{
    let modal = document.getElementById('modal3')
    modal?.classList.remove('active')
  }
  

  return (
    <div id="modal3" className="top-0 bottom-0 right-0 left-0 fixed hidden z-[999999999999]" onClick={handler}>
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[1196px] h-[555px] rounded-[15px] flex flex-col justify-start items-center pt-[48px]">
          <h1 className="h1-35-400-golos">Связаться с компанией</h1>
          <div className="flex flex-row mt-[30px]">
            <input type="text" className="w-[415px] h-[60px] bg-[#F2F2F2] outline-none pl-[26px] rounded-[10px] mr-[20px] inpt" placeholder="Номер телефона *"/>
            <input type="text" className="w-[494px] h-[60px] bg-[#F2F2F2] outline-none pl-[26px] rounded-[10px] inpt" placeholder="Email *"/>
          </div>
          <textarea placeholder="Ваше сообщение команде разработчиков" className="bg-[#F2F2F2] rounded-[15px] w-[926px] h-[147px] mt-[15px] outline-none p-[27px] h1-17-400-golos area"></textarea>
          <input type="text" className="w-[926px] h-[60px] bg-[#F2F2F2] outline-none pl-[26px] rounded-[10px] inpt mt-[11px] mb-[10px]" placeholder="Контактное лицо *"/>
          <MainButton width="920px" height="67px"><p className="h1-25-400-golos !text-white" onClick={handler}>Отправить</p></MainButton>
        </div>
    </div>
  )
}

export default Modal