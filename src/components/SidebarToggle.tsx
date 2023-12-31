import React from 'react';
import "../styles/sidebar.css";

interface SidebarToggleProps {
    collapsed: boolean;
    onClick: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ collapsed, onClick }) => {
    return (
        <button className="sidebar-toggle" data-tooltip="Toggle Sidebar" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M144.5-233.304q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.37 0-14.498 9.82-24.194 9.821-9.696 24.245-9.696h460q14.424 0 24.245 9.871 9.82 9.871 9.82 24.37 0 14.498-9.82 24.194-9.821 9.696-24.245 9.696h-460Zm0-214.631q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.369 0-14.499 9.82-24.195 9.821-9.695 24.245-9.695h340q14.424 0 24.245 9.871 9.82 9.871 9.82 24.369 0 14.499-9.82 24.195-9.821 9.695-24.245 9.695h-340Zm0-210.63q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.37 0-14.498 9.82-24.314 9.821-9.815 24.245-9.815h460q14.424 0 24.245 9.991 9.82 9.99 9.82 24.489 0 14.498-9.82 24.194-9.821 9.696-24.245 9.696h-460ZM704.805-481l122.13 122.13q10.196 10.196 9.696 23.87-.5 13.674-10.696 23.87-10.435 10.195-24.489 10.195-14.055 0-24.25-10.195l-146-146Q621-467.326 621-481q0-13.674 10.196-23.87l146-146q10.195-10.195 24.25-10.195 14.054 0 24.489 10.195 10.196 10.196 10.196 24.37 0 14.174-10.196 24.37L704.805-481Z" /></svg>
        </button>
    );
};

export default SidebarToggle;
