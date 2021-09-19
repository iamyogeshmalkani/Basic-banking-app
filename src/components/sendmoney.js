import React, { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Customers from "./Customers";
import TransData from "./Transactionsdata";
function SendMoney({ match }) {
  const [customer, setcustomer] = useState([])
  const [amount, setamount] = useState(0);
  const [srno, setsrno] = useState(8);


  const [items, setitems] = useState([

  ]);

  const [state, setState] = useState({
    suggestions: [],
    text: ''
  });
  useEffect(() => {
    var a = [];
    Customers.forEach(function (obj) {
      a.push(obj.name);
    })
    setitems(a);
    const id = match.params.id;
    const name = Customers.filter((temp) => {
      if (temp.id == id) {
        return temp;
      }
    });
    setcustomer(name[0]);
    console.log(customer);

  }, []);

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(v => regex.test(v));
    }
    setState(() => ({ suggestions, text: value }));
  }

  function suggestionSelected(value) {
    setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  function renderSuggestions() {
    const { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList">
        <ul>
          {suggestions.map((item) => <li onClick={() => suggestionSelected(item)}>{item}</li>)}
        </ul>
      </div>
    );
  }
  function onAmountChanged(e){
    const value = e.target.value;
    if(value>customer.balance){
      alert("you have not enough balance"); 
     
    }
    else{
      setamount(value);
    }
    

  }
  function transaction(){
    if(text=='' ){
      alert("select a user");
     
     

    }
    else{
      var name=text;
        const idx = Customers.findIndex((obj => obj.name == name));
        if(idx>=0){

          console.log(Customers[idx]);
          var newbalance = Customers[idx].balance;
          newbalance=newbalance+parseInt(amount);
          Customers[idx].balance = newbalance ;
          var newbalance = customer.balance;
      newbalance=newbalance-amount;
      const objIndex = Customers.findIndex((obj => obj.id == match.params.id));
     
        console.log(objIndex)
        console.log(Customers[objIndex]);
        Customers[objIndex].balance = newbalance;
        var obj = { sender: "",
        receipent: "",
        amount: "",
        }
        obj.sender = customer.name;
        obj.receipent = text;
        obj.amount = amount;
        obj.srno=srno;
        setsrno(srno+1);
      
        TransData.push(obj);
        console.log(obj);
        window.history.pushState(10,
          "Page 2", "/success");
        }
        
      
    
        
        
      
      
  
  
  
  
      }
      
   

  }


  const { text } = state;
  return (
    <div class="card transaction">
      <div class="card-header">
        Transaction
      </div>
      <div class="card-body sender-details">
        <h5 class="card-title">Senders Details:</h5>
        <p> Name : {customer.name}</p>
        <p> Email : {customer.mail} </p>
        <p> Balance : ₹ {customer.balance} </p>
      </div>
      <div className="receiver-details">
        <h5 class="card-title">Receivers Details:</h5>
        <div className="inputs"> 
          <input value={text} onChange={onTextChanged} type="text" placeHolder="Username" required />
          <input value={amount} onChange={onAmountChanged} type="number" placeHolder="Amount" />
        </div>

        <div className="col-md-12 justify-content-md-center suggestion">
          {renderSuggestions()}
        </div>

      </div>
      <div className="transfer">
        
        <a href="#" class="btn " onClick={transaction} >Transfer Money</a>
        


        
        
      </div>




    </div>


  );
}


export default SendMoney;