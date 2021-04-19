import {Component} from "react";
import ReactRoundedImage from "react-rounded-image";

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
                                    <ReactRoundedImage image={"http://localhost:90/" + this.state.photo} />

                                    <input type="file" name="photo" className="form-control" onChange={this.fileHandler} style={{ marginTop: "10px" }} /></p>

                                <p><input type="text" name="fullname" className="form-control" value={this.state.fullname}
                                    onChange={this.changeHandler} /></p>

                                <p><input type="text" name="username" className="form-control" value={this.state.username}
                                    onChange={this.changeHandler} /></p>

                                <p><input type="text" name="contact" className="form-control" value={this.state.contact}
                                    onChange={this.changeHandler} disabled={true} /></p>

                                <p><input type="text" name="email" className="form-control" value={this.state.email}
                                    onChange={this.changeHandler} /></p>

                                <button className="btn btn-primary btn-block" onClick={this.updateUserData}>Update</button>
                                {/* <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" onClick={this.submitLogin} /> */}
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