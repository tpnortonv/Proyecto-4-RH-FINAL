const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController'); // Importamos controladores.

// Endpoints CRUD
router.post('/', reservasController.crearReserva); // Crea nueva reserva.
router.get('/', reservasController.obtenerReservas); // Obtener TODAS las reservas.
router.get('/:id', reservasController.obtenerReservaPorId); // Obtener reserva por ID.
router.put('/:id', reservasController.actualizarReserva); // Actualizar reserva (ID).
router.delete('/:id', reservasController.eliminarReserva); // Eliminar reserva (ID).

router.get('/', reservasController.filtrarReservas); // Filtros

module.exports = router; // Exportamos los las rutas para ocuparlas en toda la app.
