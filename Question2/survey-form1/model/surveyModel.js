const mongoose = require("mongoose");


const surveySchema = mongoose.Schema({


    name : {
        type : String,
        required : true
    } ,

    email : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Role : {
        type : String,
        required : true
    },
    Recommend : {
        type : Boolean,
        required : true
    },
    FavFeature : {
        type : String,
        required : true
    },
    ImprovemntSuggestion : {
        type : RadioNodeList,
        required : true
    }, 
    Comments : {
        type : Text,
        required : true
    }


})

schema.set('validateBeforeSave', false);
schema.path('email').validate(function (value) {
    return value != null;
});

module.exports = mongoose.model("survey", surveySchema)