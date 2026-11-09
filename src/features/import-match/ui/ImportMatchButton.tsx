import { Button } from "../../../shared/ui/Button";
import { useImportMatch } from "../model/useImportMatch";
import { ImportMatchProps } from "../model/types";

export function ImportMatchButton({ setLastImageMatch }: ImportMatchProps) {
    const { importMatch } = useImportMatch();

    return (
        <Button
            label="Загрузить матч"
            onClick={() => importMatch({setLastImageMatch})}
        />
    );
}