import { configureStore } from '@reduxjs/toolkit';
import contactsReducer  from './contacts/contacts-reducer'
import registerReducer from './auth/register-reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const authPersistCongig = {
    key: 'token',
    storage,
    whitelist: ['token']
};


const store = configureStore({
   reducer: {
       contacts: contactsReducer,
       auth: persistReducer(authPersistCongig, registerReducer),
   } , 
   devTools: process.env.NODE_ENV ==='development'
});
    
const persistor= persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};
