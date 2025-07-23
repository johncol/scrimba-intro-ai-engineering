export const getCurrentWeather = async ({ latitude, longitude }) => {
  try {
    const API_KEY =
      process.env.OPENWEATHER_API_KEY || "b02a86c877e003a669f1cdb28e746684";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(`Error invoking getCurrentWeather. Error: ${error.message}`)
    throw error;
  }
};

export const getCurrentWeatherTool = {
  type: "function",
  name: "getCurrentWeather",
  description: "Get the current whether for a location",
  parameters: {
    type: "object",
    properties: {
      latitude: {
        type: "number",
      },
      longitude: {
        type: "number",
      },
    },
    required: ["latitude", "longitude"],
    strict: true,
    additionalProperties: false,
  },
};

export const getLocation = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");

    if (!response.ok) {
      throw new Error(`Location API error: ${response.status}`);
    }

    const location = await response.json();

    return location;
  } catch (error) {
    console.log(`Error invoking getLocation. Error: ${error.message}`)
    throw error;
  }
};

export const getLocationTool = {
  type: "function",
  name: "getLocation",
  description: "Get the current location of the user",
  strict: true,
  parameters: {
    type: "object",
    properties: {},
    additionalProperties: false,
  },
};

const functions = {
  getLocation,
  getCurrentWeather,
};

export const callFunction = async (functionName, argumentAsString) => {
  const selectedFunction = functions[functionName];
  if (!selectedFunction) {
    throw new Error(`Unexpected function to be called "${functionName}"`);
  }

  let parsedArgument;
  try {
    parsedArgument = JSON.parse(argumentAsString);
  } catch (error) {
    throw new Error(
      `Failed to parse argument "${argumentAsString}". Error message: ${error.message}`
    );
  }

  let functionResult;
  try {
    functionResult = await selectedFunction(parsedArgument);
  } catch (error) {
    throw new Error(
      `Failed to execute function "${functionName}" with parsed argument "${parsedArgument}". Error message: ${error.message}`
    );
  }

  return functionResult;
};
