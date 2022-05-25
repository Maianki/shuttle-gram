export const getPostTime = (postCreatedAt) => {
  let diff = new Date() - new Date(postCreatedAt); // the difference in milliseconds

  if (diff < 1000) {
    // less than 1 second
    return "right now";
  }

  let sec = Math.floor(diff / 1000); // convert diff to seconds

  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + " min. ago";
  }

  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = new Date(postCreatedAt);
  d = ["0" + d.getDate(), "0" + (d.getMonth() + 1), "" + d.getFullYear()].map(
    (component) => component.slice(-2)
  ); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join("/");
};
