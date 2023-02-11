import './cartWidget.css';
import cart from '../../../img/cart.png';

const CartWidget = () => {

    return <li className='cart_item'>
        <img src={cart} className='cartImg'/>
        <div className='number'>2</div>
    </li>
};

export default CartWidget;