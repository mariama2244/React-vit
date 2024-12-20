import{ NavLink } from "react-router";
export default function Navbar() {
    return (
        <nav
        >
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <NavLink to="/">Navbar</NavLink>
            <div className="flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        </nav>
      );
}