import { useEffect, useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { FiMoon, FiSun } from 'react-icons/fi';

function App() {
    const [theme, setTheme] = useState('dark');

    function handleTheme() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? '' : 'dark';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('dark');
        }
    }, []);

    return (
        <>
            <div className={`bg-(--background) ${theme}`}>
                <div className="absolute right-4 top-4 ">
                    <button
                        onClick={handleTheme}
                        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-(--toogle-bg) text-(--toogle-color) shadow-md hover:scale-105 transition-transform cursor-pointer"
                        aria-label="Alternar tema"
                    >
                        {theme === 'dark' ? (
                            <FiSun size={20} />
                        ) : (
                            <FiMoon size={20} />
                        )}
                    </button>
                </div>
                <Hero />
                <AboutMe />
                <Projects />
                <ContactMe />
                <Footer />
            </div>
        </>
    );
}

export default App;
