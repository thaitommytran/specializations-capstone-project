import "./App.css";
import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";
import LoginPage from './components/LoginPage'

function App() {
  return (
    <div className="App">
      <Header />
      <LoginPage />
      <ContainerCard />
    </div>
  );
}

export default App;
