import React from "react";
import { info } from "../data/info.js";
import { TableSection } from "./TableSection.jsx";
import { batix } from "../data/ouvrage.js";
export const Table = () => {
  return (
    <table>
      <thead>
        <td></td>
        <th>Label</th>
        <th>Code</th>
        <th>Unite</th>
        <th>Code</th>
        <th>Code</th>
      </thead>
      {batix.Ouvrages.map((personDetails, index) => (
        <TableSection personDetails={personDetails} index={index} />
      ))}
    </table>
  );
};
