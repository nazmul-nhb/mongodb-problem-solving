// db.test.find({ $or: [{ favoutiteColor: "Maroon" }, { favoutiteColor: "Blue" }] }).project({ name: 1, favoutiteColor: 1 })
// or
db.test.find({ favoutiteColor: { $in: ["Maroon", "Blue"] } }).project({ name: 1, favoutiteColor: 1 })