// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";
// import {
//   LuBanknote,
//   LuCalendar,
//   LuChevronDown,
//   LuEye,
//   LuWallet,
// } from "react-icons/lu";
// import OngoingOrderCalendar from "./OngoingOrderCalendar";
// import { BreadcrumbAdmin, OrderDataTable } from "@/components";
// import { getDishById, getOrderById } from "@/helpers";
// import { toSentenceCase } from "@/utils";
// import OrderStatistics from "./OrderStatistics";
import { orderHistoryData, dishesData } from "@/assets/data";
// import { currentCurrency } from "@/common";

export const orderRows = orderHistoryData.map((order) => {
  return {
    ...order,
    dish: dishesData.find((dish) => dish.id == order.dish_id),
  };
});
