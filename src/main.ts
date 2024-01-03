// Camada Azul da Clean Arch

import express, {Request, Response} from "express"
import Save from "./app/controllers/Receipt/Save"
import Get from "./app/controllers/Receipt/Get"
import ExportReceiptHandler from "./app/UseCases/ExportReceiptHandler"
import ExportReceipt from "./app/UseCases/ExportReceipt"
import ReceiptRepositoryMemory from "./infra/ReceiptRepositoryMemory"
import ReceiptExporterMemory from "./infra/ReceiptExporterMemory"
import List from "./app/controllers/Receipt/List"

const app = express()

app.use(express.json())

const receiptRepository = new ReceiptRepositoryMemory()

app.post('/', async (req: Request, res: Response) => {
    const saveReceipt = new Save(receiptRepository)
    saveReceipt.execute(req.body.paymentNumber)

    res.status(201).json({
        message: "receita regitrada"
    })
})

app.get('/:paymentNumber', async (req: Request, res: Response) => {
    const getReceipt = new Get(receiptRepository)
    const receipt = await getReceipt.execute(req.params.paymentNumber)

    const receiptExporter = new ReceiptExporterMemory()
    const exportReceiptHandler = new ExportReceiptHandler(receiptExporter, receiptRepository)
    const exportReceipt = new ExportReceipt(receipt.paymentNumber)
    const paymentNumber = await exportReceiptHandler.handler(exportReceipt)

    res.status(200).json({
        receipt,
        message: `recibo ${paymentNumber} exportado!`
    })
})

app.get('/', async (req: Request, res: Response) => {
    const getReceipts = new List(receiptRepository)
    const receipts = await getReceipts.execute()

    res.status(200).json(receipts)
})

app.listen(3000, () => console.log('server started...'))