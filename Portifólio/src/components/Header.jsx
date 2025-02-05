import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Alternar a classe "dark" no body para mudar o tema globalmente
        document.body.classList.toggle('dark', !darkMode);
    };

    return (
        <header>
            <h1><a href="https://github.com/Catyz00">@Catyz00</a></h1>
            <nav>
                <ul>
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Projetos">Projetos</a></li>
                    <li><a href="#Habilidades">Habilidades</a></li>
                    <li><a href="#Contatos">Contatos</a></li>
                </ul>
            </nav>
            <button onClick={toggleDarkMode}>
                {/* Usando o componente FontAwesomeIcon com os ícones importados */}
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" />
            </button>
        </header>
    );
};

export default Header;
