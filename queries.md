## Schedules

```graphql
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    schedules {
      day
      description
      intervals {
        begin
        end
        title
        sessions {
          type
          title
          description
          people {
            name
            about
            aboutShort
            image {
              url
            }
            company
            social {
              twitter
              homepage
            }
            location {
              country {
                name
              }
              city
            }
          }
          urls {
            slides
            web
            video
          }
        }
      }
    }
  }
}
```

```json
{
  "conferenceId": "react-finland-2021"
}
```

## Speakers

```graphql
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    allSpeakers {
      firstName
      lastName
      talks {
        day
        begin
        end
        title
        type
        description
        urls {
          slides
          web
          video
        }
      }
      workshops {
        title
        type
        description
      }
      about
      social {
        homepage
        github
        twitter
        linkedin
        twitch
      }
      image {
        url
      }
      country {
        code
      }
    }
  }
}
```

```json
{
  "conferenceId": "react-finland-2021"
}
```

## Sponsors

```graphql
  query SponsorQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      partners {
        ...SponsorFragment
      }
      goldSponsors {
        ...SponsorFragment
      }
      silverSponsors {
        ...SponsorFragment
      }
      bronzeSponsors {
        ...SponsorFragment
      }
      platformSponsors {
        ...SponsorFragment
      }
    }
  }

  fragment SponsorFragment on Contact {
    name
    social {
      homepage
      twitter
      facebook
      linkedin
    }
    about
    image {
      url
    }
  }
```

```json
{
  "conferenceId": "react-finland-2021"
}
```