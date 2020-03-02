import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';

const List = () => {
      const { list } = useContext(ListContext)

      return (
            <div className="list">
                  <h1>List</h1>
                  <ul>
                        {list.map(item => {
                              return (
                                    <li className= "list_item" key={item.id} >{item.name}</li>
                              )
                        })}
                  </ul>
            </div>
      );
} 

export default List;