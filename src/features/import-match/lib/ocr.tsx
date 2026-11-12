
import { PaddleOCR } from "@paddleocr/paddleocr-js";

const ocrPromise = PaddleOCR.create({
    lang: "en",
    ocrVersion: "PP-OCRv6",
    ortOptions: {
        backend: "auto"
    }
});

export async function recognizeImage(file: File) {
    const ocr = await ocrPromise;

    const [result] = await ocr.predict(file);

    return result.items;
}
