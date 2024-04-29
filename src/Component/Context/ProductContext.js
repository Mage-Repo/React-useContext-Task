import React, { createContext, useContext, useState } from "react";
export const ProductContext = createContext({
    product: [],
    BindProductData: () => { },
});
export const ProductContextProvider = ProductContext.Provider;
export default function useProductContext() {
    return useContext(ProductContext);
}

