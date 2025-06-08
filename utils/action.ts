"use server"
import db from '@/utils/db'
import { redirect } from 'next/navigation'


export async function fetchFeaturedProducts() {
    const product = await db.phone.findMany({
        where: {
            isFeatured: true
        },
    })
    return product
}

export async function fetchAllProducts({ search = '' }: { search: string }) {
    const product = await db.phone.findMany({
        where: {
            OR: [{
                name: { contains: search, mode: 'insensitive' }
            }]
        },
        orderBy: {
            createdAt: 'desc'
        },
    })
    return product
}

export async function fetchSingleProduct(phoneId: string) {
    const product = await db.phone.findUnique({
        where: {
            id: phoneId
        }
    })
    if (!product) {
        redirect('products')
    }
    return product
}