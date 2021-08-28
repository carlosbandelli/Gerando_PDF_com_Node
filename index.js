var pdf = require("html-pdf")
var ejs = require("ejs")

var nomeDoUsuario = "Carlos Bandelli"
var curso = "Formação Node.js"
var categoria = "Javascript"

ejs.renderFile("./meuarquivo.ejs",{nome: nomeDoUsuario, curso: curso, categoria: categoria}, (err, html) => {
    if(err){
        console.log(err)
    }else{
        pdf.create(html,{}).toFile("./meupdflindao.pdf",(err,res) => {
            if(err){
                console.log("Um erro aconteceu :(")
            }else{
                console.log(res)
            }
        })
    }
})


