import axios from "axios"
import { getKeyValue, STORAGE_DICT } from "./storage.service.js"

export const getWeather = async (city) => {
    const token = await getKeyValue(STORAGE_DICT.token)
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
