import './App.css'
import { DataTable } from './payments/data-table'
import { columns, Payment } from './payments/columns'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [abc, setAbc] = useState<Payment[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => {
      console.log(res);
      setAbc(res.data);
    }
    )

  }, []);

  console.log(abc);
  if (abc) {
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={abc} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}