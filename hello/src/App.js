import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './container/Home/Home';
import Product from './container/pages/Product/Product';
import BlogPost from "./container/pages/BlogPost/BlogPost";
import LifeCycleComp from './container/pages/LifeCycleComp/LifeCycleComp'
import YoutubePage from "./container/pages/YoutubePage";

export default function App() {
    return (
        <Router>  
        <div>
          <nav>
            <ul className="navbar">
              <div className="nav">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/blogpost">Blog Post</Link>
                </li>
                <li>
                  <Link to="/youtube">Youtube</Link>
                </li>
                <li>
                  <Link to="/lifecycle">LifeCycleComp </Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
              </div>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blogpost" element={<BlogPost />} />
            <Route path="/youtube" element={<YoutubePage />} />
            <Route path="/lifecycle" element={<LifeCycleComp />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    )
  
}
