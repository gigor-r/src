import React, { useState } from 'react';
import FormularioLogin from './FormularioLogin';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);

    const loginSuccess = (userData) => {
        console.log('Usuario autenticado:', userData);
        setShowLogin(false);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    return (
        <header className="bg-dark text-white p-3">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img src="public/img/pokeballIcon.png" width={50} alt="PokeballLogo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Pokeballs.html">Pokeballs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Medicina</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Donar</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ms-auto">
                            <nav className="navbar navbar-light bg-dark fixed-left-end">
                                <form className="container-fluid justify-content-start">
                                    <button 
                                        className="btn btn-outline-secondary me-2" 
                                        type="button"
                                        onClick={() => setShowLogin(true)}
                                    >
                                        Iniciar Sesión
                                    </button>
                                </form>
                            </nav>
                        </ul>
                    </div>
                </div>
            </nav>

            <FormularioLogin 
                show={showLogin}
                onClose={closeLogin}
                onLoginSuccess={loginSuccess}
            />

        </header>
    )
}