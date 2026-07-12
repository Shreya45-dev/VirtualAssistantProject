import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import authSlice from "./authSlice";


const storage = createWebStorage("local");

const rootReducer = combineReducers({
  auth: authSlice,

});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["socket"], // socket persist mat karo
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      }
    }),
})


export const persistor = persistStore(store);