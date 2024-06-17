import { createContext } from 'react';
import { AppStates } from './AppStates';
import { HomeStates } from './HomeStates';
import { AuthStates } from './AuthStates';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    let states = {
        app_state: AppStates(),
        home_state: HomeStates(),
        auth_state: AuthStates()
    }

    return (
        <AppContext.Provider value={{...states}}>
            {children}
        </AppContext.Provider>
    )
}