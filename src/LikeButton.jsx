import { useState } from "react";

export default function LikeButton(){
    //button is unliked initially
    let [IsLiked, setIsLiked]= useState(false);
    let toggleLiked = ()=>{
        setIsLiked(!IsLiked); // setIsLiked is made equal to not of IsLiked
    };
    let likeStyle= {color: "red"};
    return (
        <div>           
            <p onClick={toggleLiked}>
                {IsLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}