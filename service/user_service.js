const Usermodel = require("../models/user_model");
const jwt = require("jsonwebtoken");

class UserService {
  static async registerUser(email, password) {
    try {
      const user = new Usermodel({ email, password });
      return await user.save();
    } catch (e) {
      throw e;
    }
  }

  static async checkUser(email) {
    try {
      const check = Usermodel.findOne({ email });
      return check;
    } catch (e) {
      throw e;
    }
  }

  static async generateJWT(tokenData, secretKey, jwt_exp) {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_exp });
  }
}

module.exports = UserService;
