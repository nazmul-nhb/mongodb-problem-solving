db.test.updateOne(
    { email: "amccurry3@cnet.com" },
    {
        $addToSet: {
            skills: {
                "name": "Python",
                "level": "Beginner",
                "isLearning": true
            }
        }
    }
)

db.test.findOne({ email: "amccurry3@cnet.com" })