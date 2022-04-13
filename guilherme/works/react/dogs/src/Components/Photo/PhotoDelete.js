import React from 'react';
import { PHOTO_DELETE } from '../../api';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  function handleClick() {
    const confirm = window.confirm('Delete confirmation: ');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      // const { response } = await request(url, options);
      const { response } = request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Delete photo
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Delete photo
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
