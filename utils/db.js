import mongoose from 'mongoose'

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err
        console.log('Connected to mongodb.')
    })
}

export default connectDB

