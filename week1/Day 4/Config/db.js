const mongoose=require('mongoose')

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/janBatchOct')
         console.log('mongodb connected')
         
    } catch (error) {
        console.log(error)
        process.exit()
        
    }
}
module.exports=connectDb