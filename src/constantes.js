const MAX_COUNT = 20;

const NO_DATA = "暂无搜索数据";

const LOADINF_TEXT = "loading...";

const HISTORY_TEXT = "History";

const URL = "https://api.github.com/graphql";

const SEARCH_TEXT = "Please input search in github";

const TOKEN =
  process.env.APP_GITHUB_CLIENT_SECRET ||
  "7b7cc672235587292be65d11d8ae729b14a0d162";


export {
  URL,
  TOKEN,
  NO_DATA,
  MAX_COUNT,
  SEARCH_TEXT,
  HISTORY_TEXT,
  LOADINF_TEXT,
};
