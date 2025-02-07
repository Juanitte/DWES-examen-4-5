import { obtenerPedidos, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Modal from "../modal";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos();
    const repartidores = await obtenerRepartidores();
    const pizzas = await obtenerPizzas();
    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar repartidores={repartidores} pizzas={pizzas}/>
            </Modal>

            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-800 rounded-lg">
                        <div >
                            <p>{pedido.nombre}</p>
                            <p>{pedido.fecha_y_hora.toLocaleDateString()}</p>
                            <p>{pedido.nombre_cliente}</p>
                            <p>{pedido.direccion_cliente}</p>
                            <p>{repartidores.find(repartidor => repartidor.id === pedido.repartidor_id)?.nombre}</p>
                        </div>
                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PedidoModificar pedido={pedido} repartidores={repartidores} pizzas={pizzas} />
                        </Modal>
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PedidoEliminar pedido={pedido} />
                        </Modal>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}