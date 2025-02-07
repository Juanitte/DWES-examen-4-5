import { obtenerPedidos, obtenerRepartidores } from "@/lib/data";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos();
    const repartidores = await obtenerRepartidores();
    return (
        <div>


            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-800 rounded-lg">
                        <div >
                            <p>{pedido.nombre}</p>
                            <p>{pedido.fecha_y_hora.toLocaleDateString()}</p>
                            <p>{pedido.nombre_cliente}</p>
                            <p>{pedido.direccion_cliente}</p>
                            <p>{repartidores.find(repartidor => repartidor.id === pedido.repartidor_id).nombre}</p>
                        </div>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}