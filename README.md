# Create a NodeJS GraphQL Server

Don't forget to run `yarn` to install the dependencies. You can find out how to install Yarn on their [website](https://yarnpkg.com).

Run the development server using `nodemon src`

You can watch how I created this on [YouTube](https://www.youtube.com/watch?v=0hOi7biFLf0).

Please subscribe if you find this useful.

Happy Coding!

---

## Setup

```bash
brew services start mongodb
export MONGODB_URI=mongodb://localhost/ynnoj
yarn dev
open http://localhost:4000
```

### Example mutation

j

```graphql
mutation {
  createEvent(data: { name: "Party", date: "2018-05-16T20:54:35.630Z" }) {
    id
    name
    date
  }
}
```

### Get all events

After you create some above...

```graphql
{
  events {
    id
    name
  }
}
```

### Get an event by ID

Get an ID from one of the events above

```graphql
{
  events(id: "<ID_HERE>") {
    id
    name
  }
}
```
