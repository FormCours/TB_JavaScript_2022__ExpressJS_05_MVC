

const authController = {

    login : async (req, res) => {
        res.render('auth/login');
    },
    
    loginPost : async (req, res) => {
        const { pseudo, password } = req.body;
        
        // TODO Check DB
        if(pseudo !== 'Zaza' || password !== 'Test1234=') {
            return res.render('auth/login');
        }
        
        // Login in session
        req.session.userId = 42;
        req.session.userPseudo = 'Zaza';
        
        res.redirect('/');
    },
    
    register : async (req, res) => {
        res.render('auth/register');
    },
    
    registerPost : async (req, res) => {
        // TODO Add Account in DB
        // TODO Login session

        res.sendStatus(501);
    },
    
    logout : async (req, res) => {
        // Logout in session
        req.session.destroy();

        res.redirect('/');
    }

}

module.exports = authController;