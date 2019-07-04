import React, { Component } from "react";
import "./Childcard.css";
import API from "../../util/API";

class Childcard extends Component {
  state = {
    name: "",
    birthday: "",
    id: "",
    data: []
  };

  componentDidMount() {
    API.getChildren(localStorage.getItem("user-id")).then(res => {
      this.setState({
        data: res.data
      });
      console.log(res.data);
    });
  }

  handleClick =(props)=> {
    // this.setState({
    //   id: this.state.child.id
    // })
   console.log("this Child Button was clicked for child id: ------")
   console.log(props)
   window.location.replace("/child", this.props)
   
    // this.setState({
    //   name: this.child.name,
    //   birthday: this.state.child.dob
    // })
  }

  render() {
    return (
      <div>
          {/* <div className="row"> */}
          {this.state.data.map(child => (
            <div className="card">
              <div className="card-header"><h3>{child.name}</h3></div>
              <div className="card-body">
                <h4>Birthday: {child.dob}</h4>
              </div>
              <div className="card-footer">
                <button className="btn btn-success childBtn" onClick={()=> this.handleClick(child.id)}>
                  <h5>Select {child.id}</h5>
                </button>
              </div>
            </div>
          ))}
        
      </div>
      // </div>

      // </div>
      // </div>
    );
  }
}

export default Childcard;
