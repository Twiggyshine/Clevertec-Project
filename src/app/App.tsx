// import './App.css';

// import { Route, Routes } from 'react-router';

// import MainLayout from '../features/shared/layouts/pageComponents/mainLayout';
// import HomePage from '../pages/mainPage';
// import TheJuciestPage from '../pages/theJuciestPage';
// import VeganCuisinePage from '../pages/veganCuisinePage';

// function App() {
//     return (
//         <MainLayout>
//             <Routes>
//                 <Route path='/theJuciestPage' element={<TheJuciestPage />} />
//                 <Route path='/vegan-cuisine' element={<VeganCuisinePage />} />
//                 <Route path='/vegan-cuisine/:subcategory' element={<VeganCuisinePage />} />
//                 <Route path='/:category/:subcategory' element={<HomePage />} />
//                 <Route path='*' element={<HomePage />} />
//             </Routes>
//         </MainLayout>
//     );
// }

// export default App;

import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

import recipesData from '../data/veganData.json';
import MainLayout from '../features/shared/layouts/pageComponents/mainLayout';
import HomePage from '../pages/mainPage';
import RecipePage from '../pages/recipePage';
import TheJuciestPage from '../pages/theJuciestPage';
import VeganCuisinePage from '../pages/veganCuisinePage';
import { setRecipes } from '../store/app-slice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRecipes(recipesData));
    }, [dispatch]);

    return (
        <MainLayout>
            <Routes>
                <Route path='/theJuciestPage' element={<TheJuciestPage />} />
                <Route path='/vegan-cuisine' element={<VeganCuisinePage />} />
                <Route path='/vegan-cuisine/:subcategory' element={<VeganCuisinePage />} />
                <Route path='/:category/:subcategory' element={<HomePage />} />
                <Route path='/recipe/:id' element={<RecipePage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
