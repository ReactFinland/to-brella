const {
  data: {
    conference: { partners, goldSponsors, silverSponsors, bronzeSponsors },
  },
} = require("./2021-sponsors.json");

const rows = generateRows("Partners", partners)
  .concat(generateRows("Gold", goldSponsors))
  .concat(generateRows("Silver", silverSponsors))
  .concat(generateRows("Bronze", bronzeSponsors));

console.log(
  "Id,External Id,Name,Category,Subtitle,Enable Chat,Website,Facebook,Twitter,Linkedin,Content,Logo,Media type,Media title,Media URL"
);

rows.forEach(
  ({
    id,
    external_id,
    name,
    category,
    subtitle,
    enableChat,
    website,
    facebook,
    twitter,
    linkedin,
    content,
    logo,
    mediaType,
    mediaTitle,
    mediaURL,
  }) =>
    console.log(
      `${id},${external_id},${name},${category},${subtitle},${enableChat},${website},${facebook},${twitter},${linkedin},${content},${logo},${mediaType},${mediaTitle},${mediaURL}`
    )
);

function generateRows(category, data) {
  return data.map(
    ({
      name,
      social: { homepage, twitter, facebook, linkedin },
      about,
      image: { url },
    }) => ({
      id: "",
      external_id: "",
      name,
      category,
      subtitle: "",
      enableChat: "FALSE",
      website: homepage,
      facebook,
      twitter,
      linkedin,
      content: about,
      logo: url,
      mediaType: "",
      mediaTitle: "",
      mediaURL: "",
    })
  );
}
