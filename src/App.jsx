import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/Home';
import { NavigationBar } from './routes/NavigationBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index={true} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
