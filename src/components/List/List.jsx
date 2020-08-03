import React from 'react';
import { useList, useTheme } from '../../Hooks/appContext';
import styles from './List.css';

const List = () => {
  const theme = useTheme();
  const lists = useList();
  const listElements = lists.map(list => (
    <li key={list.id}>
      <div>
        {list.name}
      </div>
      <img src={list.image} />
    </li>
  ));
  return (
    <div className={styles[`List-${theme}`]}>
      <ul>
        {listElements}
      </ul>
    </div>
  );
};

export default List;
