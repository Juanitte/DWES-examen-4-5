import { obtenerPizza } from "@/lib/data";

export default async function Pizza({ id }) {
    const pizza = await obtenerPizza(id);

    return (
        <div>
            <p> {pizza.nombre} </p>
            <p> {pizza.precio} </p>
        </div>
    );
}