import ReceiptRepository from "../../Repositories/IReceiptRepository";

export default class Save {
    constructor(readonly receiptRepository: ReceiptRepository) {}

    execute(paymentNumber: string): void {
        this.receiptRepository.save(paymentNumber)
    }
}