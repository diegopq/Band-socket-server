const { io } = require("../index");

// mensajes de sockets
io.on("connection", (client) => {
    console.log("Cliente conectado");

    //se dispara cuando el cliente se desconecta
    client.on("disconnect", () => {
        console.log("Cliente desconectado");
    });

    //se escucha el evento emitido por el cliente,los datos u objetos emitidos se reciben en el payload
    client.on("mensaje", (payload) => {
        console.log(`Mensaje del cliente ${payload.nombre}`);

        //el servidor emite un mensaje de respuesta
        io.emit("mensaje", { admin: "Mensaje enviado por el server" });
    });
});