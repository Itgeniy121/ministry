import AddModal from "../UI/AddModal"
import ModalWindow from "../UI/ModalWindow"
import Company from "./components/Company"

const CompaniesFiled = () => {
  return (
    <div className="flex flex-col pb-[395px]">
      <AddModal/>
      <ModalWindow/>
      <Company/>
      <Company/>
    </div>
  )
}

export default CompaniesFiled