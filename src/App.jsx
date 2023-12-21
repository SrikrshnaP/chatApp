import Login from "./pages/login";
import Chatroom from "./pages/chatroom";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoute> <Chatroom /> </PrivateRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App