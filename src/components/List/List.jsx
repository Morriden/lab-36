import React from 'react';
import { useList } from '../../Hooks/appContext';

const List = () => {
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
    <ul>
      {listElements}
    </ul>
  );
};

export default List;
