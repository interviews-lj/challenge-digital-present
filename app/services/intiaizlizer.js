const postInitializer = async (Post) => {
    const posts = [
        {
            name: "9 Ridiculous Rules About CODING",
            content: "9 Ridiculous Rules About CODING9 Ridiculous Rules About CODING9 Ridiculous Rules About CODING9 Ridiculous Rules About CODING9 Ridiculous Rules About CODING"
        },
        {
            name: "The Lazy Way To CODING",
            content: "The Lazy Way To CODINGThe Lazy Way To CODINGThe Lazy Way To CODINGThe Lazy Way To CODINGThe Lazy Way To CODINGThe Lazy Way To CODINGThe Lazy Way To CODING"
        },
        {
            name: "Secrets To Getting CODING To Complete Tasks Quickly And Efficiently",
            content: "Secrets To Getting CODING To Complete Tasks Quickly And EfficientlySecrets To Getting CODING To Complete Tasks Quickly And EfficientlySecrets To Getting CODING To Complete Tasks Quickly And EfficientlySecrets To Getting CODING To Complete Tasks Quickly And Efficiently" 
        },
        {
            name: "How To Win Clients And Influence Markets with CODING",
            content: "HowHow To Win Clients And Influence Markets with CODING To Win Clients And Influence Markets with CODINGHow To Win Clients And Influence Markets with CODING"        
        },
        {
            name: "Take The Stress Out Of CODING",
            content: "Take The Stress Out Of CODINGTake The Stress Out Of CODINGTake The Stress Out Of CODINGTake The Stress Out Of CODINGTake The Stress Out Of CODING"        
        },
        {
            name: "Revolutionize Your CODING With These Easy-peasy Tips",
            content: "Revolutionize Your CODING With These Easy-peasy TipsRevolutionize Your CODING With These Easy-peasy TipsRevolutionize Your CODING With These Easy-peasy TipsRevolutionize Your CODING With These Easy-peasy Tips"
        },
        {
            name: "In 10 Minutes, I'll Give You The Truth About CODING",
            content: "In 10 Minutes, I'll Give You The Truth About CODINGIn 10 Minutes, I'll Give You The Truth About CODINGIn 10 Minutes, I'll Give You The Truth About CODINGIn 10 Minutes, I'll Give You The Truth About CODING" 
        },
        {
            name: "Got Stuck? Try These Tips To Streamline Your CODING",
            content: "Got Stuck? Try These Tips To Streamline Your CODINGGot Stuck? Try These Tips To Streamline Your CODINGGot Stuck? Try These Tips To Streamline Your CODINGGot Stuck? Try These Tips To Streamline Your CODING" 
        },
    ]

    await posts.map(async post => {
        await Post.create(post).catch(err => {
            console.log("Error initializng posts: ", err);
        });
    })
};

module.exports = postInitializer;