import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <div style={{display: 'flex', flexDirection:'row',rowGap:'10px'}}>
      <Dashboard/>
     <Sidebar/>
     
    
 
    </div>
  );
}

export default App;
