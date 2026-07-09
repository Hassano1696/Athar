import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import CashBox from "./pages/CashBox";
import More from "./pages/More";

import BottomNav from "./components/BottomNav";

export default function App() {

  const [page,setPage]=useState("home");

  return(
    <>

      {page==="home"&&<Dashboard/>}
      {page==="sales"&&<Sales/>}
      {page==="inventory"&&<Inventory/>}
      {page==="cash"&&<CashBox/>}
      {page==="more"&&<More/>}

      <BottomNav page={page} setPage={setPage}/>

    </>
  )

}
