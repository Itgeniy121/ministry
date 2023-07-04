import MainButton from "../../../../components/UI/MainButton"

const ModalWindow = () => {

  const handler = () =>{
    let modal = document.getElementById('modal')
    modal?.classList.remove('active')
  }
  

  return (
    <div id="modal" className="top-0 bottom-0 right-0 left-0 fixed hidden" onClick={handler}>
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[958px] h-[487px] rounded-[15px] flex flex-col justify-start items-center pt-[48px]">
          <h1 className="h1-35-400-golos">Отправить на доработку</h1>
          <textarea placeholder="Опишите, что нужно доработать" className="bg-[#F2F2F2] rounded-[15px] w-[856px] h-[223px] mt-[32px] outline-none p-[27px] h1-17-400-golos area mb-[18px]"></textarea>
          <MainButton width="856px" height="56px"><p className="h1-25-400-golos !text-white" onClick={handler}>Отправить</p></MainButton>
        </div>
    </div>
  )
}

export default ModalWindow