const {
  data: {
    conference: { allSpeakers },
  },
} = require("./2021-speakers.json");

const rows = allSpeakers;

console.log(
  "External Id,First name,Middle name,Last name,Honorific,Job title,Company name,Bio"
);

rows.forEach(({ firstName, lastName, about }) =>
  console.log(`,${firstName},,${lastName},,,,${about}`)
);
