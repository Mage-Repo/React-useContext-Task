import useProductContext from "./Context/ProductContext";

export function SubTotal() {
    const { productList, BindProductData } = useProductContext();
    const total = productList.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
    return (
        <div className="subTotal-Container">
            <hr />
            <div>
                <p className="left">SUBTOTAL:</p>
                <p className="right">$ {total}</p>
            </div>
            <div style={{ clear: 'both' }}></div>
            <div>
                <p className="left">SHIPPING:</p>
                <p className="right">FREE</p>
            </div>
            <div style={{ clear: 'both' }}></div>
            <hr />
            <div style={{ clear: 'both' }}></div>
            <div>
                <b><p className="left">Total:</p></b>
                <p className="right">$ {total}</p>
                <div style={{ clear: 'both' }}></div>
                <p className="right" style={{ color: '#e69900' }}>Get Daily Cash With Nespola Card</p>

            </div>
        </div>

    )
}