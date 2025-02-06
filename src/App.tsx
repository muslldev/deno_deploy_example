import { Routes, Route, HashRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AdminPage from "./pages/admin/AdminPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
