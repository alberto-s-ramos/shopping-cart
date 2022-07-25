import {useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id);
    if(item == null) return null

    return (
        <Stack
            direction='horizontal'
            gap={2}
            className='d-flex align-items-center'
        >
            <img
                src={item.imgUrl}
                alt="Product Image"
                style={{width: '125px', height:'75px', objectFit: 'cover', borderRadius: '8px'}}/>
            <div className='me-auto'>
                <p>
                    {item.name}
                    {
                        quantity > 1 ?
                            <span
                                className='text-muted m-1'
                                style={{fontSize: '.8rem'}}
                            >x{quantity}</span>
                            : null

                    }
                </p>
                <p className='text-muted'>
                    {formatCurrency(item.price)}
                </p>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center' >
                {formatCurrency(item.price * quantity)}
                <Button
                    variant='danger'
                    size='sm'
                    className='m-1'
                    onClick={()=> removeFromCart(id)}
                >x</Button>
            </div>
        </Stack>
    )
}