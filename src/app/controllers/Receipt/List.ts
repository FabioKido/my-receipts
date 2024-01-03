import Receipt from "../../../domain/Payment/Receipt";
import ReceiptRepository from "../../Repositories/IReceiptRepository";

export default class List {
    constructor(readonly receiptRepository: ReceiptRepository) {}

    async execute(): Promise<Receipt[]> {
        return this.receiptRepository.list()
    }
}