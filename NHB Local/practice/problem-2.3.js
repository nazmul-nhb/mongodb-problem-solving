db.massive.aggregate([
    {
        $group: {
            _id: "$favoriteFruit",
            averageAge: { $avg: "$age" }
        },
    },
    {
        $project: { _id: 0, favFruit: "$_id", averageAge: { $round: ["$averageAge", 3] } }
    },
    {
        $sort: { averageAge: -1 }
    }
])