import User from "../models/user.model.js"

const registerUser = async (req, res)=>{
    // collecting the Data from req body 
    // check if data comes or not 
    // make a User Object and push into database 

    const { username, email, number, password} = req.body;

    if(
        [username, email, number, password].some((field)=>field ==="")
    ) {
         return res.status(400).json({
            success:false,
            message: "All fields are mandatory",
            error:error,
            data:{}
         })
    }
    // User giving all details correctly
    //check if user is Already exist or not 
    const existedUser = await User.findOne({
        $or: [{email}, {number}]
    });

    if(existedUser){
        return res.status(400).json({
            message: "user already exist "
        }) 
    }

    // Create a object and entry into the Database 
    const user = await User.create({
        username,
        email, 
        number,
        password
    });

    // check if user is created into the Database or not 
    const createdUser = await User.findById(user._id).select("-password");
    if(!createdUser){
         return res.status(500).json({
            message: " something went wrong with registering the user"
         })
    }

    return res.status(201).json({
        success: true,
        message: "user successfully created in the database",
        error:{},
        data: createdUser
    })
}

export {
    registerUser
}