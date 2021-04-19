const Index = async (req, res) => {
    const user = await req.user;
    res.render('index', { title: 'Home', user: user.fullName });
};

export default Index;