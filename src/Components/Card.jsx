import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardThunk } from "./redux/slice";

function Card() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cards.card);
  console.log(result);

  useEffect(() => {
    dispatch(fetchCardThunk());
  });

  return (

    <>
{
  result && result.length >0 ? result.map((res,index)=>(
    <div className="card card-compact bg-base-100 w-[300px] shadow-xl" key={index}>
    <figure>
      <img
        src={`${res.thumbnail}`}
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{res.title}</h2>
      <p>{res.description}</p>
      <div className="card-actions flex items-center justify-around">
        <p className="text-xl"><b>Price:</b>{res.price}</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )) : "data not available"
}

     
    </>
  );
}

export default Card;
