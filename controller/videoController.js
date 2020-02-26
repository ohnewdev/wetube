export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "Video Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("changePassword", { pageTitle: "Delete Video" });
