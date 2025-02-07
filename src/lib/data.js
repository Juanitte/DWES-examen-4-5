'use server'
import prisma from "@/lib/prisma";

// ------------------------ REPARTIDORES ------------------------ \\

export async function obtenerRepartidores() {
    return await prisma.repartidor.findMany()
}

export async function obtenerRepartidor(id) {
    return await prisma.repartidor.findUnique({where: {id: +id}})
}

// ------------------------ PEDIDOS ------------------------ \\

export async function obtenerPedidos() {
    return await prisma.pedido.findMany()
}

export async function obtenerPedido(id) {
    return await prisma.pedido.findUnique({
        where: {id: +id},
        include: {repartidor: true,
        pizzas: true
        }})
}

// ------------------------ PIZZAS ------------------------ \\

export async function obtenerPizzas() {
    return await prisma.pizza.findMany({
        include: {pedidos: true}
    })
}

export async function obtenerPizza(id) {
    return await prisma.pizza.findUnique({
        where: {id: +id},
        include: {pedidos: true}
    })
}