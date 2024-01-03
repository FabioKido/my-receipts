import ReceiptExporter from "../app/Exporters/IReceiptExporter";
import Receipt from "../domain/Payment/Receipt";

export default class ReceiptExporterMemory implements ReceiptExporter {

    constructor() {}

    export(receipt: Receipt): string {
        return receipt.paymentNumber
    }
}