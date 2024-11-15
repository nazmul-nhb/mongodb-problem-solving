db.test.updateOne(
    { email: "amccurry3@cnet.com" },
    {
        $pull: {
            skills: {
                "name": "KOTLIN",
            }
        }
    }
)

db.test.findOne({ email: "amccurry3@cnet.com" })