<<<<<<< HEAD
import { React, useState, useEffect } from 'react'
import './sellerhome.css'
import { useNavigate } from 'react-router-dom'
// import logo1 from '../../../logo1.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'


import { TiArrowSortedDown } from 'react-icons/ti'
import SellerButton from './SellerButton'
import { FaClipboardList } from 'react-icons/fa'


// import { RiSearch2Line } from 'react-icons/ri'
import axios from 'axios'
=======
import { React, useState, useEffect } from "react";
import "./sellerhome.css";
import { useNavigate } from "react-router-dom";
// import logo1 from '../../../logo1.svg'
import "bootstrap/dist/css/bootstrap.min.css";
// import ProImage4 from '../../images/product_04.png'
import Button from "react-bootstrap/Button";

import { TiArrowSortedDown } from "react-icons/ti";
import SellerButton from "./SellerButton";
import { FaClipboardList } from "react-icons/fa";

// import { RiSearch2Line } from 'react-icons/ri'
import axios from "axios";
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

import {
  SellerFrontPage,
  SellerPage,
  SellerUpload,
  SellerProduct,
  SellerOrder,
<<<<<<< HEAD
} from './SellerOnclick'

// icon
// import buyerImg from '../image/buyHead.png'
import sellerHouseIcon from '../image/sellerHouseIcon.svg'
import sellerpageIcon from '../image/sellerpageIcon.svg'
import sellerupIcon from '../image/sellerupIcon.svg'
import sellerlistIcon from '../image/sellerlistIcon.svg'
import sellerorderIcon from '../image/sellerorderIcon.svg'


function SellerHome() {
  const navigate = useNavigate()

  let [UserData, setUserData] = useState({}) //記錄數值
  let [UserOldDatas, setUserOldDatas] = useState({}) //原本的數據
  let [UserOrders, setUserOrders] = useState([]) //記錄使用者訂單
  let [sellerProducts, setSellerProducts] = useState([]) //記錄使用者圖畫
  let [sellerOrders, setSellerOrders] = useState([]) //記錄使用者訂單
  let [sellerOrder, setSellerOrder] = useState([]) //記錄使用者訂單
=======
} from "./SellerOnclick";

// icon
// import buyerImg from '../image/buyHead.png'
import sellerHouseIcon from "../image/sellerHouseIcon.svg";
import sellerpageIcon from "../image/sellerpageIcon.svg";
import sellerupIcon from "../image/sellerupIcon.svg";
import sellerlistIcon from "../image/sellerlistIcon.svg";
import sellerorderIcon from "../image/sellerorderIcon.svg";

function SellerHome() {
  const navigate = useNavigate();

  let [UserData, setUserData] = useState({}); //記錄數值
  let [UserName, setUserName] = useState(''); //記錄數值

  let [UserOldDatas, setUserOldDatas] = useState({}); //原本的數據
  let [UserOrders, setUserOrders] = useState([]); //記錄使用者訂單
  let [sellerProducts, setSellerProducts] = useState([]); //記錄使用者圖畫
  let [sellerOrders, setSellerOrders] = useState([]); //記錄使用者訂單
  let [sellerOrder, setSellerOrder] = useState([]); //記錄使用者訂單
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

  // 只執行一次
  useEffect(() => {
    async function getMember2() {
      //全部的訂單
      let response4 = await axios.get(
        `http://localhost:3001/api/members/sellerOrder`,
        {
          withCredentials: true,
        }
<<<<<<< HEAD
      )
      setSellerOrders(response4)
=======
      );
      setSellerOrders(response4);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
      //記錄使用者圖畫
      let response3 = await axios.get(
        `http://localhost:3001/api/members/sellerProduct`,
        {
          withCredentials: true,
        }
<<<<<<< HEAD
      )
      setSellerProducts(response3)
      console.log(sellerProducts)
=======
      );
      setSellerProducts(response3);
      console.log(sellerProducts);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

      let response2 = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
<<<<<<< HEAD
      )
      setUserData(response2.data[0].users_id)
      //   setUserData(response2.data[0])
      console.log(response2.data[0])
      setUserOldDatas(response2.data[0])
=======
      );
      setUserData(response2.data[0].users_id);
      setUserName(response2.data[0].users_name)
      //   setUserData(response2.data[0])
      console.log(response2.data[0]);
      setUserOldDatas(response2.data[0]);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
      let responseOrder = await axios.get(
        `http://localhost:3001/api/members/orders`,
        {
          withCredentials: true,
        }
<<<<<<< HEAD
      )
      setUserOrders(responseOrder.data[0])
    }
    getMember2()
  }, [])

  //  記錄輸入的數值
  const [UserInputData, setUserInputData] = useState({
    username: '',
    account: '',
    // email: "",
    phone: '',
  })
  const [UserIntroduce, setUserIntroduce] = useState({
    users_introduce: '',
  })
  // 每次輸入後更新使用者資料
  useEffect(() => {
    console.log(UserInputData)
  }, [UserInputData])
