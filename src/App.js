import {useState} from 'react';
import Calendar from 'react-calendar'; 
import BarraLoading from './BarraLoading/BarraLoading.jsx';

import './App.css';

function App() {
 const [date, setDate] = useState(new Date())

return (
<div>
 <div className="app">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
 </div>

<div>
  <BarraLoading/>
</div>

</div>
  )
}

export default App;