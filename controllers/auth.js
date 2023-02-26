const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.redirect("/");
  }
};
