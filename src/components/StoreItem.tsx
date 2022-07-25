import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return <Card>
        <Card.Img
            variant="top"
            src={imgUrl}
            height="250px"
            style={{objectFit: "cover"}}/>
        <Card.Body
            className="d-flex flex-column"
        >
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>

            { quantity === 0 ?
                (
                    <div className="d-flex justify-content-center align-items-center">

                        <Button
                            className="w-100"
                            onClick={() => increaseCartQuantity(id)}
                        >+ Add to Cart</Button>

                    </div>
                ) :
                (
                    <>
                        <div
                            className="d-flex justify-content-center align-items-center mb-2"
                            style={{ gap:"0.5rem" }}>

                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>
                                <span className="fs-3">{quantity}</span> in cart
                            </p>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>

                        </div>
                        <div className="d-flex justify-content-center align-items-center">

                            <Button
                                variant="danger"
                                onClick={() => removeFromCart(id)}
                            >Remove</Button>

                        </div>
                    </>
                )}

        </Card.Body>
    </Card>
}