import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    let name = '';
    switch (pathname) {
      case '/conta/postar':
        name = 'Post a photo';
        break;
      case '/conta/estatisticas':
        name = 'Statistics';
        break;
      default:
        name = 'My account';
        break;
    }
    setTitle(name);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
