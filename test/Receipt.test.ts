import Payment from "../src/domain/Payment/Payment"
import Receipt from "../src/domain/Payment/Receipt"

test('Deve criar um recibo', () => {
    const payment: Payment = new Payment('010101', new Date())

    const receipt = new Receipt(payment.getPaymentNumber())

    expect(receipt.paymentNumber).toBe('010101')
})