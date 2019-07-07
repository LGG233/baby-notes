import React from 'react'

export const EditButton = ({ index, editRow, handleEditClick,handleSaveClick }) => {
    let editText = "edit";
    if (index === editRow) {
        editText = "save"
    }
    return <button onClick={() => {
        if (editText === "save") { handleSaveClick() }
        else { handleEditClick(index) }
    }} className="btn btn-success">{editText}</button>
}
