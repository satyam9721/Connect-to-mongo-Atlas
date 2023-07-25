const mongoose=require("mongoose")

const dbUrl= "mongodb+srv://satyamrau9721:F5s1wFUB35apNzdC@admin.zzp9cix.mongodb.net/?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology:true,
};

mongoose
.connect(dbUrl,connectionParams)
.then(()=>{
    console.info("Connected to the DB")
})
.catch((e)=>{
    console.log("Error:",e);
})

