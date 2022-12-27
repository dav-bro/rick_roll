import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main.tsx";
import Test from "./Test.tsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />} />

                <Route path="test" element={<Test />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;
