import './App.css';
import Navbar from './componenets/navbar/Navbar';
import Body from './componenets/body/Body';

function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* Main content */}
      <Body />
    </div>
  );
}

export default App;