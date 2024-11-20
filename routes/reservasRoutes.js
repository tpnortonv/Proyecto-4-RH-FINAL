const express = require('express');
const router = express.Router();
const reservasControllers = require('../controllers/reservasControllers'); // Importamos controladores.

// Endpoints CRUD
router.post('/', reservasControllers.crearReserva); // Crea nueva reserva.
router.get('/', reservasControllers.obtenerReservas); // Obtener TODAS las reservas.
router.get('/:id', reservasControllers.obtenerReservaPorId); // Obtener reserva por ID.
router.put('/:id', reservasControllers.actualizarReserva); // Actualizar reserva (ID).
router.delete('/:id', reservasControllers.eliminarReserva); // Eliminar reserva (ID).

router.get('/filtrar', reservasControllers.filtrarReservas); // Filtros

module.exports = router; // Exportamos los las rutas para ocuparlas en toda la app.
