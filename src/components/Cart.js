import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cart.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartItemContext';

export default function Cart({ isOpen, onCloseCart }) {
    const cartOverlayClass = isOpen ? "cart-overlay toggle" : "cart-overlay";
    const cartContentsClass = isOpen ? "cart-contents show-cart" : "cart-contents";
    const { cartItems, removeFromCart } = useCart();

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
                                <img src={item.image} alt="image of bedroom"></img>
                                <div>
                                    <h4>{item.title}</h4>
                                    <h5>${item.price}</h5>
                                    <span className="remove-item" data-id={item.id}>remove</span>
                                </div>
                                <div>
                                    {/* <i class="fas fa-chevron-up" data-id={item.id}></i> */}
                                    <p className="item-amount">{item.amount}</p>
                                    {/* <i class="fas fa-chevron-down" data-id={item.id}></i> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <h3>Your Total: $<span className="cart-total">0</span></h3>
                        <button className="clear-cart button">clear cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}