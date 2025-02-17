export function encrypt(data: string) {
    return Buffer.from(data).toString("base64");
}  