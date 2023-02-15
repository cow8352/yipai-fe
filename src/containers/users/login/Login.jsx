import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// https://www.npmjs.com/package/axios
import axios from "axios";
import { HeadImg } from "../HeadImg";
import { useAuth } from "../../../components/useAuth";


import "./buyLogin.css";

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()

    // 登入預設
    const [member, setMember] = useState({
        account: "",
        password: "",
    });

    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try{
             let response = await axios.post(
            "http://localhost:3001/api/auth/Buylogin",
            member,
            {
                // 跨源存取 cookie
                withCredentials: true,
            }
        );
        console.log('users:',response.data.member);      
        alert("登入成功");
        setAuth({ isAuth: true, users: response.data.member })

        // 跳轉
        navigate('/users/LoginTo')
        // setTimeout(() => {
        //     window.location.assign("/users/LoginTo");
        // }, 500);
        }catch(err){
            alert("登入失敗");
            setTimeout(() => {
                window.location.assign("/users/BuyLogin");
            }, 500);
        }
       
    }

    return (
        <div id='login'>
            <div className='_buyLogin_BG'>
                <div className='_buyLogin_flex _buyLogin_buyerbox'>
                    <div className='_buyLogin_buyerIcon'></div>
                    <form
                        method='POST'
                        action='http://localhost:3001/api/auth/Buylogin'
                        className='_buyLogin_flex'
                    >
                        <label className='_buyLogin_h3'>買家登入</label>
                        <input
                            type='text'
                            className='_buyLogin_inputBox'
                            name='account'
                            placeholder=' 帳號'
                            value={member.account}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            className='_buyLogin_inputBox2'
                            name='password'
                            placeholder=' 密碼'
                            value={member.password}
                            onChange={handleChange}
                        />
                        <button
                            type='submit'
                            className='_buyLogin_btn'
                            onClick={handleSubmit}
                        >
                            登入
                        </button>
                    </form>
                    <div style={{ fontColor: "#515151" }}>
                        沒有會員？請
                        <span>
                            <Link to='/users/Register'>註冊</Link>
                        </span>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};
export default Login;
