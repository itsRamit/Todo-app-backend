const UserService = require("../service/user_service");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await UserService.registerUser(email, password);
    res.json({ status: true, success: "User registered sucessfully" });
  } catch (e) {
    throw e;
  }
};

exports.login = async (res, req, next) => {
  try{
    const { email, password } = req.body;
  const user = await UserService.checkUser(email);
  if (!user) {
    throw new Error('User does not exist');
  }
  const verifyPassword = await user.comparePassword(password);
  if (!verifyPassword) {
    throw new Error(`Username or Password does not match`);
  }
  let tokenData = {
    _id: user._id,
    email: user.email,
  };

  const token = await UserService.generateJWT(tokenData, "secretKey", "12h");
  res.status(200).json({ status: true, token: token });
  }catch(e){
    console.log(e, 'err---->');
    next(e);
  }
};