=======
      );
      setUserOrders(responseOrder.data[0]);
    }
    getMember2();
  }, []);
console.log("UserName",UserName)

  //  記錄輸入的數值
  const [UserInputData, setUserInputData] = useState({
    username: "",
    account: "",
    // email: "",
    phone: "",
  });
  const [UserIntroduce, setUserIntroduce] = useState({
    users_introduce: "",
  });
  // 每次輸入後更新使用者資料
  useEffect(() => {
    console.log(UserInputData);
  }, [UserInputData]);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
  const handleChange = (event) => {
    setUserInputData({
      ...UserInputData,
      [event.target.name]: event.target.value,
<<<<<<< HEAD
    })
  }
  // 每次輸入後更畫廊資料
  useEffect(() => {
    console.log(UserIntroduce)
  }, [UserIntroduce])
=======
    });
  };
  // 每次輸入後更畫廊資料
  useEffect(() => {
    console.log(UserIntroduce);
  }, [UserIntroduce]);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
  const handleChange2 = (event) => {
    setUserIntroduce({
      ...UserIntroduce,
      [event.target.name]: event.target.value,
<<<<<<< HEAD
    })
  }
  // 送出輸入資料
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`http://localhost:3001/api/members`, {
=======
    });
  };
  // 送出輸入資料
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('==================userData',UserData)
    axios
      .put(`http://localhost:3001/api/members/userData`, {
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
        username: UserInputData.username,
        account: UserInputData.account,
        // email: UserInputData.email,
        phone: UserInputData.phone,
        usersId: UserData,
      })
      .then((response) => console.log(response))
<<<<<<< HEAD
      .catch((error) => console.error(error))
  }
  console.log(UserOldDatas)
  console.log(UserOrders)
  //================================================================
  //  上傳大頭貼
  const [sellerPic, setSellerPic] = useState({
    photo: '',
  })
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(sellerPic)
  }, [sellerPic])
=======
      .catch((error) => console.error(error));
  };
  console.log(UserOldDatas);
  console.log(UserOrders);
  //================================================================
  //  上傳大頭貼
  const [sellerPic, setSellerPic] = useState({
    photo: "",
  });
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(sellerPic);
  }, [sellerPic]);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

  // 檔案更新值
  function handleSellerPicUpload(e) {
    // file input 的值並不是存在 value 欄位裡
<<<<<<< HEAD
    setSellerPic({ ...sellerPic, photo: e.target.files[0] })
  }

  // 送出輸入資料
  async function handleSellerPicSubmit(e) {
    console.log('handleProductSubmit')
    // 關閉表單的預設行為
    e.preventDefault()
    let formData = new FormData()
    formData.append('photo', sellerPic.photo)
    let response = await axios.post(
      'http://localhost:3001/uploadsPhoto/product',
=======
    console.log("aaaaaaaaaaae.target.files[0]",e.target.files[0].name)
    setSellerPic({ ...sellerPic, photo: e.target.files[0] });
    console.log("---------sellerPic",sellerPic)
  }
  console.log("sellerPic Out--------",sellerPic.photo)

  // 送出輸入資料
  async function handleSellerPicSubmit(e) {
    console.log("handleProductSubmit");
    // 關閉表單的預設行為
    e.preventDefault();
    let formData = new FormData();
    
    if (sellerPic.photo) {
      formData.append("photo", sellerPic.photo);
    }
    

    // formData.append("photo", sellerPic.photo);
    console.log("=======================",formData);
    console.log("sellerPic.photo================",formData)
    let response = await axios.post(
      "http://localhost:3001/uploadsPhoto/product",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
      formData,
      {
        withCredentials: true,
      }
<<<<<<< HEAD
    )
    console.log(response.data)
    alert('圖片上傳成功')
  }
  //========================================================
  //  記錄輸入的產品
  const [productInputData, setProductInputData] = useState({
    name: '',
    photo: '',
    width: '',
    height: '',
    material: '',
    style: '',
    artist: '',
    creation_year: '',
    work_hue: '',
    price: '',
    detail_text: '',
  })
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(productInputData)
  }, [productInputData])
