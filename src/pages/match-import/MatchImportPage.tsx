import { useState } from "react";
import { ImportMatchButton } from "../../features/import-match/ui/ImportMatchButton";
import "./MatchImportPage.css";

export function ImportMatchPage() {
    const [last_image_match, setLastImageMatch] = useState<File | null>(null);

    return (
        <div className="import-match-page">

            <div className="image-container">
                {last_image_match && (
                    <img
                        src={URL.createObjectURL(last_image_match)}
                        className="match-image"
                        alt="Match scoreboard"
                    />
                )}
            </div>

            <div className="import-button-container">
                <ImportMatchButton setLastImageMatch={setLastImageMatch} />
            </div>

        </div>
    );
}