import Receipt from "../../../domain/Payment/Receipt";
import ReceiptRepository from "../../Repositories/IReceiptRepository";

export default class Get {
    constructor(readonly receiptRepository: ReceiptRepository) {}

    async execute(paymentNumber: string): Promise<Receipt> {
        const receipt = await this.receiptRepository.get(paymentNumber)

        return receipt
    }
}