import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LoginSelector from './Pages/LoginSelector'
import UserLogin from './Pages/UserLogin'
import AdminLogin from './Pages/AdminLogin'
import Register from './Pages/Register'
import SavingsAccount from './Pages/SavingsAccount'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import Login from './Pages/Login'
 
 
function App() {
 
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginSelector />}/>
        <Route path="/user-login" element={<UserLogin />}/>
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="/savings-account" element={<SavingsAccount />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
 
export default App