const wmoWeatherCategories = {
    "Clear Sky": {
      "0": "Clear sky",
    },
    "Partly Cloudy": {
      "1": "Mainly clear",
      "2": "Partly cloudy",
    },
    "Cloudy": {
      "3": "Mainly cloudy",
    },
    "Fog": {
      "45": "Mist",
      "48": "Fog",
    },
    "Drizzle": {
      "51": "Drizzle",
      "53": "Drizzle",
      "55": "Drizzle",
    },
    "Freezing Drizzle": {
      "57": "Freezing Drizzle",
      "56": "Freezing Drizzle",
    },
    "Rain": {
      "61": "Rain",
      "63": "Rain",
      "65": "Rain",
    },
    "Freezing Rain": {
      "66": "Freezing Rain",
      "67": "Freezing Rain",
    },
    "Snow Fall": {
      "71": "Snow Fall",
      "75": "Snow Fall",
      "73": "Snow Fall",
    },
    "Snow Grains": {
      "7": "Snow Grains",
    },
    "Snow": {
      "13": "Snow",
    },
    "Rain Showers": {
      "80": "Rain Showers",
      "81": "Rain Showers",
      "82": "Rain Showers",
    },
    "Snow Showers": {
      "85": "Snow Showers",
      "86": "Snow Showers",
    },
    "Thunderstorms": {
      "95": "Thunderstorm",
      "96": "Thunderstorm",
      "99": "Thunderstorm",
    },
  };
  
  const weatherIcons = {
    "Clear Sky": "☀️",
    "Partly Cloudy": "⛅",
    "Cloudy": "☁️",
    "Fog": "🌫️",
    "Drizzle": "🌧️",
    "Freezing Drizzle": "🌨️",
    "Rain": "🌧️",
    "Freezing Rain": "🌨️",
    "Snow Fall": "❄️",
    "Snow Grains": "❄️",
    "Snow": "❄️",
    "Rain Showers": "🌧️",
    "Snow Showers": "❄️",
    "Thunderstorms": "⛈️",
  };
  const translateWMOCode = (code)=> {
    for (const category in wmoWeatherCategories) {
      if (code in wmoWeatherCategories[category]) {
        return {category, icon:weatherIcons[category]};
      }
    }
    return "Unknown code";
  }

  module.exports = translateWMOCode
  
  