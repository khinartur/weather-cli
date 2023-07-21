#!/usr/bin/env node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        // print help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
    // print weather
}

initCLI()
