const recipeDB = [
    {
        id: 1, 
        name: 'demo', 
        desc: 'lorem...', 
        country: 'France', 
        ingredients: [
            '2 tomates',
            '3 pommes',
            '40gr sucre'
        ]
    }
];

const recipeController = {

    index: (req, res) => {
        const recipes = recipeDB.map(r => ({id: r.id, name: r.name}));
        // const recipes = recipeDB.map(r => {
        //     return { id: r.id, name: r.name}
        // });

        res.render('recipe/index', { recipes, count: recipes.length });
    },

    detail: (req, res) => {
        const { id } = req.params;

        const recipe = recipeDB.find(r => r.id === parseInt(id));

        if(!recipe) {
            return res.sendStatus(404);
        }

        res.render('recipe/detail', { recipe });
    },

    form: (req, res) => {
        res.render('recipe/add', {error: undefined});
    },


    formPost: (req, res) => {
        const data = req.body;
        console.log(data);

        if(!data.name) {
            return res.render('recipe/add', {
                error: 'Le nom est obligatoire'
            });
        }
        
        data.id = Math.max(...recipeDB.map(r => r.id)) + 1;

        recipeDB.push(data);
        res.redirect('/recipe');
    }

};

module.exports = recipeController;