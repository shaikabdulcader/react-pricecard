import './App.css';
import './ProductCard';
import ProductCard from './ProductCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import ProductCard2 from './ProductCard2';
import ProductCard3 from './ProductCard3';
function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-6 col-sm-12 col-xl-4 col-xxl-4 col-md-6">
            <ProductCard/>
          </div>
          <div className="col-sm-4 col-lg-6 col-sm-12 col-xl-4 col-xxl-4 col-md-6">
            <ProductCard2/>
          </div>
          <div className="col-sm-4 col-lg-6 col-sm-12 col-xl-4 col-xxl-4 col-md-6">
            <ProductCard3/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
