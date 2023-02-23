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

import {
  SellerFrontPage,
  SellerPage,
  SellerUpload,
  SellerProduct,
  SellerOrder,
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
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')
  // server上的圖片網址
  const [imgServerUrl, setImgServerUrl] = useState('')

  let [UserData, setUserData] = useState({}); //記錄數值
  let [UserName, setUserName] = useState(''); //記錄數值

  let [UserOldDatas, setUserOldDatas] = useState({}); //原本的數據
  let [UserOrders, setUserOrders] = useState([]); //記錄使用者訂單
  let [sellerProducts, setSellerProducts] = useState([]); //記錄使用者圖畫
  let [sellerOrders, setSellerOrders] = useState([]); //記錄使用者訂單
  let [sellerOrder, setSellerOrder] = useState([]); //記錄使用者訂單

  // 只執行一次
  useEffect(() => {
    async function getMember2() {
      //全部的訂單
      let response4 = await axios.get(
        `http://localhost:3001/api/members/sellerOrder`,
        {
          withCredentials: true,
        }
      );
      setSellerOrders(response4);
      //記錄使用者圖畫
      let response3 = await axios.get(
        `http://localhost:3001/api/members/sellerProduct`,
        {
          withCredentials: true,
        }
      );
      setSellerProducts(response3);
      let response2 = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      setUserData(response2.data[0].users_id);
      setUserName(response2.data[0].users_name)
      //   setUserData(response2.data[0])
      console.log(response2.data[0]);
      setUserOldDatas(response2.data[0]);
      let responseOrder = await axios.get(
        `http://localhost:3001/api/members/orders`,
        {
          withCredentials: true,
        }
      );
      setUserOrders(responseOrder.data[0]);
    }
    getMember2();
  }, []);
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
  const handleChange = (event) => {
    setUserInputData({
      ...UserInputData,
      [event.target.name]: event.target.value,
    });
  };
  // 每次輸入後更畫廊資料
  useEffect(() => {
    console.log(UserIntroduce);
  }, [UserIntroduce]);
  const handleChange2 = (event) => {
    setUserIntroduce({
      ...UserIntroduce,
      [event.target.name]: event.target.value,
    });
  };
  // 送出輸入資料
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('==================userData',UserData)
    axios
      .put(`http://localhost:3001/api/members/userData`, {
        username: UserInputData.username,
        account: UserInputData.account,
        // email: UserInputData.email,
        phone: UserInputData.phone,
        usersId: UserData,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  //================================================================
  // NOTE 上傳大頭貼
  const [sellerPic, setSellerPic] = useState({
    photo: "",
  });
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(sellerPic);
  }, [sellerPic]);
  
  // 檔案更新值
  function handleSellerPicUpload(e) {
    // file input 的值並不是存在 value 欄位裡
    const file = e.target.files[0]
    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)
      setImgServerUrl('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setImgServerUrl('')
    }
    setSellerPic({ ...sellerPic, photo: e.target.files[0] });
  }
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    console.log(objectUrl)
    setPreview(objectUrl)
    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  // 送出輸入資料
  useEffect(()=>{})
  // 送出輸入資料
  async function handleSellerPicSubmit(e) {
    console.log("handleProductSubmit");
    // 關閉表單的預設行為
    e.preventDefault();
    let formData = new FormData();
    
    if (sellerPic.photo) {
      formData.append("photo", sellerPic.photo);
    }
    let response = await axios.post(
      `http://localhost:3001/uploadsPhoto/product/${UserData}`,
      formData,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    alert("圖片上傳成功");
    navigate(0)
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
  const handleProductChange = (event) => {
    setProductInputData({
      ...productInputData,
      [event.target.name]: event.target.value,
    });
    event.target.classList.toggle("active");
  };
  function handleUpload(e) {
    // file input 的值並不是存在 value 欄位裡
    setImage(e.target.files[0]);
    setProductInputData({ ...productInputData, photo: e.target.files[0] });
  }
  // 送出輸入資料
  // NOTE 商品上傳
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
  // ================sellerProduct商品管理========================
  //此賣家的全部圖片
  const [selectedSellerOrder, setSelectedSellerOrder] = useState({
    name: "",
    price: "",
  });
  async function submitSelectedSellerOrder(selectedSellerOrder) {
    const response = await fetch(
      `http://localhost:3001/product/${selectedSellerOrder.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedSellerOrder),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update seller order");
    }
    window.location.reload();
  }
  // ================sellerOrder訂單資訊========================
  const [selectedOrder, setSelectedOrder] = useState(null);
  let filteredOrders = [];
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
      );
    });
  }
  // ================sellerOrder END========================
  return (
    <>
      <div className="d-flex">
        <div className="sellerhome__main" id="sellerhome__main">
          {/* 元首ˋ頁 */}
          <div id="SellerPage" style={{ display: "none" }}>
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
                      style={{ border: "none" }}
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
                      style={{ border: "none" }}
                      value={UserInputData.account}
                      onChange={handleChange}
                      disabled={true}
                      required
                    />
                  </div>
                  <div className="sellerpage__main__right__name">
                    <label>電話</label>
                    <input
                      type="tel"
                      name="phone"
                      style={{ border: "none" }}
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
                      width: "350px",
                      height: "350px",
                      backgroundColor: "#F9F7F2",
                      border: "none",
                      padding: "10px",
                    }}
                    value={UserInputData.introduce}
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
          <div id="SellerUpload" style={{ display: "none" }}>
            <div className="SellerUpload">
              <div className="SellerUpload__upload">
                <div>
                  <label className="SellerUpload__uploadIcon">
                    {/* 增加檔案 */}
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleUpload}
                      style={{ display: "none" }}
                    ></input>
                  </label>
                </div>

              {image === "" ? (
                ""
              ) : (
                <img
                  src={`http://localhost:3001/public/uploads/${image.name}`}
                  alt={image.name}
                  className=""
                  style={{
                            margin:"0 0 0 20px",
                            width: "160px",
                            height:"160px",
                          }}
                />
              )}
              </div>
              <div className="SellerUpload__detail">
                <div className="SellerUpload__name">
                  <div
                    style={{
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
                    }}
                  >
                    基本資料
                  </div>
                  <div
                    style={{
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
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
                        style={{ border: "none" }}
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
                          width: "330px",
                          height: "25px",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__money">
                  <div
                    style={{
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
                    }}
                  >
                    銷售資訊
                  </div>
                  <div
                    style={{
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
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
                          border: "none",
                          width: "140px",
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
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
                    }}
                  >
                    商品規格
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
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
                          style={{ border: "none", width: "100px" }}
                        />
                      </div>
                      <div className="SellerUpload__kind__select">
                        <p>作品種類:</p>
                        <select
                          name="material"
                          onChange={handleProductChange}
                          style={{
                            border: "none",
                          }}
                        >
                          <option value="" style={{ display: "none" }}>
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
                            width: "50px",
                            border: "none",
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
                            width: "50px",
                            border: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__attributes">
                  <div
                    style={{
                      backgroundColor: "#C9D7E3",
                      textAlign: "center",
                    }}
                  >
                    商品屬性
                  </div>
                  <div
                    style={{
                      backgroundColor: "#EAEAEA",
                      padding: "20px",
                    }}
                  >
                    <div className="SellerUpload__attributes__select">
                      <p>風格</p>
                      <select
                        name="style"
                        onChange={handleProductChange}
                        style={{ border: "none" }}
                      >
                        <option value="" style={{ display: "none" }}>
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
          <div id="SellerProduct" style={{ display: "block" }}>
            <section id="SellerProduct__section ">
              <nav id="SellerProduct__nav d-flex">
                <h1 className="SellerProduct__total">
                  共有
                  {sellerProducts && sellerProducts.data
                    ? sellerProducts.data.length
                    : 0}
                  件畫作
                </h1>
              </nav>
              <main id="SellerProduct__main">
                <div class="SellerProduct__main_container">
                  <div className="SellerProduct＿main row align-items-start">
                    {sellerProducts &&
                      sellerProducts.data &&
                      sellerProducts.data.length > 0 &&
                      sellerProducts.data.map((seller_order, index) => (
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
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div id="SellerOrder" style={{ display: "none" }}>
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
            </div>
            <div className="sellerorder__main__table">
              <table className="sellerorder__main__table_table">
                <thead>
                  <tr>
                    <th>
                      <div
                        className=""
                        // variant="--color-bg"
                        style={{ fontWeight: "400" }}
                      >
                        訂單編號
                      </div>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: "none" }}
                      >
                        出貨狀況
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: "none" }}
                      >
                        金額
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: "none" }}
                      >
                        售出時間
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th className="sellerorder__main_detil_count">
                      <div className="" style={{ fontWeight: "400" }}>
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
                            ? "待出貨"
                            : order.order_status === 2
                            ? "出貨中"
                            : "已送達"}
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
                        <th>訂單ID</th>
                        <th>訂單狀態</th>
                        <th>金額</th>
                        <th>日期</th>
                        <th>數量</th>
                        <th>地址</th>
                        <th>產品編號</th>
                        <th>總金額</th>
                        <th>買家編號</th>
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
                        <td>{selectedOrder.order_price}2000</td>
                        <td>{selectedOrder.order_date.slice(0, 10)}</td>
                        <td>{selectedOrder.amount}</td>
                        <td>{selectedOrder.send_address}</td>
                        <td>{selectedOrder.product_id}</td>
                        <td>{selectedOrder.total}</td>
                        <td>{selectedOrder.user_id}</td>
                      </tr>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="_sellerhome__pic_414 m-3">
          <label className="sellerhome__headIcon_414">
            {/* 增加檔案 */}
            <input type="file" style={{ display: "none" }}></input>
          </label>
        </div>
        <div className="sellerhome__sidebar">
          <div className="sellerhome__sidebar__center">
            <div className="_sellerhome__pic_1920 m-3">
            {isFilePicked && <img
            src={ preview}
            alt="buyHead"
            className="_buyLogin_headImg"
            style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
          />}
              {UserOldDatas && UserOldDatas.user_imageHead ? (
                <img
                  src={
                    UserOldDatas.user_imageHead.includes("http")
                      ? UserOldDatas.user_imageHead
                      : "http://localhost:3001/public/uploads/" +
                        UserOldDatas.user_imageHead
                  }
                  alt="buyHead"
                  className={"_buyLogin_headImg "+(isFilePicked?"d-none":"")}
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : null}
            </div>
            <div className="d-flex">
              <label className="_buyLogin_headIcon">
                {/* 增加檔案 */}
                <div>
                  <input
                    type="file"
                    id="imageHead"
                    name="imageHead"
                    style={{ display: "none" }}
                    onChange={handleSellerPicUpload}
                  ></input>
                </div>
              </label>
              <Button
                className="_buyLogin_headIcon_button"
                onClick={handleSellerPicSubmit}
              >
                送出
              </Button>
            </div>
            <ul className="list-unstyled sellerhome__icon ">
              {/* <li className="d-flex">
                <SellerButton src={sellerHouseIcon} onClick={SellerFrontPage} />
                <p className="sellerhome__icon_text">首頁</p>
              </li> */}
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
  );
}
export default SellerHome;
