module.exports = mongoose => {
    return mongoose.model(
        'tutorial',
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

};
