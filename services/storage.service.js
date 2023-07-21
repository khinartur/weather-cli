import { homedir } from "os"
import { join } from "path"
import { promises } from "fs"

const configPath = join(homedir(), "weather-data.json")

export const STORAGE_DICT = {
    token: "token",
    city: "city",
}

export const saveKeyValue = async (key, value) => {
    let data = {}
    if (await isExist(configPath)) {
        const file = await promises.readFile(configPath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(configPath, JSON.stringify(data))
}

export const getKeyValue = async (key) => {
    if (await isExist(configPath)) {
        const file = await promises.readFile(configPath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

const isExist = async (filePath) => {
    try {
        await promises.stat(filePath)
        return true
    } catch (_) {
        return false
    }
}

