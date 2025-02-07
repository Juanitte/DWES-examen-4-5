import { obtenerRepartidores } from "@/lib/data";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";


export default async function Repartidores() {
    const repartidores = await obtenerRepartidores();
    return (
        <div>

            {/*<RepartidorInsertar />*/}

            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-800 rounded-lg">
                        <div>
                            <p>{repartidor.nombre}</p>
                            <p>{repartidor.telefono}</p>
                        </div>

                        {/*<RepartidorModificar repartidor={repartidor} />*/}

                        {/*<RepartidorEliminar repartidor={repartidor} />*/}

                        <hr />
                    </div>
                )
            }
        </div>
    );
}