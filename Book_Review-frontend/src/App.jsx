import "./App.css";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import LoginModel from "./components/LoginModel";
import Routes from "./pages/Routers";
import GlobalDataProvider from "./context/ContextApi";

function App() {
  return (
    <>
      <GlobalDataProvider>
        <Routes />
      </GlobalDataProvider>
    </>
  );
}

export default App;
