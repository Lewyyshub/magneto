// "use client";
// import { createContext, useContext, useState } from "react";

// const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [userInfo, setUserInfo] = useState({});
//   const [orderDetails, setOrderDetails] = useState(null);

//   return (
//     <OrderContext.Provider
//       value={{
//         uploadedFiles,
//         setUploadedFiles,
//         userInfo,
//         setUserInfo,
//         orderDetails,
//         setOrderDetails,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export const useOrder = () => useContext(OrderContext);
"use client";
import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orderDetails, setOrderDetails] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <OrderContext.Provider
      value={{
        orderDetails,
        setOrderDetails,
        userInfo,
        setUserInfo,
        uploadedFiles,
        setUploadedFiles,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder უნდა იყოს გამოყენებული OrderProvider-ის შიგნით");
  }
  return context;
}
