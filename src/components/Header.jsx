import Button from './UI/Button';
import ImgLogo from "../assets/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
            <img src={ImgLogo} alt="A restaurant" />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
        </header> 
    )
}