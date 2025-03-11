const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://letri9820:RZIWbHa0gmPNnDeu@note-app.kc536.mongodb.net/?retryWrites=true&w=majority&appName=note-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!!!");
  } catch (error) {
    console.log(error)
    console.log("Fail to connect");
  }
}

module.exports = { connect };
