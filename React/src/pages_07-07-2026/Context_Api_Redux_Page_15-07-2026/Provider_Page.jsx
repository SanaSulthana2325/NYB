import React from 'react'
import Context_Redux_Page from './Context_Redux_Page'
import ThemeProvider from '../../components_07-07-2026/Context_API_Redux_15-07-2026/Context_API/ThemeContext'
import AuthProvider from '../../components_07-07-2026/Context_API_Redux_15-07-2026/Context_API/AuthContext'
import { Provider } from 'react-redux';
import {store} from "../../components_07-07-2026/Context_API_Redux_15-07-2026/Redux/store";

function Provider_Page() {
  return (
    <>
    <Provider store={store}>

<ThemeProvider>

<AuthProvider>

<Context_Redux_Page/>

</AuthProvider>

</ThemeProvider>

</Provider>

    </>
  )
}

export default Provider_Page;