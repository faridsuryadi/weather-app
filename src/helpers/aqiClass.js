const classifyAQI = (aqi) => {
    let category, color;
  
    if (aqi >= 0 && aqi <= 50) {
      category = "Good";
      color = "green";
    } else if (aqi > 50 && aqi <= 100) {
      category = "Moderate";
      color = "#ffde17";
    } else if (aqi > 100 && aqi <= 150) {
      category = "Unhealthy for Sensitive Groups";
      color = "orange";
    } else if (aqi > 150 && aqi <= 200) {
      category = "Unhealthy";
      color = "red";
    } else if (aqi > 200 && aqi <= 300) {
      category = "Very Unhealthy";
      color = "purple";
    } else {
      category = "Hazardous";
      color = "maroon";
    }
  
    return { category, color };
  };
  
  module.exports = classifyAQI