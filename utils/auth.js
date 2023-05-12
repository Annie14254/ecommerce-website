const withAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

function slice(arr, start, end) {
  return arr.slice(start, end);
}

module.exports = { withAuth, slice };
