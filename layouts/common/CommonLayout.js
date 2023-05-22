import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import Notification from "./Notification";

export default function CommonLayout({ children }) {
    return (
        <>
            <Header />
            {/* <Cart /> */}
            { children }
            {/* <Notification /> */}
            <Footer />
        </>
    )
}