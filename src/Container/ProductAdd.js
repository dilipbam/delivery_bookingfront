import React,{ Component } from "react";
import axios from 'axios';
class ProductAdd extends Component{
    state = {
        pname : '',
        pprice : '',
        pdesc : '',
        pimage : '',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    
    }
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=>{
        this.setState({
            pimage : e.target.files[0]
        })
    }
    proAddMethod = (e)=>{
        e.preventDefault();
        const data = new FormData() 

        data.append('pimage', this.state.pimage)
        data.append('pname', this.state.pname)
        data.append('pprice', this.state.pprice)
        data.append('pdesc', this.state.pdesc)

        axios.post("http://localhost:90/product/insert", data)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })

    }
 
    render(){
        return(
            <div>
            <form>
                <p>
                    <label>Product Name</label>
                    <input type="text"
                     value={this.state.pname}
                     name="pname"
                     onChange={this.inputHandler}
                     
                     />
                    </p>

                    <p>
                    <label>Product Price</label>
                    <input type="text"
                    value={this.state.pprice}
                    name="pprice"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Product Description</label>
                    <input type="text" 
                    value={this.state.pdesc}
                    name="pdesc"
                    onChange={this.inputHandler}
                    />
                    </p>
                    <p>
                        <input type="file" name="pimage" onChange={this.fileHandler} />
                        <button onClick={this.proAddMethod}>Add</button>
                    </p>
            </form>
            </div>
        )
    }
}
export default ProductAdd;