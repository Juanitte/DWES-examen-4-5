import Repartidores from "@/components/Repartidores/Lista";
import { Suspense } from "react";


export default function PaginaRepartidores() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE REPARTIDORES</h1>

            <Suspense fallback={"Obteniendo repartidores ..."}>
                <Repartidores />
            </Suspense>
        </div>
    )

}