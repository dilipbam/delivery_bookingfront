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
                <h1>Update Product</h1>
                <form>
                    <p>
                        Product name
                        <input type="text" name="pprice" value={this.state.pprice} />
                    </p>
                    <p>
                        Product price
                        <input type="text" name="pname" value={this.state.pname} />
                    </p>
                    <p>
                        Product description
                        <input type="text" name="pdesc" value={this.state.pdesc} />
                    </p>
                    <p>
                        <button onClick={this.send}>
                            Update Product
                        </button>
                    </p>
                </form>
            </div>
        )
    }
}

export default ProductUpdate;