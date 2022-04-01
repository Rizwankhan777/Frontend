import logo from './logo.svg';
import './App.css';
import ProductSlider from './productSlider';
import NavSlider from './navSlider';
import CreditCard from './creditCard';
import NavBar from './navBar';

function App() {
  return (
   <section>
     <NavBar/>
     <CreditCard/>      
     <NavSlider/>
     <ProductSlider/>
   
   </section>
  );
}

export default App;
