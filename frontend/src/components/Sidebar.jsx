import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>

            <br />

            <NavLink to="/create-feature">
                Create Feature
            </NavLink>

            <br />

            <NavLink to="/feature-flags">
                Feature Flags
            </NavLink>
            
            <br />
            
            <NavLink to="/organizations">
                Organizations
            </NavLink>

        </div>
    );
};

export default Sidebar;