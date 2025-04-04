import './App.css';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='app-content'>
                <Sidebar />
                <main className='main-content'>
                    {/* Основное содержимое страницы будет здесь */}
                </main>
            </div>
        </div>
    );
}

export default App;
