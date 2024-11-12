import logo from './logo.svg';
import './App.css';
import image from './logo.jpeg'

function App() {
  return (
    <a href="https://dev.dnjp9ghpt4woh.amplifyapp.com/" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        marginTop: "0",
        cursor: "pointer"
      }}>
        <img src={image} height="150" width="190" />
      </div>
    </a>



  );
}

export default App;
