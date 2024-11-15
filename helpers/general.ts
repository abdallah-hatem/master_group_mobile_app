export const removeNullUndefined = (obj: any) => {
  const cleanedObj: any = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    // If the value is neither null nor undefined, add it to the cleaned object
    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        // Recursively clean arrays
        cleanedObj[key] = value.map((item) => (typeof item === "object" && !(item instanceof Date) ? removeNullUndefined(item) : item));
      } else if (typeof value === "object" && !Array.isArray(value) && !(value instanceof Date)) {
        // Recursively clean objects, but exclude Date objects
        cleanedObj[key] = removeNullUndefined(value);
      } else {
        cleanedObj[key] = value;
      }
    }
  });

  return cleanedObj;
};

export const findEmptyElements = (obj: any) => {
  const emptyKeys: string[] = [];

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    // Check if the value is empty (null, undefined, or empty string)
    if (value === null || value === undefined || (typeof value === "string" && value.trim() === "")) {
      emptyKeys.push(key);
    }
  });

  return emptyKeys;
};

