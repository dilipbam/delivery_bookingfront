import axios from "axios";
import { Component } from "react";
 
class Product extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        axios.get("http://localhost:90/aila/all")
        .then((allAila)=>{
            
            this.setState({
                products:allAila.data.data
            })
        })
        .catch((err)=>{
               console.log(err.response)
           }
        )
        deleteProduct = (pid) =>{
            axios.delete('http://localhost:90/product/delete/' + pid)
            .then()
            .catch()
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {
                        this.state.products.map((product)=>{
                            return(
                                <div>
 
                                <div className="col-md-3">{product.ailaName}</div>
                                <p><button onClick={this.deleteProduct.bind}>Delete</button></p>
                                </div>
                            )
                        })
                    }
                    
                </div>
               
            </div>
        )
    }
}
export default Product