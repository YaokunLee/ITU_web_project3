import * as path from 'path';
import { fileURLToPath } from 'url';
import fs from "fs/promises";
const DATA_FILE = getDataFilePath();

export function getDataFilePath() {
    const currentFilePath = import.meta.url;
    const currentFileUrl = new URL(currentFilePath);
    const txtFileUrl = new URL('data.json', currentFileUrl);

    return fileURLToPath(txtFileUrl);
}



export async function save(alldata) {
    let result = JSON.stringify(alldata);
    await fs.writeFile(DATA_FILE, result);
}
