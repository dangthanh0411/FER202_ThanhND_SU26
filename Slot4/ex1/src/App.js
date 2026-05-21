import Footer from "./component/Footer"; 
import PizzaList from "./component/PizzaList"; // Import PizzaList
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1 className="text-center mt-4">Welcome to My Pizza App</h1>
      
      {/* Gọi component danh sách ra đây */}
      <PizzaList /> 

      <Footer />
    </>
  );
}

export default App;