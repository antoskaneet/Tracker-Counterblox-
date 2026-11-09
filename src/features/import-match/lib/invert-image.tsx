export async function invertImage(image: File): Promise<File> {
    const bitmap = await createImageBitmap(image);

    const canvas = document.createElement("canvas");

    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Не удалось создать Canvas context");
    }

    ctx.drawImage(bitmap, 0, 0);

    const imageData = ctx.getImageData(
        0,
        0,
        bitmap.width,
        bitmap.height
    );

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i]     = 255 - imageData.data[i];
        imageData.data[i + 1] = 255 - imageData.data[i + 1];
        imageData.data[i + 2] = 255 - imageData.data[i + 2];
    }

    ctx.putImageData(imageData, 0, 0);

    bitmap.close();

    const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
            if (result) {
                resolve(result);
            } else {
                reject(new Error("Не удалось обработать изображение"));
            }
        }, "image/png");
    });

    return new File([blob], image.name, {
        type: "image/png"
    });
}