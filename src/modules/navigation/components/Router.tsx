import {Routes, Route} from "react-router-dom"
import MainPage from "../../../pages/MainPage"
import AuthPage from "../../../pages/AuthPage"
import RegistrationPage from "../../../pages/RegistrationPage"
import CompaniesPage from "../../../pages/CompaniesPage"
import AboutCompany from "../../../pages/AboutCompany"
import Moderation from "../../mideration/Moderation"
import { NotificationsPage } from "../../../pages/NotificationsPage"
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/auth" element={<AuthPage/>}></Route>
        <Route path="/registr" element={<RegistrationPage/>}></Route>
        <Route path="/companies" element={<CompaniesPage/>}></Route>
        <Route path="/company" element={<AboutCompany/>}></Route>
        <Route path="/moderation" element={<Moderation/>}></Route>
        <Route path="/notifications" element={<NotificationsPage/>}></Route>

    </Routes>
  )
}

export default Router