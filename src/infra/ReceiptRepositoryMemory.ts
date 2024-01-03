import ReceiptRepository from "../app/Repositories/IReceiptRepository";
import Receipt from "../domain/Payment/Receipt";

export default class ReceiptRepositoryMemory implements ReceiptRepository {

    readonly receipts: Receipt[]

    constructor() {
        this.receipts = [];
    }

    async save(paymentNumber: string): Promise<void> {
        const receipt = new Receipt(paymentNumber)
        this.receipts.push(receipt)
    }
    async get(paymentNumber: string): Promise<Receipt> {
        const receipt = this.receipts.find(receipt => receipt.paymentNumber === paymentNumber)
        if(!receipt) {
            throw new Error('Recibo não encontrado!')
        }
        return receipt
    }
    async update(receipt: Receipt): Promise<void> {
        const existingReceipt = await this.get(receipt.paymentNumber)
        existingReceipt.paymentNumber = receipt.paymentNumber
    }
    async list(): Promise<Receipt[]> {
        return this.receipts
    }  
}