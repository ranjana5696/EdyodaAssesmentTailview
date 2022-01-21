const express = require("express");

const router = express.Router();
const surveySchema = require('../model/surveyModel')


router.post("/form" , (req,res) => {

    const user = new surveySchema(req.body);
    
    user.save(  (err,user) => {
        if(err){
            res.json(err)
        }else{
            res.json({Success : "user registered " , user })
        }
    } )
    
    }  )
    
    
    router.get("/getallusers" , (req,res) => {
    
        surveySchema.find( {} , (err,users) => {
                    if(err){
                        res.json(err)
                    }else{
                        res.json(users)
                    }
        } )
    
    })
    
    router.put( "/form/:id" , (req,res) => {
    
        var user 
    
        console.log(req.params.id)
    
        surveySchema.findByIdAndUpdate( req.params.id , req.body , { new : true , findOneAndModify : true } , (err,updatedUser) => {
            if(err){
                res.json(err)
             }else{
                 res.json(updatedUser)
             }
        } )
    } )
    
    
    
    router.delete("/form/:id" , (req,res) => {
    
        surveySchema.findByIdAndDelete( req.params.id , (err,deleteduser) => {
            if(err){
                res.json(err)
            }else{
                res.json(`deletion success , ${deleteduser}`)
            }
        } )
    
    } )


module.exports = router;