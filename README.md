# Create a NodeJS GraphQL Server

## Setup

```bash
hub clone notrab/graphql-server-tutorial
yarn
brew services start mongodb
export MONGODB_URI=mongodb://localhost/mysite
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
