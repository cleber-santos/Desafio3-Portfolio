const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const courses = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express:server,
    autoescape: false,
})

server.get("/", function(req, res){
    const about = {
        avatar: "/assets/rocket.svg",
        name: "Rocketseat",
        description: "Rocketseat é uma plataforma de educação em tecnologia, <br> onde os alunos aprendem as mais atuais stacks para desenvolvimento web e mobile.",
        list: "<li>HTML</li><li>CSS</li><li>Javascript</li>  <li>Node.js</li><li>React</li><li>React Native</li>",
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat"},
        ]
    }
    return res.render("about", {about: about})
})

server.get("/courses", function(req, res){
    return res.render("courses", {items: courses})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course) {
        return course.id == id
    })
    
    if(!course) {
        return res.status(404).render("not-found")
    }
    
    return res.render("course", { course })
})
    

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Servidor ok!")
})