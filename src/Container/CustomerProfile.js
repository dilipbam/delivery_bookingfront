import React, {Component} from "react";
/* state={
    UserName : "",
    Contact : "",
    Email : "",
    id : this.props.match.params.id
} */

class CustomerProfile extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="login-form">
                            <form action="" method="post">
                                <h4 className="modal-title font-weight-bold ">Update Profile</h4>
                                <p className="text-center" style={{ float: "right" }}>
                                <p><input type="text" name="UserName" className="form-control" value={this.state.UserName}
                                    onChange={this.changeHandler} /></p>

                                <p><input type="text" name="Contact" className="form-control" value={this.state.Contact}
                                    onChange={this.changeHandler} disabled={true} /></p>

                                <p><input type="text" name="Email" className="form-control" value={this.state.Email}
                                    onChange={this.changeHandler} /></p>

                                <button className="btn btn-primary btn-block" onClick={this.updateUserData}>Update</button>
                                </p>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>

        )
    }
}
export default CustomerProfile;