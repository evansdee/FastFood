import { Link } from "react-router-dom";
import SeatchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
    return ( 
        <header className="flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 sm:px-6">
        <Link to={'/'} className="tracking-widest">Fast React Pizza co.</Link>
        <SeatchOrder/>
        <Username/>
        </header>
     );
}

export default Header;