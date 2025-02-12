
import NewsFrontPage from "./NewsFrontPage.tsx";
import GlobalStyle from "./Typographi/KapakanaFontStyle.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingPage from "./Pages/BookingPage.tsx";
import MenuPage from "./Pages/MenuPage.tsx";
import Frontpage from "./Pages/Frontpage.tsx";


function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/meny" element={<MenuPage/>}/>
                <Route path="/nyheter" element={<NewsFrontPage/>}/>
                <Route path="/bokabord" element={<BookingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
