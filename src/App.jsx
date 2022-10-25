import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Users } from "./routes/Users";
import { About } from "./routes/About";
import { Layout } from "./components/Layout";
import { Login } from "./login/Login";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />


        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
