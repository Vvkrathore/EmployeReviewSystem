import  { connect } from 'mongoose';

export const connectToMongo = async () => {
    try {
        const  MONGO_CONNECTION_STRING  = "mongodb://127.0.0.1:/employeedata";
        await connect(MONGO_CONNECTION_STRING );

        console.log("CONNECTED TO MONGODB")
        return true;
    } catch(e) {
        throw 'COULD NOT CONNECT TO MONGO DB';
    }
}