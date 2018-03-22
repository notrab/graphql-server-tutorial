module.exports = {
  Query: {
    events: (root, args, ctx) => {
      return new Promise((resolve, reject) => {
        const { skip, first } = args
        const { db } = ctx

        db.Event.find({})
          .skip(skip)
          .limit(first)
          .exec()
          .then(data => resolve(data))
          .catch(errors => reject(errors))
      })
    },

    event: (root, args, ctx) => {
      return new Promise((resolve, reject) => {
        const { id } = args
        const { db } = ctx

        db.Event.findById(id)
          .exec()
          .then(data => resolve(data))
          .catch(errors => reject(errors))
      })
    }
  },

  Mutation: {
    createEvent: (root, args, ctx) => {
      return new Promise((resolve, reject) => {
        const { data } = args
        const { db } = ctx
        const newEvent = new db.Event(data)

        newEvent
          .save()
          .then(data => resolve(data))
          .catch(errors => reject(errors))
      })
    }
  }
}
