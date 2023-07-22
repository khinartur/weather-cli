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

export const printWeather = (weatherResponse, icon) => {
    console.log(dedent`
        ${chalk.bgYellow(" WEATHER ")} in ${weatherResponse.name}
        ${icon} ${weatherResponse.weather[0].description}
        Temperature: ${weatherResponse.main.temp} (Feels like: ${weatherResponse.main.feels_like})
        Humidity: ${weatherResponse.main.humidity}
        Wind speed: ${weatherResponse.wind.speed}
    `);
}
