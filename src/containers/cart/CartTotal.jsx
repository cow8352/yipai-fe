import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import BuyerLogin from "../users/login/Login";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import UMayBeLike from "../../components/uMaybeLike/UMayBeLike"

import "./cart.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "./utils/useCart";


import ListItemsWithHook from './pages/ShoppingCart/components/ListItemsWithHook'

var buyerId = true;

const CartTotal = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [user_order, setUserOrder] = useState([]);
  const [login, setLogin] = useState(false);
  const [selllogin, setSellLogin] = useState(false);
  const [coupon, setCoupon] = useState();
  const [useCoupon, setUseCoupon] = useState();

  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      if (Array.isArray(response.data ) && response.data.length > 0) {
        setLogin(true);
      } else {

        setLogin(false);
      }
      
      console.log(response.data[0].users_valid_role);
    }
    getMember2();
  }, []);
  // useEffect(() => {
  //   async function getSellLogin() {
  //     let response = await axios.get(
  //       `http://localhost:3001/api/members/userData`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (Array.isArray(response.data) && response.data.length > 0) {
  //       setSellLogin(true);
  //     } else {
  //       setSellLogin(false);
  //     }
  //     console.log(response.data[0]);
  //   }
  //   s\getSellLogin();
  // }, []);

  console.log(login);

  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart()
  console.log("coupon",coupon );

  useEffect(() => {
    console.log("第二個參數是空陣列");
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProduct() {
      let response = await axios.get("http://localhost:3001/cart");
      setProduct(response.data);
      // console.log(response.data);
    }
    getProduct();
    async function getUserOrder() {
      let response = await axios.get("http://localhost:3001/cart");
      setUserOrder(response.data);
      // console.log(response.data);
    }
    getUserOrder();
  }, []);

    //coupon
    useEffect(() => {
 
      // 在component初始化的時後跑一次
      // 通常會把去跟後端要資料的動作放這裡
      async function getCoupon() {
        let response = await axios.get(`http://localhost:3001/userCoupon`, {
          withCredentials: true, });
        setCoupon(response.data);
      }
      getCoupon();
  
    }, []);

  return (
    
    <>
        <Outlet/>
        <footer class="footer-floor1 d-flex align-items-center">
            <div>
            <a href="#news">結帳資訊 : </a>
            </div>
            <div className="d-flex align-items-center">
            
            <a href="#contact">優惠券 : <input onChange={(e)=>{ console.log(setUseCoupon(e.target.value))
            }} value={useCoupon}/>{ useCoupon == null ? "" : -coupon?.filter((v)=>{return v.sn === useCoupon}).map((v)=>v.discount)}</a>
            <a href="#contact">總數 : {cart.totalItems}</a>
            <a href="#contact">運費 : ${0}</a>
            </div>
        </footer>
        <footer class="footer-floor2">
            <a href="#total">購物車總計 : {cart.cartTotal-coupon?.filter((v)=>{return v.sn === useCoupon}).map((v)=>v.discount)}</a>
            {location.pathname === '/cart/CartPart2' ? <div>
            <Link to="../cart">
                <button>上一頁</button>
            </Link>
            <Link to="/cart/CartPart3">
                <button id="submitOrder">
                前往結帳
                </button>
            </Link>
            </div> : 
            <Link to="/cart/CartPart2">
            <button>前往結帳頁面</button>
            </Link>
        }
        </footer>
    </>
  );
};

export default CartTotal;
