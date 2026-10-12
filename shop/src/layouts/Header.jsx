import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="header">
            <Link to='/'>HOME</Link>
            <Link to='/products'>상품목록</Link>
            <Link to='/add-product'>상품 등록</Link>
        </div>
    )
}

export default Header;