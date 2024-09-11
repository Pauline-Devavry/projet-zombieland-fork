const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const saltRounds = 10;  

exports.register = async (req, res) => {
    const { name, first_name, email, password, confirmPassword } = req.body;

   
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Les mots de passe ne correspondent pas." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Cet utilisateur existe déjà." });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            first_name,
            email,
            password: hashedPassword, 
            confirmPassword
        });

        await newUser.save();

        return res.status(201).json({ message: "Utilisateur enregistré avec succès !" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erreur serveur, veuillez réessayer plus tard." });
    }
};




