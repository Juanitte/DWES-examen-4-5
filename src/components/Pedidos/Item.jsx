import { obtenerPedido } from "@/lib/data";

export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id);

    return (
        <div>
            <p> {pedido.nombre} </p>
            <p> {pedido.fecha_y_hora.toLocaleDateString()} </p>
            <p> {pedido.nombre_cliente} </p>
            <p> {pedido.direccion_cliente} </p>
            <p> {pedido.repartidor?.nombre} </p>
        </div>
    );
}