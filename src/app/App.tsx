import './App.css';

import { Route, Routes } from 'react-router';

import MainLayout from '../components/pageComponents/mainLayout';
import HomePage from '../pages/mainPage';
import TheJuciestPage from '../pages/theJuciestPage';
import VeganCuisinePage from '../pages/veganCuisinePage';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/veganCuisinePage' element={<VeganCuisinePage />} />
                <Route path='/theJuciestPage' element={<TheJuciestPage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
