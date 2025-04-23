import './App.css';

import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/mainPage';
import VeganCuisinePage from '../pages/veganCuisinePage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/veganCuisinePage' element={<VeganCuisinePage />} />
            <Route path='*' element={<HomePage />} />
        </Routes>
    );
}

export default App;
