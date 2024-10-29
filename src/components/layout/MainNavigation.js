// MainNavigation.js
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../../store/FavoriteContext";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const { favoriteMeetups } = useFavorites();
  const favoritesCount = favoriteMeetups.length;

  const [isVisible, setIsVisible] = useState(true); // Estado de visibilidad del header
  const [lastScrollY, setLastScrollY] = useState(window.scrollY); // Posición del scroll anterior

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Oculta el header al hacer scroll hacia abajo
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Muestra el header al hacer scroll hacia arriba
      }

      setLastScrollY(currentScrollY); // Actualiza la última posición del scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${classes.header} ${isVisible ? classes.visible : classes.hidden}`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
