import { useState } from "react";
import { ImportMatchButton } from "../../features/import-match/ui/ImportMatchButton";

export function ImportMatchPage() {
    const [last_image_match, setLastImageMatch] = useState<File | null>(null);

    return (
        <>
            <ImportMatchButton setLastImageMatch={setLastImageMatch} />

            {last_image_match && (
                <img
                    src={URL.createObjectURL(last_image_match)}
                    width={500}
                />
            )}
        </>
    );
}