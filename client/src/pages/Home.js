import React, {Component} from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";


class Home extends Component {
render () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
        <RegisterForm />
        </div>
      </div>
    </div>
  );
}
}

export default Home;
