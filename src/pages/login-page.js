import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
// import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const LoginPage = () => {
    const api = 'http://localhost:5001/auth/login'
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userNameError, setUserNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [loginError, setloginError] = useState(null)

    const { auth,setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(auth) navigate(from, { replace: true });
        console.log(auth)
    },[])
    const handleLogin = async (e) => {
        e.preventDefault()
        if (!username) setUserNameError('Nhập tài khoản')
        else setUserNameError('')
        if (!password) setPasswordError('Nhập mật khẩu')
        else setPasswordError('')
        if (username && password) {
            setloginError('')
            try {
                const data = await axios.post(api, { username: username, password: password })
                console.log(data)
                if (data){
                    setAuth({user:data.data.user})
                    console.log(auth)
                    navigate(from, { replace: true });
                }
            } catch (error) {
                setloginError('Login Fail')
                console.log(error)
                console.log(auth)
            }
        }
    }
    return (
        <div className="flex-grow relative">
            <div data-v-4a6a7272 className="container mb-4 narrow">
                {/* <!Page Title> */}
                <div data-v-4a6a7272 className="flex items-center justify-center mb-6 mt-2">
                    <h2 data-v-4a6a7272="" className="font-header text-2xl font-semibold">Log In</h2>
                </div>
                {/* <!----> */}
                {/* <!Form Log In> */}
                <form data-v-4a6a7272>
                    {/* <!----> */}
                    <Input label="Username" value={username} setValue={setUsername} error={userNameError} setError={setUserNameError}></Input>
                    <Input type='password' label="Password" value={password} setValue={setPassword} error={passwordError} setError={setPasswordError}></Input>
                    {/* <!----> */}
                    <button data-v-6b3fd699 onClick={(e) => handleLogin(e)} className="rounded relative md-btn flex items-center px-3 my-4 justify-center text-white bg-primary hover:bg-orange-500 active:bg-orange-600 glow px-4 px-6" data-v-4a6a7272="" style={{ minHeight: '48px', minWidth: '100%' }}>
                        <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                            Log In
                        </span>
                    </button>
                    <div className=""><span className="flex justify-center text-red-500">{loginError}</span></div>
                </form>
                {/* <!----> */}
            </div>
        </div>
    )
}

const Input = ({ type, label, value, setValue, error,setError }) => {
    // const [error]
    const className = (value) ? ("md-inputwrap md-populated") : ("md-inputwrap")
    const mdInput = (error) ? ("md-input md-has-error") : ("md-input")
    return (
        <div data-v-a3bfbc3a data-v-4a6a7272 className={mdInput}>
            <div data-v-a3bfbc3a className={className}>
                <input value={value} type={type} onClick={()=>setError('')} onChange={(e) => setValue(e.target.value)} data-v-a3bfbc3a="" className="placeholder-current p-4"></input>
                <div data-v-a3bfbc3a="" className="md-border"></div>
                <label data-v-a3bfbc3a="" className="md-label">{label}</label>
            </div>
            <ErrorSection error={error}></ErrorSection>
        </div>
    )
}

const ErrorSection = ({ error }) => {
    let display = 'none'
    if (error) display = ''
    return (
        <div data-v-a3bfbc3a className="md-error-wrap mt-1 mb-2">
            <div data-v-a3bfbc3a="" data-v-114aea98="" className="md-error flex items-center" style={{ display: display }}>
                <svg data-v-20f285ec="" data-v-a3bfbc3a="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 xSmall text-currentColor icon"><path data-v-20f285ec="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span data-v-a3bfbc3a=""></span>{error}</div>
        </div>
    )
}

export default LoginPage