module.exports = mongoose => {
    return mongoose.model(
        'person',
        mongoose.Schema(
            {
                first_name: String,
                last_name: String,
            },
            { timestamps: true }
        )
    );

};
