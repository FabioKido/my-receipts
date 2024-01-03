// Camada Azul da Clean Arch

import ExportReceipt from "../../src/app/UseCases/ExportReceipt"
import ExportReceiptHandler from "../../src/app/UseCases/ExportReceiptHandler"
import ReceiptExporterMemory from "../../src/infra/ReceiptExporterMemory"
import ReceiptRepositoryMemory from "../../src/infra/ReceiptRepositoryMemory"

test('Deve exportar um recibo', async function() {
    const receiptRepository = new ReceiptRepositoryMemory()
    receiptRepository.save('01120')

    const receiptExporter = new ReceiptExporterMemory()
    const exportReceiptHandler = new ExportReceiptHandler(receiptExporter, receiptRepository)
    const exportReceipt = new ExportReceipt('01120')
    const paymentNumber = await exportReceiptHandler.handler(exportReceipt)

    expect(paymentNumber).toBe('01120')
})