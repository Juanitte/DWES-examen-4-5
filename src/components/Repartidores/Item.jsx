import { obtenerRepartidor } from "@/lib/data";

export default async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id);

    return (
        <div>
            <p> {repartidor.nombre} </p>
            <p> {repartidor.telefono} </p>
        </div>
    );
}