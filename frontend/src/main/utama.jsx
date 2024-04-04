import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./loginregister/login";
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

const Utama = () => (
    <Routes>
        <Route exact path="/login" element={<Login/>}/>
    </Routes>
)

export default Utama;