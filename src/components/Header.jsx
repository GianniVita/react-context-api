import Navbar from "./NavLink";

export default function Header({ cart }) {
    return (
        <>
            <Navbar cart={cart} />
        </>
    );
}