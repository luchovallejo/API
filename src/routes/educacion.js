const { Router } = require ('express');
const router = new Router();
const _ = require('underscore');

const educacion = require('../sample.json');
console.log(educacion);

router.get("/", (req, res) => {
  res.json(educacion);
});

module.exports = router;

router.post('/', (req, res) => {
    const id = educacion.length + 1;
    const {Nombre, Apellido, Telefono} = req.body;
    if(Nombre && Apellido && Telefono){
        const id = educacion.length + 1;
        const newEducacion = {...req.body, id};
        educacion.push(newEducacion);
        res.json(educacion);
    } else{
        res.status(500).json({ error: "There was an error." });
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
      _.each(educacion, (educa, i) => {
        if (educa.id == id) {
          educacion.splice(i, 1);
        }
      });
      res.send(educacion);
  });


  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const {Nombre, Apellido, Telefono} = req.body;
    if(Nombre && Apellido && Telefono){
      _.each(educacion, (educa, i) => {
        if (educa.id == id) {
          educa.Nombre = Nombre;
          educa.Apellido = Apellido;
          educa.Telefono = Telefono;
        }
      });
      res.json(educacion);
    } else {
      res.status(500).json({ error: "There was an error." });
    }
  });