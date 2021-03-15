import { configureStore } from '@reduxjs/toolkit';
import contactsReducer  from './contacts/contacts-reducer'
import registerReducer from './auth/register-reducer'

const store = configureStore({
   reducer: {
       contacts: contactsReducer,
       auth: registerReducer,
   } , 
   devTools: process.env.NODE_ENV ==='development'
});
    


// eslint-disable-next-line import/no-anonymous-default-export
export default {store};
