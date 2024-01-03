import Payment from "../src/domain/Payment/Payment"

test('Deve criar um pagamento', () => {

    const today =  new Date()
    const payment = new Payment('000001', today)

    expect(payment.getPaymentNumber()).toBe('000001')
    expect(payment.getCreated()).toBe(today)
})