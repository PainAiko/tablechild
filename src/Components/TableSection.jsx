import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useOpenController from "../Hooks/useOpenController";

export const TableSection = ({ personDetails, index }) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>             
             <span><b>{personDetails.Nomenclature}.</b> {personDetails.NomenclatureTitle}</span>
        </td>
        {/* <td></td>
        <td></td>
        <td></td> */}
      </tr>
      {isOpen && <TableRow personDetails={personDetails.elements ?? []} />}
    </tbody>
  );
};
