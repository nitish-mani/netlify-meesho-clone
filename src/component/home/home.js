import { useContext } from "react";
import "./home.css";
import dataApi from "../../context/dataApi";
import Card from "../card/Card";
import DetailCard from "../detail_card/detailCard";
import { Outlet, useNavigate } from "react-router-dom";
// import Cart from "../cart/cart";

export default function Home() {
  const data = useContext(dataApi);
  const navigate = useNavigate();

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div
            onClick={() => {
              navigate(`/detail/${item.id}`);
              // console.log(item.id);
            }}
          >
            <Card item={item}></Card>
          </div>
        );
      })}
      {/* <Cart /> */}
      <Outlet></Outlet>
    </div>
  );
}
