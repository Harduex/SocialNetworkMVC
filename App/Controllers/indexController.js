const Index = (req, res) => {
    res.render('index', { title: 'Express MVC', text: "World" });
};

export default Index;