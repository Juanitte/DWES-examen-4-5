import { modificarPedido } from "@/lib/actions";

export default function PedidoModificar({ pedido, repartidores, pizzas }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='nombre' defaultValue={pedido.nombre} />
            <input name='fecha_y_hora' type='date' defaultValue={pedido.fecha_y_hora.toISOString().split('T')[0]} />
            <input name='nombre_cliente' defaultValue={pedido.nombre_cliente} />
            <input name='direccion_cliente' defaultValue={pedido.direccion_cliente} />

            <select key={pedido.repartidor_id} name="repartidor_id" defaultValue={pedido.repartidor_id}>
                {
                    repartidores.map((repartidor) => (
                        <option key={repartidor.id} value={repartidor.id}>{repartidor.nombre}</option>
                    ))
                }
            </select>

            <p>Pizzas:</p>

            {pizzas.map((pizza) => (
                <div key={pizza.id}>
                    <input 
                        type="checkbox" 
                        defaultChecked={pizza.pedidos?.some(p => p.id === pedido.id) || false} 
                        name="pizzas" 
                        value={pizza.id} 
                        id={`pizza-${pizza.id}`} 
                    />
                    <label htmlFor={`pizza-${pizza.id}`}>{pizza.nombre}</label>
                </div>
            ))}

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}