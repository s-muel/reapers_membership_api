const membersModel = require('../models/membersModel');

 async function addmembers(request,response){
   try {
    const newTodo = await membersModel.create(request.body);
    response.status(200).json(newTodo);
   } catch (error) {
       console.log("Something went wrong",error.message);
   }
}

async function getAllmembers(request,response){
    try {
        const getAll =await membersModel.find();
        response.status(200).json(getAll);
    } catch (error) {
   response.status(500).json({message:"Something went wrong"});
    }
}

async function updateById (request,response){
    try {
       const update= await membersModel.findByIdAndUpdate(request.params.membersId,request.body);
       response.status(200).json({message:"Updated"});

    } catch (error) {
        response.status(500).json({message:"Something went wrong"});
    }

}
async function deleteById(request,response){
try {
    const delet = await membersModel.findByIdAndDelete(request.params.membersId);
    response.status(200).json({message:"Member Deleted"});
} catch (error) {
    response.status(500).json({message:"Something went wrong"});
}
}
async function getAllMembersId(request,response){
    try {
        const gettodobyId = await membersModel.findById(request.params.membersId);
        response .status(200).json(gettodobyId );
    } catch (error) {
        response.status(500).json({message:"Something went wrong"});
    }
}

module.exports = {
    addmembers,
    getAllmembers,
    updateById,
    deleteById,
    getAllMembersId
}