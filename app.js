const express = require('express'); 
const app = express();
const port = process.env.PORT ||2000;
require("./db/conn")
const Student = require("./models/student");

app.use(express.json());
/*app.get("/",(req,res)=>{

     res.send("kya haal chal mera dost")
})*/

/*create a new student promise
app.post("/student", (req, res )=>{
    const user = new Student(req.body)
    console.log(req.body);
    user.save().then(()=>{
        res.send(user)
    }).catch(err=>{ res.send(err) }); 
})*/

//create a new student by asynch awaitq
app.post("/student", async(req, res )=>{
    try{const user = new Student(req.body);
    const createuser = await user.save(); 
    res.status(201).send(createuser);

}catch(e){ res.send(400).send(e)}

})

app.get("/students", async(req, res)=>{
    try{
      const studentsData = await Student.find();
      res.send(studentsData)
    }catch(e){
        res.send(e)

    }

})

//delete studens
app.delete("/student/:id", async(req,res)=>{
    try{
    const deleteStudent = await  Student.findByIdAndDelete(req.params.id);
        if(!req.params.if){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
            res.status(500).send(e);
    }
})


//update student

app.patch("/student/:id", async(req,res)=>{
    try{
        const _id =req.params.id;
       const updateStudents =await  Student.findByIdAndUpdate(_id, req.body,{
            new: true
       } )
        res.send(updateStudents);
    }
    catch(e){
        res.send(404).send(updateStudents)
    }
})

app.listen(port,(req,res)=>{

    console.log(`conneted to port: ${port}`)
})