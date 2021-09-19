
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Transactions from './components/transactions';
import ViewCustomer from './components/viewcustomer';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Footer from './components/footer';
import Customerdetails from './components/Customerdetails';
import SendMoney from './components/sendmoney';
import Success from './components/success';


function App() {
const srno=8;
  
  return (
    <Router>
  <div className="App">
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/customers" exact component={ViewCustomer} />
      <Route path="/transactions" component={Transactions}/>
      <Route path="/customers/:id" exact component={Customerdetails} />
      <Route path="/customers/:id/send" component={SendMoney} />
      <Route path="/success" component={Success} />
     </Switch>
     <Footer />

    </div>
    </Router>
   
  );
 
}

export default App;
