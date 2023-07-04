import MainButton from "../../../../components/UI/MainButton"

const AddModal = () => {

  const handler = () =>{
    let modal = document.getElementById('modal2')
    modal?.classList.remove('active')
  }
  

  return (
    <div id="modal2" className="top-0 bottom-0 right-0 left-0 fixed hidden" onClick={handler}>
        <div onClick={(e) => e.stopPropagation()} className="bg-white w-[958px] h-[351px] rounded-[15px] flex flex-col justify-start items-center pt-[48px]">
          <h1 className="h1-35-400-golos">Добавить вид деятельности</h1>
          <textarea placeholder="Опишите, что нужно доработать" className="bg-[#F2F2F2] rounded-[15px] w-[856px] h-[74px] mt-[32px] outline-none p-[25px] h1-17-400-golos area mb-[18px]"></textarea>
          <MainButton width="856px" height="56px"><p className="h1-25-400-golos !text-white" onClick={handler}>Добавить</p></MainButton>
        </div>
    </div>
  )
}

export default AddModal