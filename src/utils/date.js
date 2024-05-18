import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function humanize(date) {
  dayjs.extend(relativeTime);

  return dayjs(date).fromNow();
}

export { humanize };
