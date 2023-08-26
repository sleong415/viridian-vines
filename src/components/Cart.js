import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cart.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartItemContext';

export default function Cart({ isOpen, onCloseCart }) {
    const cartOverlayClass = isOpen ? "cart-overlay toggle" : "cart-overlay";
    const cartContentsClass = isOpen ? "cart-contents show-cart" : "cart-contents";
    const { cartItems, removeFromCart, clearCart, cartTotal, removeOne, addOne } = useCart();
    
    const handleClick = (e) => {
        const button = e.currentTarget;
        const id = button.dataset.id;

        let removeItem = cartItems.find(item => item.id === id);
        removeFromCart(removeItem);
    }

    const handleDecrease = (e) => {
        const button = e.currentTarget;
        const id = button.dataset.id;

        let removeItem = cartItems.find(item => item.id === id);
        removeOne(removeItem);
    }

    const handleIncrease = (e) => {
        const button = e.currentTarget;
        const id = button.dataset.id;

        let addItem = cartItems.find(item => item.id === id);
        addOne(addItem);
    }

    return (
        <div className='cart'>
            <div className={cartOverlayClass}>
                <div className={cartContentsClass}>
                    <div className='cart-close'>
                        <FontAwesomeIcon icon={faCircleXmark} className='x-icon' onClick={onCloseCart}/>
                    </div>
                    <div className='cart-title'>
                        <h2>Your Cart</h2>
                    </div>
                    <div className="cart-content">
                        { cartItems.map(item => (
                            <div className='cart-item' key={item.id}>
                                <div className='img-container'>
                                    <img src={item.image} alt="image of bedroom"></img>
                                </div>
                                <div className='item-content'>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <h5>${item.price}</h5>
                                        <p className="remove-item" data-id={item.id} onClick={handleClick}>remove</p>
                                    </div>
                                    <div className='item-adj'>
                                        <FontAwesomeIcon className='chevron' icon={faChevronUp} data-id={item.id} onClick={handleIncrease}/>
                                        <p className="item-amount">{item.amount}</p>
                                        <FontAwesomeIcon className='chevron' icon={faChevronDown} data-id={item.id} onClick={handleDecrease}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <h3>Your Total: $<span className="cart-total">{cartTotal}</span></h3>
                        <button className="clear-cart button" onClick={clearCart}>clear cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}