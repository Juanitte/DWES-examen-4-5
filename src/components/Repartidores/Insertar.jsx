import { insertarRepartidor } from "@/lib/actions";

export default function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="Telefono" />
            <button className="border-2 border-black">Insertar repartidor</button>
        </form>
    );
}