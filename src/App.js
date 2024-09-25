
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Transactions from './components/transactions';
import ViewCustomer from './components/viewcustomer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Customerdetails from './components/Customerdetails';
import SendMoney from './components/sendmoney';
import Success from './components/success';


function App() {

  
  return (
    <Router>
  <div className="App">
     <Navbar />
     <Routes>
       <Route path="/Basic-banking-app" element={<Home/>} />
       <Route path="/Customers" element={<ViewCustomer/>} />
      <Route path="/transactions" element={<Transactions/>}/>
      <Route path="/customers/:id" element={<Customerdetails/>} />
      <Route path="customers/:id/send" element={<SendMoney/>} />
      <Route path="/success" element={<Success/>} />
     </Routes>
     <Footer />

    </div>
    </Router>
   
  );
 
}

export default App;
