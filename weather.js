#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { getKeyValue, saveKeyValue, STORAGE_DICT } from './services/storage.service.js'

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

const saveCity = async (city) => {
    if (!city.length) {
        printError("City is not provided")
        return
    }
    try {
        await saveKeyValue(STORAGE_DICT.city, city)
        printSuccess("City has been saved")
    } catch (e) {
        printError(e.message)
    }
};

const getForecast = async () => {
    try {
        const city =
            process.env.CITY ?? (await getKeyValue(STORAGE_DICT.city))
        const weather = await getWeather(city)
        console.log(weather);
    } catch (e) {
        if (e?.response?.status === 404) {
            printError("Wrong city provided")
            return
        }
        if (e?.response?.status === 401) {
            printError("Wrong token provided")
            return
        }
        printError(e.message)
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
        return
    }
    if (args.s) {
        saveCity(args.s)
        return
    }
    if (args.t) {
        saveToken(args.t)
        return
    }
    getForecast()
}

initCLI()
