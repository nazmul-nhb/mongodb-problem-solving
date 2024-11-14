// db.test.find({
//     $and: [
//         { "skills.name": "JAVA" },
//         { "skills.name": "JAVASCRIPT" }
//     ]
// })
//     .project(({ name: 1, skills: 1 }))

db.test.find({
    "skills.name": { $all: ["JAVA", "JAVASCRIPT"] }
})
    .project(({ name: 1, skills: 1 }))
