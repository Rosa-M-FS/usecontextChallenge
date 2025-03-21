import './App.css'; // Archivo de estilos CSS
import RouterApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <RouterApp/>
    </ThemeProvider>
  );
};

export default App;