=======
    );
    alert("圖片上傳成功");
  }
  
  //========================================================
  //  記錄輸入的產品
  const [productInputData, setProductInputData] = useState({
    name: "",
    photo: "",
    width: "",
    height: "",
    material: "",
    style: "",
    artist: UserName,
    creation_year: "",
    work_hue: "",
    price: "",
    detail_text: "",
  });
  const [image, setImage] = useState("");
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(productInputData);
  }, [productInputData]);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
  const handleProductChange = (event) => {
    setProductInputData({
      ...productInputData,
      [event.target.name]: event.target.value,
<<<<<<< HEAD
    })
  }
  function handleUpload(e) {
    // file input 的值並不是存在 value 欄位裡
    setProductInputData({ ...productInputData, photo: e.target.files[0] })
  }
  // 送出輸入資料
  async function handleProductSubmit(e) {
    console.log('handleProductSubmit')
    // 關閉表單的預設行為
    // e.preventDefault()
    let formData = new FormData()
    formData.append('name', productInputData.name)
    formData.append('photo', productInputData.photo)
    formData.append('width', productInputData.width)
    formData.append('height', productInputData.height)
    formData.append('material', productInputData.material)
    formData.append('style', productInputData.style)
    formData.append('artist', productInputData.artist)
    formData.append('creation_year', productInputData.creation_year)
    formData.append('work_hue', productInputData.work_hue)
    formData.append('price', productInputData.price)
    formData.append('detail_text', productInputData.detail_text)
    let response = await axios.post(
      'http://localhost:3001/product',
      formData
      // withCredentials: true,
    )
    console.log(response.data)
    alert('圖片上傳成功')
  }

  console.log(UserData)
  console.log(sellerProducts.data)
  console.log(sellerOrders.data)
  console.log(sellerOrder)
  // ================sellerProduct商品管理========================
  // let [sellerProducts, setSellerProducts] = useState([]) //記錄使用者圖畫
  //此賣家的全部圖片
  console.log(sellerProducts.data)
  const [selectedSellerOrder, setSelectedSellerOrder] = useState({
    name: '',
    price: '',
  })

  console.log(selectedSellerOrder)
=======
    });
  };
  function handleUpload(e) {
    // file input 的值並不是存在 value 欄位裡
    setImage(e.target.files[0]);
    setProductInputData({ ...productInputData, photo: e.target.files[0] });
  }
  console.log("------- 193 --------", image);

  // 送出輸入資料
  async function handleProductSubmit(e) {
    console.log("handleProductSubmit");
    // 關閉表單的預設行為
    // e.preventDefault()
    let formData = new FormData();
    formData.append("name", productInputData.name);
    formData.append("photo", productInputData.photo);
    formData.append("width", productInputData.width);
    formData.append("height", productInputData.height);
    formData.append("material", productInputData.material);
    formData.append("style", productInputData.style);
    formData.append("artist", UserName);
    formData.append("creation_year", productInputData.creation_year);
    formData.append("work_hue", productInputData.work_hue);
    formData.append("price", productInputData.price);
    formData.append("detail_text", productInputData.detail_text);
    let response = await axios.post(
      "http://localhost:3001/product",
      formData
      // withCredentials: true,
    );
    console.log(response.data);
    alert("圖片上傳成功");
    window.location.reload();
  }

  console.log(UserData);
  console.log(sellerProducts.data);
  console.log(sellerOrders.data);
  console.log(sellerOrder);
  // ================sellerProduct商品管理========================
  // let [sellerProducts, setSellerProducts] = useState([]) //記錄使用者圖畫
  //此賣家的全部圖片
  console.log(sellerProducts.data);
  const [selectedSellerOrder, setSelectedSellerOrder] = useState({
    name: "",
    price: "",
  });

  console.log(selectedSellerOrder);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

  async function submitSelectedSellerOrder(selectedSellerOrder) {
    const response = await fetch(
      `http://localhost:3001/product/${selectedSellerOrder.id}`,
      {
<<<<<<< HEAD
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedSellerOrder),
      }
    )
    // setSelectedSellerOrder()

    if (!response.ok) {
      throw new Error('Failed to update seller order')
    }
    window.location.reload()
=======
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedSellerOrder),
      }
    );
    // setSelectedSellerOrder()

    if (!response.ok) {
      throw new Error("Failed to update seller order");
    }
    window.location.reload();
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
    // window.location.replace("http://localhost:3000/users/ArtistLoginTo");
    // navigate('/users/ArtistLoginTo')
  }

  // ================sellerOrder訂單資訊========================

<<<<<<< HEAD
  const [selectedOrder, setSelectedOrder] = useState(null)

  let filteredOrders = []
=======
  const [selectedOrder, setSelectedOrder] = useState(null);

  let filteredOrders = [];
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
  if (
    sellerOrders &&
    sellerOrders.data &&
    sellerOrders.data.length &&
    sellerProducts &&
    sellerProducts.data &&
    sellerProducts.data.length
  ) {
    //賣家訂單的全部product_id去比對產品id
    filteredOrders = sellerOrders.data.filter((order) => {
      return sellerProducts.data.some(
        (product) => product.id === order.product_id
<<<<<<< HEAD
      )
    })
    console.log(filteredOrders)
    // setSellerOrders(filteredOrders);
    // console.log(sellerOrders);
  }
  console.log(filteredOrders)
