import { obtenerRepartidores } from "@/lib/data";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";
import Modal from "../modal";


export default async function Repartidores() {
    const repartidores = await obtenerRepartidores();
    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar repartidor</p>}>
                <RepartidorInsertar />
            </Modal>

            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-800 rounded-lg">
                        <div>
                            <p>{repartidor.nombre}</p>
                            <p>{repartidor.telefono}</p>
                        </div>
                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <RepartidorModificar repartidor={repartidor} />
                        </Modal>
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <RepartidorEliminar repartidor={repartidor} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}