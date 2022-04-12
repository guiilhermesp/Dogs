import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathName } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathName]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && 'My photos'}
        </NavLink>
        <NavLink to="/account/stats">
          <Statistics />
          {mobile && 'Statistics'}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && 'Add photo'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Leave'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
