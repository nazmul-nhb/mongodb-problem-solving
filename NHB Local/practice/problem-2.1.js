db.massive.aggregate([
    { $match: { isActive: true } },
    {
        $group: {
            _id: "$gender",
            count: { $sum: 1 }
        },
    },
    {
        $project: { _id: 0, gender: "$_id", count: 1 }
    }
])