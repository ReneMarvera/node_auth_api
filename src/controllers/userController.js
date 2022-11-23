const userModel = require('../models/user');
const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken')

const SECRET_KEY = 'NOTESAPI';

const signup = async (req,res) => 
{
    // Existing User Check | Hashed Pass | User Creation | Token Generate

    const { name, user, email, password, age } = req.body;
    try
    {

        // Existing User Check
        const existing = await userModel.findOne({ email : email });
        if (existing) return res.status(200).json({message:'user already exists'});

        // Hashed Pass
        const passwordHashed = await bcrypt.hash(password,10);

        // User Creation
        const result = await userModel
        .create({
            name:       name,
            user:       user,
            email:      email,
            password:   passwordHashed,
            age:        age
        });

        // Token
        
        const token = jwt.sign({email : result.email, id : result._id},SECRET_KEY);
        res.status(201).json({user:result,token:token});

    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({message:'something went wrong'})
    }
}

const signin = async (req,res) => 
{
    const { email, password } = req.body;

    try
    {
        const existing = await userModel.findOne({ email : email });
        if (!existing) return res.status(400).json({message:'invalidad credentials'});

        const passwordMatch = await bcrypt.compare(password,existing.password);
        if(!passwordMatch) return res.status(400).json({message:'invalidad credentials'});

        const token = jwt.sign({email : existing.email, id : existing._id},SECRET_KEY);
        res.status(200).json({user:existing,token:token});

    }
    catch (error)
    {
        console.error(error);
        res.status(500).json({message:'something went wrong'})
    }
}

module.exports = { signup,signin }