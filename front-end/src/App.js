import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TableTask from "./Pages/TableTask";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <TableTask />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
