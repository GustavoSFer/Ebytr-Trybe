import React from 'react';

function Table({ item }) {
  return (
    <tr>
      <td>{ item.task }</td>
      <td>{ item.status }</td>
      <td>{ item.date }</td>
      <td>{ item.lixo }</td>
    </tr>
  );
}

export default Table;
