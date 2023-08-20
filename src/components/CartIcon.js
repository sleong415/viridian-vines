import '../styles/CartIcon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartIcon({ func, numberDisplay, iconColor }) {
    const cartBtnStyles = {
        cursor: func ? 'pointer' : 'default',
        position: 'relative',
    };

    const cartItemClass = func ? 'cart-items' : 'cart-item hidden';

    return (
        <div className='cart-btn' style={cartBtnStyles} onClick={func}>
             <FontAwesomeIcon icon={faShoppingCart}  className='shopping-cart' style={{ color: iconColor }}/>
             { numberDisplay &&
                <div className={cartItemClass}>0</div>
             }
        </div>
    )
}