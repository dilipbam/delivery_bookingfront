import React, {Component} from "react";

class ProductUpdate extends Component{
    state={
        pname : "",
        pdesc : "",
        pprice: "",
        id : this.props.match.params.id
    }
    render(){
        return(
            <div>
                <form>
                    <p>
                        Product name
                        <input type="text" name="pprice" value={this.state.pprice} />
                    </p>
                    <p>
                        Product name
                        <input type="text" name="pname" value={this.state.pname} />
                    </p>
                    <p>
                        Product name
                        <input type="text" name="pdesc" value={this.state.pdesc} />
                    </p>
                </form>
            </div>
        )
    }
}

export default Update;