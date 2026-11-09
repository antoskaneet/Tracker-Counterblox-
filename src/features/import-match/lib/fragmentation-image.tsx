
type FragmentCoordinates = {
    x: number;
    y: number;
    width: number;
    height: number;
};

type Resolution = {
    width: number;
    height: number;
};

const resolutions: Record<string, FragmentCoordinates[]> = {

    "1920x1080": [
        { x: 772, y: 266, width: 290, height: 185 },
        { x: 1075, y: 266, width: 52, height: 187 },
        { x: 1133, y: 264, width: 62, height: 192 },

        { x: 771, y: 623, width: 233, height: 184 },
        { x: 1085, y: 623, width: 45, height: 183 },
        { x: 1145, y: 628, width: 50, height: 179 },
    ],

    "1600x900": [

    ],

    "1366x768": [

    ],

    "1280x720": [

    ],

    "1280x1024": [

    ],

    "1024х768": [

    ],
};

export async function fragmentationImage(image: File): Promise<File[]> {

    const bitmap = await createImageBitmap(image);

    const resolution = `${bitmap.width}x${bitmap.height}`;

    const coordinates = resolutions[resolution];

    if (!coordinates) {
        bitmap.close();
        throw new Error(`Разрешение ${resolution} пока не поддерживается`);
    }

    const fragments: File[] = [];

    for (const coordinate of coordinates) {

        const { x, y, width, height } = coordinate;

        if (
            x < 0 ||
            y < 0 ||
            width <= 0 ||
            height <= 0 ||
            x + width > bitmap.width ||
            y + height > bitmap.height
        ) {
            continue;
        }

        const canvas = document.createElement("canvas");

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
            throw new Error("Не удалось создать Canvas context");
        }

        ctx.drawImage(
            bitmap,
            x, y, width, height,
            0, 0, width, height
        );

        const blob = await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob((result) => {
                if (result) resolve(result);
                else reject(new Error("Не удалось создать фрагмент"));
            }, "image/png");
        });

        const fragment = new File(
            [blob],
            `fragment_${fragments.length}.png`,
            { type: "image/png" }
        );

        fragments.push(fragment);
        /* визуализация
        const img = document.createElement("img");

        img.src = URL.createObjectURL(fragment);
        img.style.width = "200px";
        img.style.height = "auto";
        img.style.margin = "10px";
        img.style.border = "2px solid red";

        document.body.appendChild(img);
        */
    } 

    bitmap.close();

    return fragments;
}
