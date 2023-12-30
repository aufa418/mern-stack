import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductUpdate from "./component/ProductUpdate";
import ProductCreate from "./component/ProductCreate";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductCreate />} />
            <Route path="/edit/:id" element={<ProductUpdate />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
