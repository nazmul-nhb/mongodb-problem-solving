db.massive.aggregate([
    { $match: { isActive: true, favoriteFruit: "banana" } },
    {
        $project: { name: 1, email: 1, favoriteFruit: 1 }
    }
])