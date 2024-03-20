const getFormattedDate = (dateValue, value, type, inMS) => {
  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(dateValue);
  let options;

  if (type === "date") {
    options = {
      // weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getFormattedDate };
