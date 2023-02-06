import './App.css';
import qrImg from './image-qr-code.png';

function App() {

  const heading = "Improve your front-end skills by building projects"
  const paragraph = "Scan the QR code to visit Frontend Mentor and take yoyr coding skills to the next level"

  return (
    <div className="App">
      <div className="card">
        <div>
          <img className="img" src={qrImg}/>
        </div>
          <div className="text-wapper">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
