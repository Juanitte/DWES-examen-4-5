import { eliminarPizza } from "@/lib/actions";

export default function PizzaEliminar({ pizza }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>PIZZA: {pizza.nombre}</p>
            <p>PRECIO: {pizza.precio}</p>
            <form action={eliminarPizza}>
                <input type="hidden" name="id" defaultValue={pizza.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}