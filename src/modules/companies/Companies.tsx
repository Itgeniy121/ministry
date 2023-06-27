import Burger from "./components/Burger"
import CompaniesField from "./components/CompaniesField"
const Companies = () => {
  return (
    <div className="flex flex-row justify-start items-start w-full">
        <Burger/>
        <CompaniesField/>
    </div>
  )
}

export default Companies