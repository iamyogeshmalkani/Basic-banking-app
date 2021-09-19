import React from 'react'
import TransData from './Transactionsdata'
import { useState , useEffect} from 'react';
import TableT from './TableT';



export default function Transactions() {
  var srn0=1;
    const [Transactions, setTransactions] = useState([]);
    useEffect(() => {
       setTransactions(TransData);
    }, [])
   
    return (
        <div className="transaction-data">
        <h1>Transactions</h1>
      <table class="table  table-striped table-hover table-bordered border-dark transactionTable">
       <thead class="table-dark">
  <tr>
    <th scope="col">#</th>
    <th scope="col">Sender</th>
    <th scope="col">Recipent</th>
    <th scope="col">Amount</th>
  </tr>
</thead>
<tbody>
  
{Transactions.map((Transaction) =>
      <TableT sr={srn0++}  Transaction={Transaction} ></TableT>
    )}
     </tbody>

    </table>
</div>
       
      
    )
}
