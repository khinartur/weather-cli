#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue, STORAGE_DICT } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token is not provided")
        return
    }
    try {
        await saveKeyValue(STORAGE_DICT.token, token)
        printSuccess("Token has been saved")
    } catch (e) {
        printError(e.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather("moscow")
}

initCLI()
