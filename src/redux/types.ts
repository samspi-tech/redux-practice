import store from '../redux/store';

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = ReturnType<AppStore['dispatch']>;
