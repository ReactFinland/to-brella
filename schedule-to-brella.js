const {
  data: {
    conference: { schedules },
  },
} = require("./2021-schedule.json");

const rows = schedules.flatMap(({ day, intervals }) =>
  intervals
    .flatMap(({ begin, end, sessions }) =>
      sessions.flatMap(
        ({ type, title, description }) =>
          type !== "WORKSHOP" && {
            id: "",
            external_id: "",
            start_time: day + " " + begin + ":00",
            duration: durationInMinutes(begin, end),
            reservable: "FALSE",
            title,
            subtitle: "",
            location: "YouTube",
            content: "", // description.replace("\n", "\\n"),
            tags: "",
          }
      )
    )
    .filter(Boolean)
);

console.log(
  "id,external_id,start_time,duration,reservable,title,subtitle,location,content,tags"
);

rows.forEach(
  ({
    id,
    external_id,
    start_time,
    duration,
    reservable,
    title,
    subtitle,
    location,
    content,
    tags,
  }) =>
    console.log(
      `${id},${external_id},${start_time},${duration},${reservable},${title},${subtitle},${location},${content},${tags}`
    )
);

function durationInMinutes(a, b) {
  const [aH, aM] = a.split(":");
  const [bH, bM] = b.split(":");

  return (parseInt(bH) - parseInt(aH)) * 60 + (parseInt(bM) - parseInt(aM));
}
