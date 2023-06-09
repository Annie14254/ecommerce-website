const withAuth = (req, res, next) => {
  if (req.session.logged_in) {
    next();
  } else {
    res.redirect("/user/login?login=failed");
  }
};

function slice(arr, start, end) {
  return arr.slice(start, end);
}

module.exports = { withAuth, slice };
