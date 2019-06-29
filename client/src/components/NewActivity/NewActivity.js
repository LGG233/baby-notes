// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import "./NewActivity.css";


// class NewActivity extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false,
//       date: '',
//       startTime: '',
//       endTime: '',
//       observations: '',
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   handleChange =(event) =>{
//     let target = event.target;
//     let name = target.name;

//     this.setState({
//         [name]: event.target.value
//       });

//     console.log('The form was submitted with the following data:');
//     console.log(this.state);
//   }

  
  

//   render() {
//     return (
//       <>
//         <Button variant="primary" onClick={this.handleShow}>
//           Let's create new Activity
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>New Activity Time</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <div className="container">
// //         <div className="row">
// //           <div className="col-md-12">
// //             <div className="FormCenter">
// //               <form onSubmit={this.handleSubmit} className="FormFields">
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="date">Date</label>
// //                   <input type="text" id="date" className="FormField__Input" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="Start Time">Start Time</label>
// //                   <input type="text" id="start time" className="FormField__Input" placeholder="Start Time" name="start time" value={this.state.startTime} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="notes">End Time</label>
// //                   <input type="text" id="end time" className="FormField__Input" placeholder="End Time" name="end time" value={this.state.endTime} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <label className="FormField__Label" htmlFor="observations">Observations</label>
// //                   <input type="text" id="observations" className="FormField__Input" placeholder="Oberservations" name="observations" value={this.state.observations} onChange={this.handleChange} />
// //                 </div>
// //                 <div className="FormField">
// //                   <button className="FormField__Button mr-20"><h3>Add New Activity</h3></button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }

// <script>
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// </script>

// render(<NewActivity />);





// import React, { Component } from 'react';
// import "./NewActivity.css";


class NewActivity extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      startTime: '',
      endTime: '',
      observations: '',
    };

  }

  handleChange =(event) =>{
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit=(event) =>{
    event.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="date">Date</label>
                  <input type="text" id="date" className="FormField__Input" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="Start Time">Start Time</label>
                  <input type="text" id="start time" className="FormField__Input" placeholder="Start Time" name="start time" value={this.state.startTime} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="notes">End Time</label>
                  <input type="text" id="end time" className="FormField__Input" placeholder="End Time" name="end time" value={this.state.endTime} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="observations">Observations</label>
                  <input type="text" id="observations" className="FormField__Input" placeholder="Oberservations" name="observations" value={this.state.observations} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20"><h3>Add New Activity</h3></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewActivity;
