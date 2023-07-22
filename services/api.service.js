import axios from "axios"
import { getKeyValue, STORAGE_DICT } from "./storage.service.js"

export const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case "01":
            return "☀️"
        case "02":
            return "🌤️"
        case "03":
            return "☁️"
        case "04":
            return "☁️"
        case "09":
            return "🌧️"
        case "10":
            return "🌦️"
        case "11":
            return "🌩️"
        case "13":
            return "❄️"
        case "50":
            return "🌫️"
    }
}

export const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(STORAGE_DICT.token)
    if (!token) {
        throw new Error("API key is not defined. Set it via -t option")
    }
    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: token,
            units: "metric",
        },
    })

    return data
}
