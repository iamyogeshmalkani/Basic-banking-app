
  import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Customers from "./Customers";
import TransData from "./Transactionsdata"; 

function SendMoney() {
  const { id } = useParams();  

  const [customer, setCustomer] = useState({});
  const [amount, setAmount] = useState(0);
  const [srno, setSrno] = useState(8);
  const [items, setItems] = useState([]);
  const [state, setState] = useState({
    suggestions: [],
    text: ''
  });

  useEffect(() => {
    const customerNames = Customers.map((obj) => obj.name);
    setItems(customerNames);

    const name = Customers.find((temp) => temp.id === parseInt(id));  // Find customer by id
    if (name) setCustomer(name);
    console.log(name);
  }, [id]);

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    setState({ suggestions, text: value });
  };

  const suggestionSelected = (value) => {
    setState({ text: value, suggestions: [] });
  };

  const renderSuggestions = () => {
    const { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList">
        <ul>
          {suggestions.map((item) => (
            <li key={item} onClick={() => suggestionSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const onAmountChanged = (e) => {
    const value = parseInt(e.target.value);
    if (value > customer.balance) {
      alert("You do not have enough balance.");
    } else {
      setAmount(value);
    }
  };

  const transaction = () => {
    const { text } = state;
    if (text === "") {
      alert("Select a user");
    } else {
      const idx = Customers.findIndex((obj) => obj.name === text);
      if (idx >= 0) {
        console.log(Customers[idx]);

        let newReceiverBalance = Customers[idx].balance + amount;
        Customers[idx].balance = newReceiverBalance;

        let newSenderBalance = customer.balance - amount;
        const senderIdx = Customers.findIndex((obj) => obj.id === parseInt(id));
        Customers[senderIdx].balance = newSenderBalance;

        const transactionObj = {
          sender: customer.name,
          receipent: text,
          amount: amount,
          srno: srno
        };

        setSrno(srno + 1);
        TransData.push(transactionObj);
        console.log(transactionObj);
        window.history.pushState(10, "Page 2", "/success");
      }
    }
  };

  const { text } = state;
  return (
    <div className="card transaction">
      <div className="card-header">Transaction</div>
      <div className="card-body sender-details">
        <h5 className="card-title">Sender's Details:</h5>
        <p>Name: {customer.name}</p>
        <p>Email: {customer.mail}</p>
        <p>Balance: ₹ {customer.balance}</p>
      </div>
      <div className="receiver-details">
        <h5 className="card-title">Receiver's Details:</h5>
        <div className="inputs">
          <input
            value={text}
            onChange={onTextChanged}
            type="text"
            placeholder="Username"
            required
          />
          <input
            value={amount}
            onChange={onAmountChanged}
            type="number"
            placeholder="Amount"
          />
        </div>

        <div className="col-md-12 justify-content-md-center suggestion">
          {renderSuggestions()}
        </div>
      </div>
      <div className="transfer">
        <a href="#" className="btn" onClick={transaction}>
          Transfer Money
        </a>
      </div>
    </div>
  );
}
  
export default SendMoney;


  