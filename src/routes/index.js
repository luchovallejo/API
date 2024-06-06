const { Router } = require('express');
const router = Router();


router.get('/prueba', (req, res) => {
    const data = {
        "name": "luis",
        "apellido": "vallejo"
    };
    res.json(data);
});
module.exports = router;