import ReceiptExporter from "../Exporters/IReceiptExporter";
import ReceiptRepository from "../Repositories/IReceiptRepository";
import ExportReceipt from "./ExportReceipt";

export default class ExportReceiptHandler {

    constructor(readonly receiptExporter: ReceiptExporter, readonly receiptRepository: ReceiptRepository) {}

    async handler(command: ExportReceipt): Promise<string> {
        const receipt = await this.receiptRepository.get(command.getPaymentNumber())

        return this.receiptExporter.export(receipt)
    }
}