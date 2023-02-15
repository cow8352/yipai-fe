import BuyBotton from "./BuyBotton";
import buyButton from "./image/buyButton.svg";
import "./login/buyLogin.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth } from "../../components/useAuth";


function ArtList(params) {
    const { auth } = useAuth()
    const [userlike, setUserlike] = useState([]);  
    // console.log('-*-*-*-**-*-',userlike)
    const[like, setLike]= useState(false)
    // console.log('--------------46',auth)

    useEffect(() => {
      async function getUserlike() {
        let response = await axios.get(
          `http://localhost:3001/userlike/${auth.users.users_id}`,
          {
            withCredentials: true,
          }
        )
        setUserlike(response.data)
      }
      getUserlike()
    }, [auth.users.users_id]);

    
       // 取消收藏
       async function deleteLike(pid) {
        await axios.delete(`http://localhost:3001/user_like_delete/${pid}`, {
        withCredentials: true, })
        setLike(false)
    }

     


    return (<>
        {/* map((v,i)=>{}) map(()=>{}) */}

        {userlike.map((v,i)=>{
            return(
            <div key={v.id} style={{ position: "relative" }}>
            <div className='_buyLogin_artbox'>
                {/* 刪除按鈕 */}
                <button className={params.btnClass}  onClick={() => {
                            deleteLike(v.product_id)
                            console.log('--------------46',auth.users.users_id)
                            console.log('16797878878',v.product_id)
                            // window.location.reload()
                            }} />
                <img
                    src={v.img_file}
                    alt={v.img_file}
                    style={{ display: "flex" }}
                    className="userlike_img"
                />
                {/* 直的排列文字 */}
                <div
                    className='_buyLogin_flex'
                    style={{ alignItems: "flex-start" }}
                >
                    <h5 className={params.artNameClass}>{v.name}</h5>
                    <h5 className={params.artSizeClass}>商品尺寸：{v.width} * {v.height}</h5>
                    <h5  className={params.artPriceClass}>價格：{v.price}</h5>
                </div>
                <BuyBotton
                    text='購買'
                    src={buyButton}
                    alt='ICon'
                    btnStyle={{ display: "flex" }}
                    className='_buyLogin_buyerControlBtnNormal'
                />
            </div>
            </div>)
        })}
        
        </>);
}
export default ArtList;
