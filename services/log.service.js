import chalk from "chalk"
import dedent from "dedent-js"

export const printError = (error) => {
    console.log(chalk.bgRed(" ERROR ") + " " + error)
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + message)
}

export const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan(" HELP ")}
        Without args — print weather
        -s [CITY] for city setup
        -h for help output
        -t [API_KEY] for API key setup
    `);
}
