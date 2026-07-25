// require("dotenv").config();

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const Admin = require("./src/models/admin.model");

// async function seedAdmin() {
//   await mongoose.connect("mongodb+srv://user1234:userpassword@cluster0.pvdc2zu.mongodb.net/?appName=Cluster0");

//   const exists = await Admin.findOne({
//     email: "admin@leaddesk.com",
//   });

//   if (exists) {
//     process.exit();
//   }

//   const hashedPassword = await bcrypt.hash(
//     "Admin@123",
//     10
//   );

//   await Admin.create({
//     name: "Admin",
//     email: "admin@leaddesk.com",
//     password: hashedPassword,
//   });

//   console.log("Admin Created");

//   process.exit();
// }

// seedAdmin();