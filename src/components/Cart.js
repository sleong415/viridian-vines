import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Cart.css';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Cart({ isOpen, onCloseCart }) {
    const cartOverlayClass = isOpen ? "cart-overlay toggle" : "cart-overlay";
    const cartContentsClass = isOpen ? "cart-contents show-cart" : "cart-contents";

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
                        {/* <!-- cart item --> */}
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