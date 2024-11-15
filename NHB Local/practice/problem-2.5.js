// db.massive.aggregate([
//     {
//         $sort: { age: 1 }
//     },
//     {
//         $facet: {
//             below30: [
//                 {
//                     $match: { age: { $lt: 30 } }
//                 },
//                 {
//                     $bucket: {
//                         groupBy: "$age",
//                         boundaries: [20, 25, 30],
//                         default: "Below 20",
//                         output: {
//                             "users": { $push: "$$ROOT" },

//                         }
//                     }
//                 },
//                 {
//                     $project: {
//                         _id: 0,
//                         ageGroup: "$_id",
//                         "users.name": 1,
//                         "users.age": 1
//                     }
//                 }
//             ],
//             above30: [
//                 {
//                     $match: { age: { $gt: 30 } }
//                 },
//                 {
//                     $bucket: {
//                         groupBy: "$age",
//                         boundaries: [30, 35, 40, 45, 50, 55, 60],
//                         default: "Above 60",
//                         output: {
//                             "users": { $push: "$$ROOT" },

//                         }
//                     }
//                 },
//                 {
//                     $project: {
//                         _id: 0,
//                         ageGroup: "$_id",
//                         "users.name": 1,
//                         "users.age": 1
//                     }
//                 }
//             ]
//         }
//     }
// ])

// alternative from chatGPT:
db.massive.aggregate([
    {
        $facet: {
            below30: [
                {
                    $match: { age: { $lt: 30 } }
                },
                {
                    $bucket: {
                        groupBy: "$age",
                        boundaries: [20, 25, 30],
                        default: "Below 20",
                        output: {
                            "user": { $push: "$$ROOT" }
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        ageGroup: "$_id",
                        user: {
                            $map: {
                                input: { $sortArray: { input: "$user", sortBy: { age: 1 } } },
                                as: "user",
                                in: { name: "$$user.name", age: "$$user.age" }
                            }
                        }
                    }
                }
            ],
            above30: [
                {
                    $match: { age: { $gt: 30 } }
                },
                {
                    $bucket: {
                        groupBy: "$age",
                        boundaries: [30, 35, 40, 45, 50, 55, 60],
                        default: "Above 60",
                        output: {
                            "user": { $push: "$$ROOT" }
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        ageGroup: "$_id",
                        users: {
                            $map: {
                                input: { $sortArray: { input: "$user", sortBy: { age: 1 } } },
                                as: "user",
                                in: { name: "$$user.name", age: "$$user.age" }
                            }
                        }
                    }
                }
            ]
        }
    }
])

// show age groups like x-y, a-b etc.

// Need to do some exercise on this... 