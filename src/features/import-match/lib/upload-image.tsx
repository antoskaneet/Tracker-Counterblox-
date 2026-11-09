export function uploadImage(): Promise<File | null> {
    return new Promise((resolve) => {
        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/*";

        input.onchange = () => {
            if (input.files && input.files.length > 0) {
                resolve(input.files[0]);
            } else {
                resolve(null);
            }
        };

        input.click();
    });
}