import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Transactions from './Transactions'
import Layout from './Layout'
import Home from './Home'
import { Balance } from './Balance'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="balance" element={<Balance />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}