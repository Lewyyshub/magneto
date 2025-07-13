"use client";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);

  return (
    <OrderContext.Provider
      value={{
        uploadedFiles,
        setUploadedFiles,
        userInfo,
        setUserInfo,
        orderDetails,
        setOrderDetails,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
