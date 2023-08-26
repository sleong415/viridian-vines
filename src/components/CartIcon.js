import '../styles/CartIcon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function CartIcon({ func, numberDisplay, iconColor, items}) {
    const cartBtnStyles = {
        cursor: func ? 'pointer' : 'default',
        position: 'relative',
    };

    const cartItemClass = func ? 'cart-items' : 'cart-item hidden';
    const numItems = items;

    return (
        <div className='cart-btn' style={cartBtnStyles} onClick={func}>
             <FontAwesomeIcon icon={faShoppingCart}  className='shopping-cart' style={{ color: iconColor }}/>
             { numberDisplay &&
                <div className={cartItemClass}>{numItems}</div>
             }
        </div>
    )
}