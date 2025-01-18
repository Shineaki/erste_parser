import { DataTable } from './payments/data-table'
import { columns, Payment } from './payments/columns'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Transactions() {
    const [abc, setAbc] = useState<Payment[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8000/").then((res) => {
            console.log(res);
            setAbc(res.data);
        })
    }, []);

    console.log(abc);

    return (
        <div className="flex items-center justify-center pb-5">
            <DataTable columns={columns} data={abc} />
        </div>
    )
};