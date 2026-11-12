import type { ImportMatchProps } from "./types";

import { uploadImage } from "../lib/upload-image";
import { invertImage } from "../lib/invert-image";
import { fragmentationImage } from "../lib/fragmentation-image";
import { recognizeImage } from "../lib/ocr";
import { parseMatchPlayers } from "../lib/parseMatchPlayers";

import { createMatch, getMatchById } from "../../../entities";

export function useImportMatch() {
    async function importMatch({ setLastImageMatch }: ImportMatchProps) {
        const image = await uploadImage();

        if (image === null) return;

        setLastImageMatch?.(image);

        const invertedImage = await invertImage(image);

        const fragments: File[] = await fragmentationImage(invertedImage);

        const allItems: Awaited<ReturnType<typeof recognizeImage>> = [];

        for (const fragment of fragments) {
            const items = await recognizeImage(fragment);

            console.log("Результат OCR:", items);

            allItems.push(...items);
        }

        console.log("Весь распознанный текст:", allItems);

        const players = parseMatchPlayers(allItems);

        console.log("Игроки:", players);

        const matchId = await createMatch(players);

        console.log("Сохранён матч с ID:", matchId);

        const savedMatch = await getMatchById(matchId);

        console.log("Матч из базы данных:", savedMatch);

        return savedMatch;
    }

    return { importMatch };
}