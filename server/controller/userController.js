const db = require("../models/main");
const {Users} = db;

module.exports = {
    Register: async(req, res) => {
      try {  
        const {
            full_name, email, password
        } = req.body;
 
        const hash = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            full_name, email, password: hash
        });

        res.status(201).json({
            message: "User Registered",
            user: {
                id: newUser.user_id,
                fullName: newUser.full_name,
                email: newUser.email
            }
        });
    }
    catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
    }
}

