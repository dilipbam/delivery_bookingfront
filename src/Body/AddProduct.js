import axios from "axios";
import { Component } from "react";

class AddProduct extends Component{
    state = {
        pname:'',
        pprice:'',
        pdesc:''
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    send=(e)=>{
        e.preventDefault();// page refresh nahos vanna ko lagi.
        axios.post('http://localhost:90/product/insert', this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <form>
                    <p>
                        Product name
                        <input type="text" name="pname" value={this.state.pname} onChange={this.changeHandler}/>
                    </p>
                    <p>
                        Product price
                        <input type="text" name="pprice" value={this.state.pprice} onChange={this.changeHandler}/>
                    </p>
                    <p>
                        Product description
                        <input type="text" name="pdesc" value={this.state.pdesc} onChange={this.changeHandler}/>
                    </p>
                    <p>
                        <button onClick={this.send}>
                            Add Product
                        </button>
                    </p>
                </form>
            </div>
        )
    }
}