// HOME
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const CONFIRM_ACCOUNT = "/confirm-account";

// COURSES
const COURSES = "/courses";
const NEW = "/new";
const MINE = "/mine";

// API
const DOCUMENTATION = "/documentation";
const BUY = "/buy"; //"/api/v1/buy";
const REFUND = "/refund"; //"/api/v1/refund";
const REMOVE = "/remove"; //"/api/v2/remove";
const EDIT = "/edit"; //"/api/v2/edit";

// API v1 v2
const API = "/api";
const V1 = "/v1";
const V2 = "/v2";

const routes = {
  api: API,
  v1: V1,
  v2: V2,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  confirm_account: CONFIRM_ACCOUNT,
  courses: COURSES,
  lnew: NEW,
  mine: MINE,
  documentation: DOCUMENTATION,
  buy: BUY,
  refund: REFUND,
  remove: REMOVE,
  edit: EDIT
};

export default routes;
