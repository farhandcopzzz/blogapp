const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://farhan_dcopzzz:farhan@cluster0.j8ucejg.mongodb.net/Blogin?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch((error)=>{
    console.log(error)
})