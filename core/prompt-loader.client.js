import fs from "fs";
import path from "path";

export function loadPrompt(fileName) {
    const filePath = path.resolve(`./prompts/${fileName}`);
    return fs.readFileSync(filePath, "utf-8");
}