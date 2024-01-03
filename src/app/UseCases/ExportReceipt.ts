// Padrão de código: Command

export default class ExportReceipt {
    constructor(readonly paymentNumber: string) {}

    getPaymentNumber(): string {
        return this.paymentNumber
    }
}