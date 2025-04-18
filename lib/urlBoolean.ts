export function urlBoolean(url: string): boolean {
    try {
        const test = new URL(url);
        return test.protocol === "http:" || test.protocol === "https:";
    } catch {
        return false;
    }
}