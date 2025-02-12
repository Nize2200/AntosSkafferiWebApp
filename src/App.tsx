import GlobalStyle from "./typographi/KapakanaFontStyle.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingPage from "./pages/BookingPage.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import Frontpage from "./pages/Frontpage.tsx";



function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/meny" element={<MenuPage/>}/>
                <Route path="/bokabord" element={<BookingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
