import { MenuIcon } from "lucide-react";
import CartWidget from "./CartWidget";

/* rfce */
function NavBar() {
  return (
    <header className="flex justify-between p-5 bg-emerald-800 text-slate-50">
        <nav className="flex items-center gap-4">
            <div className="items-center hidden md:flex md:gap-4">
                <a href="#">Menú de la semana</a>
                <a href="#">Cómo funciona</a>
                <a href="#">Quienes somos</a>
            </div>
            <MenuIcon className="w-6 h-6 md:hidden" />
        </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;