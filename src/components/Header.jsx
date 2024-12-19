import { useContext } from 'react';

import Button from './UI/Button';
import ImgLogo from "../assets/logo.jpg";
import CartContext from '../store/CartContext';

export default function Header() {
    const CartCtx = useContext(CartContext);

    const totalCartItems = CartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
            <img src={ImgLogo} alt="A restaurant" />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
        </header> 
    )
}