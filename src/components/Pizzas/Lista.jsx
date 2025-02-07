import { obtenerPizzas, obtenerPedidos } from "@/lib/data";
import PizzaInsertar from "./Insertar";
import PizzaModificar from "./Modificar";
import PizzaEliminar from "./Eliminar";

export default async function Pizzas() {
    const pizzas = await obtenerPizzas();
    const pedidos = await obtenerPedidos();

    return (
        <div>

            {/*<PizzaInsertar />*/}

            {pizzas.map((pizza) => (
                <div key={pizza.id} className="p-4 mb-4 bg-slate-800 rounded-lg">
                    <div>
                        <p className="text-lg font-bold">🍕 {pizza.nombre}</p>
                        <p className="text-sm">👨‍🏫 {pizza.precio}</p>
                        
                        <div className="mt-2">
                            <p className="font-semibold">📚 Pedidos realizados:</p>
                            {Array.isArray(pizza.pedidos) && pizza.pedidos.length > 0 ? (
                                <ul className="list-disc list-inside">
                                    {pizza.pedidos.map((pedido) => (
                                        <li key={pedido.id} className="ml-4">
                                            {pedido.nombre}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 italic">No hay pedidos realizados.</p>
                            )}
                        </div>
                    </div>

                    {/*<PizzaModificar pizza={pizza} />*/}

                    {/*<PizzaEliminar pizza={pizza} />*/}

                    <hr />
                </div>
            ))}
        </div>
    );
}