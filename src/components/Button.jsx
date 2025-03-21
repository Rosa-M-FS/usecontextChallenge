import { useTheme } from "../themes/ThemeContext";

const Button = ()=>{
    const {theme,toggleTheme} = useTheme();
    return(
        <button onClick={toggleTheme} className={theme}>Cambiar Tema</button>
    );
}

export default Button;