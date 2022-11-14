const express = require("express");
const app = express();

app.get("/:name/:rollno/:address", function(req, res){
    const ob = {
        "name" : req.params.name,
        "rollno":req.params.rollno,
        "address":req.params.address
    }
    res.json(ob);

})

app.listen(3000,()=>console.log("server is running at port 3000"))