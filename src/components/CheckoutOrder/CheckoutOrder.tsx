import { stat } from "fs";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./CheckoutOrder.css";
import ModalPage from "./ModalPage/ModalPage";

const CheckoutOrder = () => {
  const navigate = useNavigate();
  const { orderItem, orderPrice, orderCurrency } =
    useTypedSelector((state) => state.order);
  const {
    decreaseOrderItemAction,
    increaseOrderItemAction,
    removeFromOrderAction,
    fetchOrder,
    clearOrderAction,
  } = useActions();

  const orderItemCount: any = {};
  orderItem.forEach((item) => {
    orderItemCount[item.id] = (orderItemCount[item.id] || 0) + 1;
  });

  const uniqueOrderItem = orderItem.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  const clearOrder = () => {
    orderItem.length > 0 ? clearOrderAction() : alert("Заказ и так пустой");
  };

  const chekoutOrder = () => {
    orderItem.length > 0
      ? fetchOrder(orderItem)
      : alert("Не выбрано ни одной позиции");
  };

  return (
    <div className="orderPage">
      <div className="orderContainer">
        <div className="orderMenu">
          <div>
            <h3>
              <img
                src="https://img.icons8.com/ios/512/circled-left-2.png"
                className="navigationButton"
                onClick={() => navigate(-1)}
                style={{
                  marginRight: "10px",
                  width: "25px",
                }}
              />
              Корзина / {orderItem.length} &nbsp;
              <img
                onClick={() => clearOrder()}
                className="clearOrderButton"
                src="https://img.icons8.com/ios/512/cancel.png"
                width={"25px"}
              />
            </h3>
            <h4>
              {" "}
              Сумма: {orderPrice} {orderCurrency}{" "}
            </h4>
          </div>
          <div className="orderCheckOrClearContainer"></div>
        </div>
        <div className="orderList">
          <h3> Вы выбрали:</h3>
          <div className="orderItemContainer">
            {uniqueOrderItem.map((item) => (
              <div className="orderElement" key={item.id}>
                <img src={item.image} width={"50px"} />
                <div className="orderInform">
                  <p>
                    {item.title} ({orderItemCount[item.id]} шт.){" "}
                  </p>
                  <button
                    onClick={() => decreaseOrderItemAction(item)}
                    className="deleteItemButton"
                  />
                  <button
                    onClick={() => increaseOrderItemAction(item)}
                    className="addOneItemButton"
                  />
                </div>

                <button
                  onClick={() => removeFromOrderAction(item.id)}
                  className="clearItemButton"
                />
              </div>
            ))}
          </div>
          <div className="checkoutElement">
            <button
              onClick={() => chekoutOrder()}
              style={{ display: orderItem.length > 0 ? "block" : "none" }}
              className="checkoutOrderButton"
            >
              {/* <img
                src="https://img.icons8.com/ios/512/checkout.png"
                width={"25px"}
              />{" "} */}
            </button>
          </div>
        </div>
      </div>
      <ModalPage />
    </div>
  );
};

export default CheckoutOrder;
