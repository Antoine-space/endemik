const login = (req, res) => {
  let user = {
    name: "Antoine",
    lastname: "Ern",
    age: 27,
  };
  res.render("pages/login", { user: user });
};

module.exports = login;
