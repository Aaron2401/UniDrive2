import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { HiMiniHome } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useUser } from "./../UserContext"; // Importa el hook para acceder al contexto

const Dashboard: React.FC = () => {
  const { user } = useUser(); // Usamos el contexto para obtener el nombre del usuario
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    console.log("Sesión cerrada");
    setShowConfirm(false);
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <img
            src="/Images/Foto-dashboard.jpeg"
            alt="Perfil"
            className="profile-img"
          />
          <h2 className="profile-name">{user.name}</h2> {/* Mostramos el nombre desde el contexto */}
          <Link to="/profile">
            <button className="profile-button">Mi Perfil</button>
          </Link>
        </div>

        {/* Navegación */}
        <nav className="nav">
          <Link to="/" className="nav-link flex items-baseline gap-3">
            <HiMiniHome className="text-base me-2" size={20} />
            <span className="leading-none">Inicio</span>
          </Link>

          <Link to="/crear-ride" className="nav-link flex items-baseline gap-3">
            <FaCarSide className="text-base me-2" size={20} />
            <span className="leading-none">Crear viaje</span>
          </Link>

          <Link to="/historial-viajes" className="nav-link flex gap-3">
            <MdWorkHistory className="text-base flex-shrink-0" size={20} />
            <span className="leading-none">Historial de viajes</span>
          </Link>
        </nav>

        <div className="logout-section">
          <button className="logout-button" onClick={handleLogoutClick}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="main-header">
          <h1>Hola de nuevo, {user.name}!</h1> {/* También aquí usamos el nombre del contexto */}
        </header>
        <section className="dashboard-section">
          <h2 className="section-title">¿A dónde vamos hoy?</h2>
          <div className="projects">
            <div className="project-card">
              <h3>Universidad</h3>
            </div>
            <div className="project-card">
              <h3>Casa</h3>
            </div>
          </div>
        </section>
      </main>

      {showConfirm && (
        <div className="logout-confirmation-overlay">
          <div className="logout-confirmation">
            <p>¿Estás seguro que quieres cerrar sesión?</p>
            <Link to="/login">
              <button className="confirm-button" onClick={confirmLogout}>
                Aceptar
              </button>
            </Link>
            <button className="cancel-button" onClick={cancelLogout}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
