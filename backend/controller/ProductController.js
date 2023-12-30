import { PrismaClient } from "@prisma/client"
import { response as sendResponse } from "../response.js"

const prisma = new PrismaClient()

export const getProducts = async (req, res) => {
    try {
        const response = await prisma.product.findMany()
        sendResponse(res, 200, response, "take all data")
    } catch (error) {
        sendResponse(res, 500, error.message, "error take data")
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await prisma.product.findUnique({
            where: {
                id: req.params.id
            }
        })
        sendResponse(res, 200, response, "take data by ID")
    } catch (error) {
        sendResponse(res, 404, error.message, "error take data")
    }
}

export const createProducts = async (req, res) => {
    const { name, price } = req.body
    try {
        const product = await prisma.product.create({
            data: { name, price }
        })
        sendResponse(res, 201, product, "succesfully create data")
    } catch (error) {
        sendResponse(res, 400, null, "create abort")
    }
}

export const updateProduct = async (req, res) => {
    const { name, price } = req.body
    try {
        const product = await prisma.product.update({
            where: { id: req.params.id },
            data: { name, price }
        })
        sendResponse(res, 200, product, "succesfully update data")
    } catch (error) {
        sendResponse(res, 400, null, "update abort")
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where: { id: req.params.id},
        })
        sendResponse(res,200,product,"succesfully delete data")
    } catch (error) {
        sendResponse(res, 400, null, "delete abort")
    }
}