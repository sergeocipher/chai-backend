import dotenv from  "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"

dotenv.config({
    path: "./.env"
})



connectDB()
.then(() =>{
    const connection = app.listen(8000, () =>{
        console.log(`server running at ${process.env.PORT}`)
    })

    connection.on("error" , (error) =>{
        console.log("failure !!!!")
    })
}) 
.catch((err) =>{
    console.log("MONGO coneection  failed !!!!!!!!!!!!!!!!!!!!" , err)
})




