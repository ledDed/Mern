import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useTheme,ThemeProvider,styled } from "@mui/material/styles"
import {useState} from "react"
import { useProductStore } from "../Store/product"
import Button from "@mui/material/Button"




const CreatePage=()=>{

    const [newProduct,setNewProduct] =useState({
        name:"",
        price:"",
        image:"",
    })
    const {getProducts} =useProductStore();
    const {createProduct} =useProductStore();
    const handleInputChange=(e)=>{
        const {name,value} =e.target;
        setNewProduct((prev)=>({...prev,[name]:value}))
    }

    const handleGetProducts =async()=>{
        const { success, message, data } = await getProducts();
        console.log(message);
        if (success) {
        console.log("All Products JSON:", data);
    }   
    }
    const handleAddProduct = async () =>{
        const {success,message}= await createProduct(newProduct);
        if(!success){ console.log("Error",message)}
        else{console.log("success",message)}
    }

    return(
        <div className="fixed flex flex-col p-2 mt-20 rounded-2xl bg-red-300/10 items-center">
            <TextField 
            name="name"
            value={newProduct.name}
            label="Name"
            onChange={handleInputChange}
            sx={{
                width:300,
                height:50,
                borderRadius:1,
                m:3
                }}
            />
        <TextField
            name="image" 
            value={newProduct.image}
            label="ImageURL"
            onChange={handleInputChange}
            sx={{
                width:300,
                height:50,
                borderRadius:1,
                m:3
                }}
            />
        <TextField 
            name="price"
            type="number"
            value={newProduct.price}
            label="Price"
            onChange={handleInputChange}
            sx={{
                width:300,
                height:50,
                borderRadius:1,
                m:3
                }}
            />
    <Button 
        variant="contained" 
        onClick={handleAddProduct}
        sx={{ mt: 2, width: 200 }}
      >
        Add Product
    </Button>
    <Button 
        variant="contained" 
        onClick={handleGetProducts}
        sx={{ mt: 2, width: 200 }}
      >
        Get
    </Button>      
        </div>

    )
}

export default CreatePage