=======
      );
    });
    console.log(filteredOrders);
    // setSellerOrders(filteredOrders);
    // console.log(sellerOrders);
  }
  console.log(filteredOrders);
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17

  // ================sellerOrder END========================

  return (
    <>
      <div className="d-flex">
        <div className="sellerhome__main" id="sellerhome__main">
<<<<<<< HEAD
          <div id="SellerFrontPage" style={{ display: 'block' }}>
=======
          <div id="SellerFrontPage" style={{ display: "block" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
            <div className="SellerFrontPage__main__section__news">
              <h2>最新消息</h2>
              <p>這是第一則重要消息！！看的到代表一切正常不用擔心！</p>
            </div>
            <div className="SellerFrontPage__main__section__todolist">
              <h2>待辦事項</h2>
              <div>
                <ul className="SellerFrontPage__status list-unstyled">
                  <li>
                    {/* <Link to={`/about`} ></Link> */}
                    <h1>0</h1>
                    {/* <br /> */}
                    <h3>未出貨</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待處理</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>已處理</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待取消</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待退貨</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>已售完</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div id="SellerPage" style={{ display: 'none' }}>
=======
          <div id="SellerPage" style={{ display: "none" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
            <div className="sellerpage">
              <div className="sellerpage__title mb-0">藝術家資訊</div>
              <div className="sellerpage__main">
                <form
                  className="sellerpage__main__left"
                  method="post"
                  name="leftForm"
                  onSubmit={handleSubmit}
                >
                  <div className="sellerpage__main__left__name">
                    <label>用戶姓名</label>
                    <input
                      type="text"
<<<<<<< HEAD
                      style={{ border: 'none' }}
=======
                      style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      name="username"
                      value={UserInputData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="sellerpage__main__right__name">
                    <label>帳號</label>
                    <input
                      type="text"
                      name="account"
<<<<<<< HEAD
                      style={{ border: 'none' }}
                      value={UserInputData.account}
                      onChange={handleChange}
=======
                      style={{ border: "none" }}
                      value={UserInputData.account}
                      onChange={handleChange}
                      disabled={true}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      required
                    />
                  </div>
                  <div className="sellerpage__main__right__name">
                    <label>電話</label>
                    <input
                      type="tel"
                      name="phone"
<<<<<<< HEAD
                      style={{ border: 'none' }}
=======
                      style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      value={UserInputData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button variant="dark" type="submit">
                    更改
                  </Button>
                </form>
                <form className="sellerpage__main__right">
                  <p>畫廊介紹</p>
                  <textarea
                    style={{
<<<<<<< HEAD
                      width: '350px',
                      height: '350px',
                      backgroundColor: '#F9F7F2',
                      border: 'none',
                      padding: '10px',
                    }}
                    value={UserInputData.username}
=======
                      width: "350px",
                      height: "350px",
                      backgroundColor: "#F9F7F2",
                      border: "none",
                      padding: "10px",
                    }}
                    value={UserInputData.introduce}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    onChange={handleChange2}
                    required
                  />
                  <Button variant="dark" type="submit">
                    更改
                  </Button>
                </form>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div id="SellerUpload" style={{ display: 'none' }}>
            <div className="SellerUpload">
              <div className="SellerUpload__upload">
                <div>
                  {/* <img
                    src={
                      UserImg.includes('http')
                        ? UserImg
                        : 'http://localhost:3001/public/uploads/' + UserImg
                    } //
                    alt=""
                    className=""
                  /> */}
                </div>
                <div>
=======
          <div id="SellerUpload" style={{ display: "none" }}>
            <div className="SellerUpload">
              <div className="SellerUpload__upload">
                <div>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                  <label className="SellerUpload__uploadIcon">
                    {/* 增加檔案 */}
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleUpload}
<<<<<<< HEAD
                      style={{ display: 'none' }}
=======
                      style={{ display: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    ></input>
                  </label>
                </div>
              </div>
<<<<<<< HEAD
=======
              {image === "" ? (
                ""
              ) : (
                <img
                  src={`http://localhost:3001/public/uploads/${image.name}`}
                  alt={image.name}
                  className=""
                />
              )}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
              <div className="SellerUpload__detail">
                <div className="SellerUpload__name">
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
=======
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    基本資料
                  </div>
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
=======
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    <div className="SellerUpload__name__input">
                      <p>商品名稱:</p>
                      <input
                        type="text"
                        name="name"
                        value={productInputData.name}
                        onChange={handleProductChange}
                        required
<<<<<<< HEAD
                        style={{ border: 'none' }}
=======
                        style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      />
                    </div>
                    <div className="SellerUpload__name__textarea">
                      <p>商品介紹:</p>
                      <textarea
                        type="text"
                        name="detail_text"
                        value={productInputData.introduce}
                        onChange={handleProductChange}
                        required
                        style={{
<<<<<<< HEAD
                          width: '330px',
                          height: '25px',
                          border: 'none',
=======
                          width: "330px",
                          height: "25px",
                          border: "none",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__money">
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
=======
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    銷售資訊
                  </div>
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
=======
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    <div className="SellerUpload__money__input">
                      <p>商品價格:</p>
                      <input
                        type="text"
                        name="price"
                        value={productInputData.price}
                        onChange={handleProductChange}
                        required
                        style={{
<<<<<<< HEAD
                          border: 'none',
                          width: '140px',
=======
                          border: "none",
                          width: "140px",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="SellerUpload__product">
                <div className="SellerUpload__kind">
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
=======
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    商品規格
                  </div>
                  <div
                    className="d-flex"
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
=======
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    <div className="SellerUpload__kind__left">
                      <div className="SellerUpload__kind__select">
                        <p>作品年份:</p>
                        <input
                          type="text"
                          name="creation_year"
                          value={productInputData.creation_year}
                          onChange={handleProductChange}
                          required
<<<<<<< HEAD
                          style={{ border: 'none', width: '100px' }}
=======
                          style={{ border: "none", width: "100px" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        />
                      </div>
                      <div className="SellerUpload__kind__select">
                        <p>作品種類:</p>
                        <select
                          name="material"
                          onChange={handleProductChange}
                          style={{
<<<<<<< HEAD
                            border: 'none',
                          }}
                        >
                          <option value="" style={{ display: 'none' }}>
=======
                            border: "none",
                          }}
                        >
                          <option value="" style={{ display: "none" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                            請選擇
                          </option>
                          <option value="油畫">油畫</option>
                          <option value="素描">素描</option>
                          <option value="版畫">版畫</option>
                          <option value="水墨">水墨</option>
                          <option value="版畫">版畫</option>
                          <option value="粉彩">粉彩</option>
                          <option value="水彩">水彩</option>
                          <option value="數位">數位</option>
                        </select>
                      </div>
                    </div>
                    <div className="SellerUpload__kind__right">
                      <p>作品尺寸:</p>
                      <div className="SellerUpload__kind__input">
                        長
                        <input
                          type="text"
                          name="height"
                          value={productInputData.height}
                          onChange={handleProductChange}
                          required
                          style={{
<<<<<<< HEAD
                            width: '50px',
                            border: 'none',
=======
                            width: "50px",
                            border: "none",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                          }}
                        />
                        寬
                        <input
                          type="text"
                          name="width"
                          value={productInputData.width}
                          onChange={handleProductChange}
                          required
                          style={{
<<<<<<< HEAD
                            width: '50px',
                            border: 'none',
=======
                            width: "50px",
                            border: "none",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__attributes">
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
=======
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    商品屬性
                  </div>
                  <div
                    style={{
<<<<<<< HEAD
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
=======
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    }}
                  >
                    <div className="SellerUpload__attributes__select">
                      <p>風格</p>
                      <select
                        name="style"
                        onChange={handleProductChange}
<<<<<<< HEAD
                        style={{ border: 'none' }}
                      >
                        <option value="" style={{ display: 'none' }}>
=======
                        style={{ border: "none" }}
                      >
                        <option value="" style={{ display: "none" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                          請選擇
                        </option>
                        <option value="印象">印象</option>
                        <option value="表現主義">表現主義</option>
                        <option value="幾何">幾何</option>
                        <option value="復古">復古</option>
                        <option value="超現實">超現實</option>
                      </select>
                    </div>
                    <div className="SellerUpload__attributes__select">
                      <p>色系</p>
                      <tr className="SellerUpload__color">
                        <table>
                          <tr>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-red"
                                name="work_hue"
                                value="Red"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-ori"
                                name="work_hue"
                                value="Orange"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-yel"
                                name="work_hue"
                                value="Yellow"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-gre"
                                name="work_hue"
                                value="Green"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-blu"
                                name="work_hue"
                                value="Blue"
                                onClick={handleProductChange}
                              ></button>
                            </td>

                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-pur"
                                name="work_hue"
                                value="Purple"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-bro"
                                name="work_hue"
                                value="Brown"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-whi"
                                name="work_hue"
                                value="White"
                                onClick={handleProductChange}
                              ></button>
                            </td>

                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-gra"
                                name="work_hue"
                                value="Gray"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-bla"
                                name="work_hue"
                                value="Black"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                          </tr>
                        </table>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Button variant="dark" className="me-2">
                取消
              </Button> */}
              <Button
                variant="dark"
                disabled={
                  !productInputData.name ||
                  !productInputData.photo ||
                  !productInputData.width ||
                  !productInputData.height ||
                  !productInputData.material ||
                  !productInputData.style ||
                  !productInputData.creation_year ||
                  !productInputData.work_hue ||
                  !productInputData.price ||
                  !productInputData.detail_text
                }
                onClick={handleProductSubmit}
              >
                儲存並送出
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          <div id="SellerProduct" style={{ display: 'none' }}>
=======
          <div id="SellerProduct" style={{ display: "none" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
            <section id="SellerProduct__section ">
              <nav id="SellerProduct__nav d-flex">
                <h1 className="SellerProduct__total">
                  共有
                  {sellerProducts && sellerProducts.data
                    ? sellerProducts.data.length
                    : 0}
                  件畫作
                </h1>
                {/* <Button className="SellerProduct__aside_add mt-5" variant="dark">
                  新增商品+
                </Button> */}
                {/* <div className="SellerProduct__aside-list">
                  <Button className="SellerProduct__aside-sort" variant="dark">
                    排序
                  </Button>
                </div> */}
              </nav>
              <main id="SellerProduct__main">
                <div class="SellerProduct__main_container">
                  <div className="SellerProduct＿main row align-items-start">
                    {sellerProducts &&
                      sellerProducts.data &&
                      sellerProducts.data.length > 0 &&
                      sellerProducts.data.map((seller_order, index) => (
<<<<<<< HEAD
=======
                        <div
                          className="SellerProduct__item col"
                          key={seller_order.id}
                        >
                          <a href={`/products/${seller_order.id}`}>
                            {seller_order.img_file.includes("http") ? ( <img
                              className="SellerProduct__card-img-top"
                              src={seller_order.img_file}
                              alt={seller_order.name}
                            />) : (
                            <img
                              className="SellerProduct__card-img-top"
                              src={`${process.env.REACT_APP_NODE_URL}/public/uploads/${seller_order.img_file}`}
                              alt={seller_order.name}
                            />)}

                          </a>
                          <div className="SellerProduct__card-text">
                            {selectedSellerOrder.id === seller_order.id && (
                              <>
                                <input
                                  className="SellerProduct__productId"
                                  type="text"
                                  style={{ border: "none", width: "200px" }}
                                  value={selectedSellerOrder.name}
                                  onChange={(e) =>
                                    setSelectedSellerOrder({
                                      ...selectedSellerOrder,
                                      name: e.target.value,
                                    })
                                  }
                                />
                                <input
                                  className="SellerProduct__price"
                                  type="number"
                                  style={{ border: "none", width: "200px" }}
                                  value={selectedSellerOrder.price}
                                  onChange={(e) =>
                                    setSelectedSellerOrder({
                                      ...selectedSellerOrder,
                                      price: e.target.value,
                                    })
                                  }
                                />
                              </>
                            )}

                            {selectedSellerOrder.id !== seller_order.id && (
                              <>
                                <h5 className="SellerProduct__productId">
                                  作品名稱:{seller_order.name}
                                </h5>
                                <div className="m-1">
                                  <p className="SellerProduct__price">
                                    金額:{seller_order.price}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                          <Button
                            className="m-1"
                            style={{ background: "black" }}
                            onClick={() => setSelectedSellerOrder(seller_order)}
                          >
                            編輯
                          </Button>
                          <Button
                            onClick={() =>
                              submitSelectedSellerOrder(selectedSellerOrder)
                            }
                          >
                            確定
                          </Button>
                        </div>
                      ))}
                    {/* {sellerProducts &&
                      sellerProducts.data &&
                      sellerProducts.data.length > 0 &&
                      sellerProducts.data.map((seller_order, index) => (
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        <a href={`/products/${seller_order.id}`}
                          className="SellerProduct__item col"
                          key={seller_order.id}
                        >
                          <img
                            className="SellerProduct__card-img-top"
                            src={seller_order.img_file}
                            alt={seller_order.name}
<<<<<<< HEAD
                          />
=======
                          /> 
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                          <div className="SellerProduct__card-text">
                            {selectedSellerOrder.id === seller_order.id && (
                              <>
                                <input
                                  className="SellerProduct__productId"
                                  type="text"
                                  style={{ border: 'none', width: '200px' }}
                                  value={selectedSellerOrder.name}
                                  onChange={(e) =>
                                    setSelectedSellerOrder({
                                      ...selectedSellerOrder,
                                      name: e.target.value,
                                    })
                                  }
                                />
                                <input
                                  className="SellerProduct__price"
                                  type="number"
                                  style={{ border: 'none', width: '200px' }}
                                  value={selectedSellerOrder.price}
                                  onChange={(e) =>
                                    setSelectedSellerOrder({
                                      ...selectedSellerOrder,
                                      price: e.target.value,
                                    })
                                  }
                                />
                              </>
                            )}
<<<<<<< HEAD
=======
                            
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                            {selectedSellerOrder.id !== seller_order.id && (
                              <>
                                <h5 className="SellerProduct__productId">
                                  作品名稱:{seller_order.name}
                                </h5>
                                <div className='m-1'>
                                  <p className="SellerProduct__price">
                                    金額:{seller_order.price}
                                  </p>
                                </div>
                              </>
                            )}
<<<<<<< HEAD

                            {/* {selectedSellerOrder.id === seller_order.id && (
                              <input
                                className="SellerProduct__productId"
                                type="text"
                                value={selectedSellerOrder.name}
                                onChange={(e) =>
                                  setSelectedSellerOrder({
                                    ...selectedSellerOrder,
                                    name: e.target.value,
                                  })
                                }
                              />
                            )}
                            {selectedSellerOrder.id !== seller_order.id && (
                              <p className="SellerProduct__productId">
                                {seller_order.name}
                              </p>
                            )} */}

                            {/* <p className="SellerProduct__productId">
                              {seller_order.name}
                            </p> */}
                            {/* <p className="SellerProduct__price">
                              金額:{seller_order.price}
                            </p> */}
=======
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                          </div>
                          <Button
                            className="m-1"
                            style={{ background: 'black' }}
                            onClick={() => setSelectedSellerOrder(seller_order)}
                          >
                            編輯
                          </Button>
                          <Button
                            onClick={() =>
                              submitSelectedSellerOrder(selectedSellerOrder)
                            }
                          >
                            確定
                          </Button>
<<<<<<< HEAD
                        </a>
                      ))}
=======
                       </a>
                      ))} */}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                  </div>
                </div>
              </main>
            </section>
          </div>
<<<<<<< HEAD
          <div id="SellerOrder" style={{ display: 'none' }}>
=======
          <div id="SellerOrder" style={{ display: "none" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
            <div className="sellerorder__main__text m-5">
              <div>
                <h1>
                  共有
                  {filteredOrders && filteredOrders.length
                    ? filteredOrders.length
                    : 0}
                  筆訂單
                </h1>
              </div>

              {/* <div className="sellerorder__main__text__input">
                <input type="text" placeholder="輸入文字搜尋" />
                <Button variant="dark">排序</Button>
              </div> */}
            </div>
            <div className="sellerorder__main__table">
              <table className="sellerorder__main__table_table">
                <thead>
                  <tr>
                    <th>
                      <div
                        className=""
                        // variant="--color-bg"
<<<<<<< HEAD
                        style={{ fontWeight: '400' }}
=======
                        style={{ fontWeight: "400" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      >
                        訂單編號
                      </div>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
<<<<<<< HEAD
                        style={{ border: 'none' }}
=======
                        style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      >
                        出貨狀況
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
<<<<<<< HEAD
                        style={{ border: 'none' }}
=======
                        style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      >
                        金額
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
<<<<<<< HEAD
                        style={{ border: 'none' }}
=======
                        style={{ border: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                      >
                        售出時間
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th className="sellerorder__main_detil_count">
<<<<<<< HEAD
                      <div className="" style={{ fontWeight: '400' }}>
=======
                      <div className="" style={{ fontWeight: "400" }}>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        售出數量
                      </div>
                    </th>
                    <th className="sellerorder__main_detil_button"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders &&
                    filteredOrders.length > 0 &&
                    filteredOrders.map((order, index) => (
                      <tr key={order.order_id}>
                        <td>202302000{order.order_id}</td>
                        <td>
                          {order.order_status === 1
<<<<<<< HEAD
                            ? '待出貨'
                            : order.order_status === 2
                            ? '出貨中'
                            : '已送達'}
=======
                            ? "待出貨"
                            : order.order_status === 2
                            ? "出貨中"
                            : "已送達"}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        </td>
                        <td>{order.order_price}2000</td>
                        <td>{order.order_date.slice(0, 10)}</td>
                        <td className="sellerorder__main_detil_count">
                          {order.amount}
                        </td>
                        <td className="sellerorder__main_detil_button">
                          <Button
                            value={order.order_id}
                            variant="dark"
                            onClick={() => setSelectedOrder(order)}
                          >
                            訂單明細
                          </Button>
                        </td>
                      </tr>
                    ))}
<<<<<<< HEAD
                    <div>
                  </div>
                </tbody>
              </table>
              <div>
                    {' '}
                    {selectedOrder && (
                      <div className='sellerorder_detail_wrap'>
                        <h5 className='mt-1'><FaClipboardList className='me-2 mb-1'/>訂單明細</h5>
                        <table className='sellerorder_detail_wrap_table'>  

                        <tr>
=======
                  <div></div>
                </tbody>
              </table>
              <div>
                {" "}
                {selectedOrder && (
                  <div className="sellerorder_detail_wrap">
                    <h5 className="mt-1">
                      <FaClipboardList className="me-2 mb-1" />
                      訂單明細
                    </h5>
                    <table className="sellerorder_detail_wrap_table">
                      <tr>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        <th>訂單ID</th>
                        <th>訂單狀態</th>
                        <th>金額</th>
                        <th>日期</th>
                        <th>數量</th>
                        <th>地址</th>
                        <th>產品編號</th>
                        <th>總金額</th>
                        <th>買家編號</th>
<<<<<<< HEAD
                        </tr>    

                        <tr>
                        <td>{selectedOrder.order_id}</td>
                        <td>  {selectedOrder.order_status === 1
                          ? '待出貨'
                          : selectedOrder.order_status === 2
                          ? '出貨中'
                          : '已送達'}</td>
=======
                      </tr>

                      <tr>
                        <td>{selectedOrder.order_id}</td>
                        <td>
                          {" "}
                          {selectedOrder.order_status === 1
                            ? "待出貨"
                            : selectedOrder.order_status === 2
                            ? "出貨中"
                            : "已送達"}
                        </td>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        <td>{selectedOrder.order_price}2000</td>
                        <td>{selectedOrder.order_date.slice(0, 10)}</td>
                        <td>{selectedOrder.amount}</td>
                        <td>{selectedOrder.send_address}</td>
                        <td>{selectedOrder.product_id}</td>
                        <td>{selectedOrder.total}</td>
                        <td>{selectedOrder.user_id}</td>
<<<<<<< HEAD
                        </tr>   

                        </table>
                      </div>
                    )}
                    </div>
=======
                      </tr>
                    </table>
                  </div>
                )}
              </div>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
            </div>
          </div>
        </div>
        <div className="_sellerhome__pic_414 m-3">
          {/* <img
            src={buyerImg}
            alt="sellerHead"
            className="_sellerhome_headImg"
          /> */}
          <label className="sellerhome__headIcon_414">
            {/* 增加檔案 */}
<<<<<<< HEAD
            <input type="file" style={{ display: 'none' }}></input>
=======
            <input type="file" style={{ display: "none" }}></input>
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
          </label>
        </div>
        <div className="sellerhome__sidebar">
          <div className="sellerhome__sidebar__center">
            <div className="_sellerhome__pic_1920 m-3">
              {UserOldDatas && UserOldDatas.user_imageHead ? (
                <img
                  src={
<<<<<<< HEAD
                    UserOldDatas.user_imageHead.includes('http')
                      ? UserOldDatas.user_imageHead
                      : 'http://localhost:3001/public/uploads/' +
=======
                    UserOldDatas.user_imageHead.includes("http")
                      ? UserOldDatas.user_imageHead
                      : "http://localhost:3001/public/uploads/" +
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                        UserOldDatas.user_imageHead
                  }
                  alt="buyHead"
                  className="_buyLogin_headImg"
                  style={{
<<<<<<< HEAD
                    width: '140px',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              ) : null}
=======
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : null}
            </div>
            <div className="d-flex">
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
              <label className="_buyLogin_headIcon">
                {/* 增加檔案 */}
                <div>
                  <input
                    type="file"
                    id="imageHead"
                    name="imageHead"
<<<<<<< HEAD
                    style={{ display: 'none' }}
=======
                    style={{ display: "none" }}
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
                    onChange={handleSellerPicUpload}
                  ></input>
                </div>
              </label>
<<<<<<< HEAD
              <Button className='_buyLogin_headIcon_button' onClick={handleSellerPicSubmit}>
              送出
=======
              <Button
                className="_buyLogin_headIcon_button"
                onClick={handleSellerPicSubmit}
              >
                送出
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
              </Button>
            </div>
            <ul className="list-unstyled sellerhome__icon ">
              <li className="d-flex">
                <SellerButton src={sellerHouseIcon} onClick={SellerFrontPage} />
                <p className="sellerhome__icon_text">首頁</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerpageIcon} onClick={SellerPage} />
                <p className="sellerhome__icon_text">個人頁面</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerupIcon} onClick={SellerUpload} />
                <p className="sellerhome__icon_text">上架商品</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerlistIcon} onClick={SellerProduct} />
                <p className="sellerhome__icon_text">商品管理</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerorderIcon} onClick={SellerOrder} />
                <p className="sellerhome__icon_text">訂單資訊</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
}
export default SellerHome
=======
  );
}
export default SellerHome;
>>>>>>> 10b7a3bc046377311d2cf79520a6932966b20a17
