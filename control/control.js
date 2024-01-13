import formModel from '../models/form.js';

export const create = async(req, res)=>{
    try{
        const {Name, age ,email, experience,current,expected,notice}= req.body;
        if (!Name|| !age ||!email||!experience||!current||!expected||!notice) {
            return res.send({status:0,response:"All fields are mandatory" });
        }
        const existing = await formModel.findOne({email})
        if (existing) {
            return res.send({status:0, response : "All ready registered"})
        }
        await formModel.create({
            Name, age ,email, experience,current,expected,notice
        });
        return res.send({status:1, response:"Application register successfull"})
    }catch(error){
        return res.send({status:0,response:error.message})
    }
}