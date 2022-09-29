const mongoose = require('mongoose');

/*mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateConnection: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.logw("Connected to MongoDB");
}).catch((e) => {console.log("Error connectin");
})*/

mongoose.connect("mongodb://localhost:27017/student-api", () => {
  console.log("mongodb connection is started");
})