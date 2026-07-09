export default function BottomNav({page,setPage}){

return(

<div className="bottomNav">

<button
className={page==="home"?"active":""}
onClick={()=>setPage("home")}
>
🏠
</button>

<button
className={page==="sales"?"active":""}
onClick={()=>setPage("sales")}
>
💰
</button>

<button
className={page==="inventory"?"active":""}
onClick={()=>setPage("inventory")}
>
📦
</button>

<button
className={page==="cash"?"active":""}
onClick={()=>setPage("cash")}
>
💵
</button>

<button
className={page==="more"?"active":""}
onClick={()=>setPage("more")}
>
☰
</button>

</div>

)

}
