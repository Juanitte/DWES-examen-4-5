/*import { insertarPedido } from "@/lib/actions";

export default async function PedidoInsertar({ repartidores, pizzas }) {

    return (
        <form action={insertarPedido}>
            <input name="nombre" placeholder="Nombre" />
            <input name="fecha_y_hora" type='date' />
            <input name="nombre_cliente" placeholder="Nombre del cliente" />
            <input name="direccion_cliente" placeholder="Direccion del cliente" />
            <select name="repartidor_id">
                {
                    repartidores.map((repartidor) => (
                        <option key={repartidor.id} value={repartidor.id}>{repartidor.nombre}</option>
                    ))
                }
            </select>

            <p>Pizzas:</p>

            {pizzas.map((pizza) => (
                <div key={pizza.id}>
                    <input type="checkbox" name="pizzas" value={pizza.id} id={`pizza-${pizza.id}`} />
                    <label htmlFor={`pizza-${pizza.id}`}>{pizza.nombre}</label>
                </div>
            ))}

            <button className="border-2 border-black" >Insertar pedido</button>
        </form>
    );
}*/