import Receipt from "../../domain/Payment/Receipt";

export default interface ReceiptExporter {
    export(receipt: Receipt): string
}