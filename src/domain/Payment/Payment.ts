export default class Payment {
    private paymentNumber: string
    private created: Date

    constructor(paymentNumber: string, created: Date) {
        this.paymentNumber = paymentNumber
        this.created = created
    }

    public getPaymentNumber(): string {
        return this.paymentNumber
    }
     
    public getCreated(): Date {
        return this.created
    }
}