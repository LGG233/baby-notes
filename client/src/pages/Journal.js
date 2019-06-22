import React,{Component} from "react";
import Table from "react-bootstrap/Table";

class Journal extends Component {
    render () {
    return (
        <div>
            <h1>My Diary</h1>
            <h2>Add a New Journal Entry Here ++</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Entry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DATE</td>
                        <td>
                            <p> haslksjflskjaslkjas;laskjsdfs;fldajas;lkasdfjasdf;kl</p>
                            <button className="btn btn-danger">EDIT</button>
                        </td>
                        <td>
                            <p> haslksjflskjaslkjas;laskjsdfs;fldajas;lkasdfjasdf;kl</p>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>DATE</td>
                        <td>
                            <p> haslksjflskjaslkjas;laskjsdfs;fldajas;lkasdfjasdf;kl</p>
                            <button className="btn btn-danger">EDIT</button>
                        </td>
                        <td>
                            <p> haslksjflskjaslkjas;laskjsdfs;fldajas;lkasdfjasdf;kl</p>
                            
                        </td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    );
}
}
export default Journal;