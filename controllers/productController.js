import Product from "../models/product";

export function addProduct(req,res){
    const data = req.body;
    const newProduct = new Product(data);
    newProduct.save()
    .then(()=>{
        res.jsonn({message:"product added successfully"});

    }).catch((error)=>{
        res.status(500).json({error:"Product addition failed"});
    });
}