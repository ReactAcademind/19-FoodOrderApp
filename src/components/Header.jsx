import ImgLogo from "../assets/logo.jpg";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
            <img src={ImgLogo} alt="A restaurant" />
            <h1>REACTFOOD</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
        </header> 
    )
}