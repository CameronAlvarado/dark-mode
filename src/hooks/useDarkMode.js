import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

function useDarkMode(initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {

        return (darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'));
    }, [darkMode]);
    return [darkMode, setDarkMode];
}

export default useDarkMode;