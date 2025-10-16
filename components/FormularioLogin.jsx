import React, { useState } from 'react';

export function FormularioLogin({ show, onClose, onLoginSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Si show es false, no renderizar nada
    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Aquí va tu lógica de autenticación
        const userData = {
            username: username,
            password: password,
            timestamp: new Date().toISOString()
        };
        
        // Llamar a la función del padre con los datos
        onLoginSuccess(userData);
        
        // Limpiar el formulario
        setUsername("");
        setPassword("");
    };

    const handleClose = () => {
        // Limpiar el formulario al cerrar
        setUsername("");
        setPassword("");
        onClose();
    };

    return (
        <section>
            <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title justify-content-center">Iniciar sesión</h4>
                            {/* Botón para cerrar */}
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={handleClose}
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        placeholder="Ingresa tu usuario"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input 
                                        type="password" // Cambiado de "text" a "password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Ingresa tu contraseña"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-dark">
                                        Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                onClick={handleClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}