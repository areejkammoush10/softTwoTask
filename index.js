import express from 'express';
const students = [
    {
        id: 1,
        name: "areej",
        city: "Tanta"
    },

    {
        id: 2,
        name: "ibrahim",
        city: "Tanta"

    },
    {
        id: 3,
        name: "Aya",
        city: "Tanta"
    },
    {
        id: 4,
        name: "Ali",
        city: "Tanta"

    }

];



const app = express();
const studentsFunction = (req,res) => {
    let output = '<ul>'
    for (let i =0 ; i < students.length; i++){
        const student = students[i];
        output += "<li> <a href ='/student/" + student.id +     " '  > " + student.name + " </a> </li>"
    }
     output+='<ul/>'

   res.send(output   )

};
app.get('/students', studentsFunction)
app.listen(5000);

