import User from '../model/user.model.js';


export const create = async (req, res) => {
    try {

        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User not found" })
        }

        const savedData = await userData.save();
        res.status(200).json({ msg: "Data dave sucessfull" })
    } catch (error) {
        console.log(error.message);
    }
}

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "User not found" })
        }
        res.status(200).json(userData);
    } catch (error) {
        console.log(error.message);
    }
}


export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" })
        }
        res.status(200).json(userExist);
    } catch (error) {
        console.log(error.message);
    }
}


export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(401).json({ msg: "User not found" })
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: "Update Sucessfull" });
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "user not exist" })
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({ msg: "User deleted Sucessfull..." });
    } catch (error) {
        console.log(error.message);
    }
}