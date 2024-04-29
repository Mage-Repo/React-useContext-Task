import useProductContext from "./Context/ProductContext";
import { Product } from "./Product";
import { SubTotal } from "./SubTotal";

export function AddToCartList() {
    const { productList, BindProductData } = useProductContext();
    return (
        <div>
            {productList.map((pd, index) => (
                <Product key={index} product={pd} />
            ))}
            <SubTotal />
        </div>
    );
}