import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";

// BPMCO_PORTAL
// BPMCOInicio12345678.

export function Login() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  
 const conexion = async () => {
   const url =
   `https://valoremanalitica.bpmco.co/login?user=${user}&pass=${pass}`;
   const result = await axios.get(url)
   const response = JSON.parse(result.data.slice(1, -1));

   if (response.hasOwnProperty("ID_ESTADO")) {
    setLogin(true);
    console.log("OK");
    <Redirect />
   } else {
    setLogin(false);
    console.log("NO");
    redirect("/");
   }

 };

  return (
    <div>
      <input type="text" placeholder="Usuario" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={() => {
        conexion();
      }}>Login</button>
    </div>
  )
}
