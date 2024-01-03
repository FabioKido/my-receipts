import Receipt from "../../domain/Payment/Receipt";

export default interface ReceiptRepository {
    save(paymentNumber: string): Promise<void>
    get(paymentNumber: string): Promise<Receipt>
    update(receipt: Receipt): Promise<void>
    list(): Promise<Receipt[]>
}