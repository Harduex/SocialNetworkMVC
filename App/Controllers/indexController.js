const Index = async (req, res) => {
    const user = await req.user;
    res.render('index', { title: user.fullName, user: user.fullName });
};

export default Index;