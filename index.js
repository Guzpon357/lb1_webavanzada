import express from "express";
const app = express();
app.use(express.json());
const people = [];
//--GET--
app.get("/", (request, response)=>{
        return response.json({
            ok: true,
            data: people,
        })
});
//--POST--

app.post("/create", function(req, res){
    const data = req.body;
    data.id = people.length + 1;
    people.push(req.body);
    return res.status(201).json({
        ok: true,
        data: "Persona creadaa",
    })
    
    
});
//--PUT--
app.put("/update", (request, response)=>{
    
    const data = request.body;

    people[data.id-1].name=data.name;
    people[data.id-1].last_name=data.last_name;
    people[data.id-1].age=data.age;


    return response.status(204).json({
        ok: true,
        data: "Persona modificada",
    })
});
//--DELETE--
app.delete("/delete", (request, response)=>{
    const data = request.body;
    let i;
    for(i=0;i<people.length;i++){
        if(data.id==people[i].id){
            people.splice(i,1);
            i=0;
        }
    };
    return response.status(201).json({
        ok: true,
        data: "Persona eliminada",
    });
});
app.listen(6004, () =>
 console.log(`El servidor inicio en http://localhost:6004`)
 );