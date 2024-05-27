import React from "react";

export const TableRow = ({ personDetails }) => {
  return personDetails?.map((personDetails) => {
    return (
      <tr>
        <td></td>
        <td>{personDetails?.Label}</td>
        <td>{personDetails?.Code}</td>
        <td>{personDetails?.Unit?.Label}</td>
        <td>{personDetails?.FlatCost}</td>
        <td>{personDetails?.SellingPrice}</td>
      </tr>
    );
  });
};
