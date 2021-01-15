const registerForm = (req, res) => {
    let user = {
      name: "Max",
      lastname: "C",
      age: 27,
    };
    res.render("pages/registerForm", { user: user });
  };
  
  module.exports = registerForm;
  