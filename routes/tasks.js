module.exports = app => {
  app.get("/tasks", (req, res) => {
    res.json({
      tasks: [
        { title: "Fazer compas" },
        { title: "Consertar o pc" }
      ]
    })
  })
}