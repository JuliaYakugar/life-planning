import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducer from '../reducers/TasksSlice';
import financeReducer from '../reducers/FinanceSlice';
import nodesReducer from '../reducers/NodesSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    tasks: tasksReducer,
    finance: financeReducer,
    nodes: nodesReducer,
 });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store); 
