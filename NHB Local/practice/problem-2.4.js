db.massive.aggregate([
    {
        $match: { "friends": { $exists: true, $ne: [] } }
    },
    {
        $unwind: "$friends"
    },
    {
        $match: { "friends.name": /^W/ }
    },
    {
        $group: {
            _id: "$_id",
            name: { $first: "$name" },
            uniqueFriends: { $addToSet: "$friends.name" },
        }
    },
    {
        $project: { name: 1, friends: "$uniqueFriends" }
    }
])