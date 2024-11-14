db.test.find({ skills: { $eq: [] } }).project({ name: 1, skills: 1 })

// or
db.test.find({ skills: { $size: 0 } }).project({ name: 1, skills: 1 })