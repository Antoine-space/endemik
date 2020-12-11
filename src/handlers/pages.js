const home = (req, res) => {
  let user = {
    name: "Valentin",
    lastname: "Brd",
    age: 27,
  };
  res.render("pages/home", { user: user });
};

const contact = (req, res) => {
  res.render("pages/contact");
};

module.exports = {
    home,
    contact
}