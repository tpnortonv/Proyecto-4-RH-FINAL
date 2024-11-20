let reservas = []; // Almacén temporal de datos.

exports.crearReserva = (req, res) => { // Función para crear NUEVA RESERVA.
    const nuevaReserva = { id: reservas.length + 1, ...req.body }; // Creamos objeto que trae los datos de req.body en la solicitud.
    reservas.push(nuevaReserva); // Agregamos nueva reserva al arreglo de reservas.
    res.status(201).json({ mensaje: 'Reserva creada', reserva: nuevaReserva }); // Respondemos (res) con mensaje de éxito y reserva creada.
};

exports.obtenerReservas = (req, res) => { // Función para OBTENER TODAS LAS RESERVAS existentes.
    res.status(200).json(reservas); // Arreglo de reservas.
};

exports.obtenerReservaPorId = (req, res) => { // Función para obtener reserva por su ID.
    const { id } = req.params; // Extraemos ID de parámetros.
    const reserva = reservas.find(r => r.id === parseInt(id)); // Reserva en el arreglo que el ID = ID entregado.
    if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si no la encunetra: Error.
    res.json(reserva); // Si se encuentra, la envíamos en la respuesta.
};

exports.actualizarReserva = (req, res) => { //Función para ACTUALIZAR RESERVA EXISTENTE.
    const { id } = req.params; // Extraemos ID de los parámetros.
    const index = reservas.findIndex(r => r.id === parseInt(id)); // Buscamos la posición de reserva que coincida.
    if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si index devuelve -1 = Error.

    reservas[index] = { ...reservas[index], ...req.body }; // Actualizamos reserva en posición encontrada.
    res.json({ mensaje: 'Reserva actualizada', reserva: reservas[index] }); // Mensaje de éxito.
};

exports.eliminarReserva = (req, res) => { // Función para ELIMINAR RESERVA EXISTENTE.
    const { id } = req.params; // Extraemos ID de parámetros.
    const index = reservas.findIndex(r => r.id === parseInt(id)); // Buscamos la posición de reserva que coincida.
    if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' }); // Si index devuelve -1 = Error.

    reservas.splice(index, 1); // Elimina 1 elemento que coincida con solicitud.
    res.json({ mensaje: 'Reserva eliminada' }); // Mensaje de éxito.
};

exports.filtrarReservas = (req, res) => { // Función para FILTRAR RESERVAS.
    let resultado = [...reservas]; // Copia del arreglo para aplicarle los filtros solicitados.
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query; // Extraemos parámetros de consulta.

    if (hotel) resultado = resultado.filter(r => r.hotel === hotel); // Filtro por hotel.
    if (fecha_inicio && fecha_fin) { // Filtro por fecha inicio-fin.
        resultado = resultado.filter(
            r => new Date(r.fecha) >= new Date(fecha_inicio) && new Date(r.fecha) <= new Date(fecha_fin)
        );
    }
    if (tipo_habitacion) resultado = resultado.filter(r => r.tipo_habitacion === tipo_habitacion); // Filtro por tipo de habitación.
    if (estado) resultado = resultado.filter(r => r.estado === estado); // Filtro por estado.
    if (num_huespedes) resultado = resultado.filter(r => r.num_huespedes >= parseInt(num_huespedes)); // Filtro por n° de huéspedes.

    res.json(resultado); // Envíamos resultado final al cliente.
};