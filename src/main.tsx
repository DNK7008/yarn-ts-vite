import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './components/GlobalStyles.tsx';
// import { ThemeProvider } from 'styled-components';
// import { MyTheme } from './components/ThemeStyled.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    {/* <ThemeProvider theme={MyTheme}> */}
      <App />
      <GlobalStyles />
    {/* </ThemeProvider> */}
  </StrictMode>,
);
