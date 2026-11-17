import { Button } from "../../../shared/ui/Button";
import { useImportMatch } from "../model/useImportMatch";
import { ImportMatchProps } from "../model/types";
import uploadIcon from "./cloud-upload.svg";

export function ImportMatchButton({ setLastImageMatch }: ImportMatchProps) {
    const { importMatch } = useImportMatch();

    return (
        <Button
            label="Загрузить матч"
            icon={uploadIcon}
            onClick={() => importMatch({setLastImageMatch})}
        />
    );
}