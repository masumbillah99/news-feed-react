function getDate(dateString, format) {
  const date = new Date(dateString);
  let options = {};

  switch (format) {
    case "full":
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
      break;

    case "date":
      options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      break;

    case "time":
      options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      break;
    default:
      break;
  }

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

export { getDate };

// Example usage:
// const publishedAt = "2024-02-07T09:53:00Z";

// Full date and time
// console.log(formatDate(publishedAt, 'full'));

// Only date
// console.log(formatDate(publishedAt, 'date'));

// Only time
// console.log(formatDate(publishedAt, 'time'));
