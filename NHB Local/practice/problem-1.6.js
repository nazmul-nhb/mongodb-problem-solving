db.test.updateOne(
    { email: "amccurry3@cnet.com" },
    {
        $addToSet: {
            languages: "Spanish"
        }
    }
)

db.test.findOne({ email: "amccurry3@cnet.com" })