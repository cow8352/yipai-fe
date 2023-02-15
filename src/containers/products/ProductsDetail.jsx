// import React from 'react';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./productsDetail.css";
import "bootstrap";
import demo from "../../assets/demo.jpg";
import artistLink from "../../assets/artistLink.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from '../../components/useAuth'

// cart part
import { useCart } from "../cart/utils/useCart";

const ProductsDetail = () => {
  const {productId}= useParams()
  // cartpart
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
  } = useCart();

  const { product_id } = useParams()
  const [productName, setProductName] = useState("");
  const [liked, setLiked] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow(true);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const { auth } = useAuth()
  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      console.log(response.data[0]);
    }
    getMember2();
  }, []);

  

  const [UserName, setUserName] = useState([]);
  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );

      setUserName(response.data[0]);
      console.log(response.data[0]);
    }
    getMember2();
  }, []);

// 收藏資料
  useEffect(() => {
    const getMember2= async function() {
      let response = await axios.get(
        `http://localhost:3001/users/user_like_add/info/${productId}`, {
          withCredentials: true,
        })
        console.log('response.data[0]', response.data[0] )
        if(response.data[0].length > 0) setLiked(true)
    }
    getMember2();
  }, []);

// useEffect(()=>{
//   if(likeList.length>0) setLiked(true)
// },[likeList])

    //加入收藏
    async function addLike(pid) {
      await axios.post(
        `http://localhost:3001/users/user_like_add`,
        { product_id: pid },
        { withCredentials: true }
      )
  
      setLiked(true)
    }
    // 取消收藏
    async function deleteLike(pid) {
      await axios.delete(`http://localhost:3001/user_like_delete/${pid}`, {
        withCredentials: true,
      })
  
      setLiked(false)
    }

  const showModal = (name) => {
    setProductName("產品：" + name + "已成功加入購物車");
    handleShow();
  };
  const showModalFail = (name) => {
    setProductName("請登入!");
    handleShow2();
  };

  const messageModal = (
    <Modal
      className="model-bg-color"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            navigate("/products", { replace: true });
          }}
        >
          繼續購物
        </Button>

        <Button
          className="btn btn-primary"
          onClick={() => {
            // 導向購物車頁面
            // props.history.push('/')
            navigate("/cart", { replace: true });
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  );
  const messageModalFalse = (
    <Modal
      className="model-bg-color"
      show={show}
      onHide={handleClose2}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>加入購物車失敗</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose2();
            navigate("/products", { replace: true });
          }}
        >
          返回
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [data, setData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const { artistId } = useParams();
  const [artistName, setArtistName] = useState([]);
  const [products, setProducts] = useState("");

  useEffect(() => {
    // console.log('第二個參數是空陣列')
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getData() {
      let response = await axios.get(
        `http://localhost:3001/product/${productId}?`
      );
      setData(response.data);
      // console.log("---------", response.data[0]);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getArtistData() {
      let artistResponse = await axios.get("http://localhost:3001/artist");
      setArtistData(artistResponse.data);
    }
    getArtistData();
  }, []);

  //console.log(artistData);
  //console.log(data);

  let filtered = [...artistData];
  filtered = filtered.filter(
    (artistData) => artistData.users_name === data[0].artist
  );
  //console.log(filtered)

  useEffect(() => {
    async function getProducts() {
      let ProductsResponse = await axios.get(`http://localhost:3001/product`);
      setProducts(ProductsResponse.data);
      console.log(ProductsResponse.data);
    }
    getProducts();
  }, []);

  //console.log(products);
  // console.log(artistData[0].users_name );

  let SelectedImg_file = [...products];
  SelectedImg_file = SelectedImg_file.filter(
    (SelectedImg_file) => SelectedImg_file.artist === data[0].artist
  );
  console.log(SelectedImg_file);

  //SelectedImg_file = SelectedImg_file.filter(
  //  (products) => products.artist === filtered[0].id
  //);

  const display = (
    <>
      <div className="container-fluid" id="ProductsDetail_container_fluid">
        {data.map((productsDetail, index) => {
          return (
            <section id="ProductsDetail_section">
              <hgroup id="ProductsDetail_hgroup">
                <div
                  key={productsDetail.id}
                  className="ProductsDetail_nav-wrapper d-inline"
                >
                  <div className="ProductsDetail_d-inline">
                    <h1>{productsDetail.name}</h1>
                    <h4 className="ProductsDetail_card-text">
                      {productsDetail.artist}
                    </h4>
                  </div>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>
                          <h4>媒材</h4>
                        </th>
                        <th>
                          <h4>風格</h4>
                        </th>
                        <th>
                          <h4>年份</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{productsDetail.material}</td>
                        <td>{productsDetail.product_style}</td>
                        <td>{productsDetail.creation_year}</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th scope="col">
                          <h4>色系</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="col">
                          {/* {productsDetail.work_hue} */}
                          <div className="d-flex">
                            {[
                              "Red",
                              "Orange",
                              "Yellow",
                              "Green",
                              "Blue",
                              "Purple",
                              "Brown",
                              "White",
                              "Gray",
                              "Black",
                            ]
                              .filter((color) =>
                                productsDetail.work_hue.includes(color)
                              )
                              .map((color) => (
                                <div
                                  key={color}
                                  className={`ProductsDetail-color-item-${color}`}
                                />
                              ))}
                          </div>
                        </th>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th scope="col">
                          <h4>尺寸</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>寬{productsDetail.width}cm</td>
                        <td>高{productsDetail.height}cm</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th scope="col">
                          <h4>價格</h4>
                        </th>
                      </tr>
                    </thead>
                  </table>
                  <h1 className="ProductsDetail_price_item d-flex">
                    ${productsDetail.price}
                  </h1>
                  <div className="d-flex align-items-center">
                    <div className="ProductsDetail_addCar ">
                      {login ? (
                        <button
                          className="ProductsDetail_addCar-button d-inline"
                          onClick={() => {
                            // 商品原本無數量屬性(quantity)，要先加上
                            const item = { ...productsDetail, quantity: 1 };
                            // 注意: 重覆加入會自動+1產品數量
                            addItem(item);
                            // 呈現跳出對話盒
                            showModal(productsDetail.name);
                          }}
                        >
                          加入購物車
                        </button>
                      ) : (
                        <button
                          className="ProductsDetail_addCar-button d-inline"
                          onClick={() => {
                            // 商品原本無數量屬性(quantity)，要先加上
                            const item = {};
                            // 注意: 重覆加入會自動+1產品數量
                            removeItem(item);
                            // 呈現跳出對話盒
                            showModalFail("請登入!");
                          }}
                        >
                          加入購物車
                        </button>
                      )}
                    </div>
                    <div className="mx-3">
                     <div className="collect">
                      {auth.isAuth ? (
                        <div>
                          { liked ? (
                            <FaHeart
                              className="collect_fill_icon"
                              onClick={() => {
                                deleteLike(productsDetail.id)
                              }}
                            />
                          ) : (
                            <FaRegHeart
                              name="product_id"
                              className="collect_icon"
                              onClick={() => {
                                addLike(productsDetail.id)
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="collect_btn">
                          <FaRegHeart
                            name="product_id"
                            className="collect_icon"
                          />
                        </div>
                      )}                 
                    </div>
                    </div>

                  </div>
                </div>
              </hgroup>
              <figure id="ProductsDetail_figure">
                <p className="ProductsDetail_page-link">
                  <Link to="/products">藝術品</Link>▶
                  {productsDetail.product_style}▶{productsDetail.material}
                </p>
                <img
                  className="ProductsDetail_img-pic"
                  src={
                    productsDetail.img_file.includes("http")
                      ? productsDetail.img_file
                      : "http://localhost:3001/public/uploads/" +
                        productsDetail.img_file
                  }
                  alt="img"
                />
              </figure>
              <article id="ProductsDetail_article">
                <div className="ProductsDetail_Detail ">
                  <div className="ProductsDetail_Detail-text ">
                    <p className="ProductsDetail_p" align="left">
                      {productsDetail.detail_text}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="ProductsDetail_Pic"
                      src={
                        productsDetail.img_file.includes("http")
                          ? productsDetail.img_file
                          : "http://localhost:3001/public/uploads/" +
                            productsDetail.img_file
                      }
                    />
                    <img src={demo} alt="" className="ProductsDetail_demobox" />
                  </div>
                </div>
              </article>
              {filtered.map((artistData, index) => {
                return (
                  <aside id="ProductsDetail_aside">
                    <div className="ProductsDetail_aside-wrapp">
                      <div className="ProductsDetail_artistLink">
                        <div className="col-md-4">
                          <img
                            src={artistData.user_imageHead}
                            className="ProductsDetail_artistPic"
                            alt="img"
                          />
                        </div>
                        <div className="ProductsDetail_card-body">
                          <div className="ProductsDetail_card-body-wrap">
                            <h5 className="ProductsDetail_card-title">
                              {artistData.users_name}
                            </h5>
                            <h5 className="ProductsDetail_card-text">
                              {artistData.users_birth}
                            </h5>
                            <p className="ProductsDetail_Detail-text">
                              <p className="ProductsDetail_p" align="left">
                                {artistData.users_introduce}
                              </p>
                            </p>
                            <button className="ProductsDetail_follow">
                              關注
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                );
              })}

              {/* 電腦版 */}

              <main id="ProductsDetail_main">
                <h3 className="fw-bold ProductsDetail_more">
                  其他推薦的藝術品
                </h3>
                {SelectedImg_file.slice(0, 5).map((SelectedImg_file, index) => {
                  return (
                    <div className="ProductsDetail_main-wrap">
                      <table className="ProductsDetail_other-product">
                        <tr className="ProductsDetail_card-pic ProductsDetail_pic1">
                          <td>
                            <a
                              href={`http://localhost:3000/products/${SelectedImg_file.id}`}
                            >
                              <img
                                className="ProductsDetail_pic-img"
                                src={
                                  SelectedImg_file.img_file.includes("http")
                                    ? SelectedImg_file.img_file
                                    : "http://localhost:3001/public/uploads/" +
                                      SelectedImg_file.img_file
                                }
                              />
                              <div className="ProductsDetail__card-text">
                                <h6 className="ProductsDetail_productId">
                                  {SelectedImg_file.name}
                                </h6>
                                <p className="ProductsDetail_price">
                                  ${SelectedImg_file.price}
                                </p>
                              </div>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  );
                })}
              </main>
            </section>
          );
        })}
      </div>
    </>
  );
  return (
    <>
      {messageModalFalse}
      {messageModal}
      {display}
    </>
  );
};

export default ProductsDetail;
