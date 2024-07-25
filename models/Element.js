import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const elementSchema = new Schema ( {
     elementId:{
        type: String,
        required: [true, 'elementId is required.']
    },
    type:{
        type: String,
        required:[true, 'type is required.']
    },
    tampa: {
        type: String,
        required: [true, 'tampa is required.'],
    },
    entradas: {
        type: String,
        required: [true, 'entradas is required.'],
    },
    saidas:{
        type: String,
        required: [true, 'saidas is required']
    },
    medidas: {
        type: String,
        required: [true,'medidas is required'],
    },
    rede: {
        type: String,
        required: [true,'Rede is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    photo: {
        type: String,
        required: [true, 'Photo is required']
    },
    video: {
        type: String,
        required: [true, 'Video is required']
    },
    obs: {
        type: String,
        required: [true, 'Obs is required']
    },
     createdAt: {
        type: Date,
        default: Date.now
    }}
);

const element = mongoose.model('Element', elementSchema);

export default element;