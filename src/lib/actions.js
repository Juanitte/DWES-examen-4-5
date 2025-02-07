'use server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'


//  ------------------------ REPARTIDORES ------------------------


export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')

    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })

    revalidatePath('/repartidores')

}



export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')


    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })

    revalidatePath('/repartidores')
}



export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))

    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/repartidores')

}


//  ------------------------ PEDIDOS ------------------------


export async function insertarPedido(formData) {
    const nombre = formData.get('nombre')
    const fecha_y_hora = new Date(formData.get('fecha_y_hora'))
    const nombre_cliente = formData.get('nombre_cliente')
    const direccion_cliente = formData.get('direccion_cliente')
    const repartidor_id = Number(formData.get('repartidor_id'))
    //const pizzaIds = formData.getAll("pizzas");
    await prisma.pedido.create({
        data: {
            nombre: nombre,
            fecha_y_hora: fecha_y_hora,
            nombre_cliente: nombre_cliente,
            direccion_cliente: direccion_cliente,
            repartidor: {
                connect: {
                    id: repartidor_id
                }
            },/*
            pizzas: {
                connect: pizzaIds.map(id => ({ id: Number(id) }))
            },*/
        }
    })

    revalidatePath('/pedidos')

}



export async function modificarPedido(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fecha_y_hora = new Date(formData.get('fecha_y_hora'))
    const nombre_cliente = formData.get('nombre_cliente')
    const direccion_cliente = formData.get('direccion_cliente')
    const repartidor_id = Number(formData.get('repartidor_id'))
    //const pizzaIds = formData.getAll("pizzas");

    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fecha_y_hora: fecha_y_hora,
            nombre_cliente: nombre_cliente,
            direccion_cliente: direccion_cliente,
            repartidor: {
                connect: {
                    id: repartidor_id
                }
            },/*
            pizzas: {
                connect: pizzaIds.map(id => ({ id: Number(id) }))
            },*/
        }
    })

    revalidatePath('/pedidos')
}



export async function eliminarPedido(formData) {
    const id = Number(formData.get('id'))

    await prisma.pedido.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pedidos')

}

// ------------------------------- PIZZAS -----------------------


export async function insertarPizza(formData) {
    const nombre = formData.get('nombre')
    const precio = formData.get('precio')

    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio
        }
        
    })

    revalidatePath('/pizzas')

}



export async function modificarPizza(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const precio = formData.get('precio')


    await prisma.pizza.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            precio: precio,
        }
    })

    revalidatePath('/pizzas')
}



export async function eliminarPizza(formData) {
    const id = Number(formData.get('id'))

    await prisma.pizza.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/pizzas')

}