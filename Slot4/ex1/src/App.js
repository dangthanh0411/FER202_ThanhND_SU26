import MyNavbar from "./component/MyNavbar"; 
import Footer from "./component/Footer"; 
import PizzaList from "./component/PizzaList"; 
import MyCarousel from "./component/MyCarousel"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fdfbf7' }}>
      
      <MyNavbar />

      <div className="flex-grow-1">
        <div className="text-center mt-5 mb-5">
            <h1 
                className="fw-bold text-uppercase" 
                style={{ 
                    color: '#BF360C', 
                    letterSpacing: '2px', 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)' 
                }}
            >
                Welcome to My Pizza App
            </h1>
            <div 
                style={{ 
                    height: '4px', 
                    width: '60px', 
                    backgroundColor: '#FFB300', 
                    margin: '10px auto', 
                    borderRadius: '2px' 
                }}
            ></div>
            <p className="text-muted mt-3" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                Taste the magic in every slice!
            </p>
        </div>

        <MyCarousel />
        <PizzaList />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;