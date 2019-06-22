import React from "react";
import Table from "react-bootstrap/Table";

function Activity() {
    return (
        <div>
            <h1 className="tableTitle text-center">Header </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Start</th>
                        <th>End</th>
                        <th>Dates</th>
                        <th>Notes</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Activity;