import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import './App.css';

import TasksPage from './components/TasksPage/TasksPage';
import FinancePage from './components/FinancePage/FinancePage'
import NotesPage from './components/NotesPage/NotesPage';

function App() {
    
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>

                    <header className='container'>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active">Задачи</NavLink>
                            </li>
                            <li>
                                <NavLink to="/finance" activeClassName="active">Финансы</NavLink>
                            </li>
                            <li>
                                <NavLink to="/notes" activeClassName="active">Заметки</NavLink>
                            </li>
                        </ul>
                    </header>

                    <Routes >
                        <Route path="/" element={<TasksPage />} />
                        <Route path="/finance" element={<FinancePage />} />
                        <Route path="/notes" element={<NotesPage />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                    
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
