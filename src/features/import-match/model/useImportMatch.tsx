import { ImportMatchProps } from "./types";
import { uploadImage } from "../lib/upload-image";
import { invertImage } from "../lib/invert-image";
import { fragmentationImage } from "../lib/fragmentation-image";

export function useImportMatch() {
    async function importMatch({setLastImageMatch}: ImportMatchProps) {
        var image = await uploadImage()
        if (image === null) return;
        setLastImageMatch?.(image);

        var inverted_image = await invertImage(image);

        var fragments: File[] = await fragmentationImage(inverted_image);
        
    }



    return { importMatch };
}