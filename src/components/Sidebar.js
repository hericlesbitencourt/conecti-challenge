import React from 'react'
import Logo from './Logo'

function Sidebar() {
    return (

        <ul className="navbar-nav bg-gray-100 sidebar sidebar-light accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <Logo width="100" height="50" />
            </a>

            <hr className="sidebar-divider my-0" />
            <div className="sidebar-heading">
                MENU
            </div>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-building"></i>
                    <span>Empresas</span></a>
            </li>

            {/* <li className="nav-item">
                <a className="nav-link" href="/add-company">
                    <i className="fas fa-fw fa-plus"></i>
                    <span>Adicionar Empresa</span></a>
            </li> */}
            
            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle">
                </button>
            </div>


        </ul>
    )
}

export default Sidebar
