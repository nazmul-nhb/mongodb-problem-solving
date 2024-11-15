// db.massive.aggregate([
//     {
//         $group: {
//             _id: "$company",
//             totalBalance: { $sum: { $toDouble: { $substr: ["$balance", 1, -1] } } },
//         }
//     },
//     {
//         $sort: { totalBalance: -1 }
//     },
//     {
//         $limit: 2
//     },
//     {
//         $project: { _id: 0, company: "$_id", totalBalance: 1 }
//     }
// ])

// Alternative using $substrBytes (not always appropriate, working in this case somehow!)
db.massive.aggregate([
    {
        $group: {
            _id: "$company",
            totalBalance: { $sum: { $toDouble: { $substrBytes: ["$balance", 1, -1] } } },
        }
    },
    {
        $sort: { totalBalance: -1 }
    },
    {
        $limit: 2
    },
    {
        $project: { _id: 0, company: "$_id", totalBalance: 1 }
    }
])
