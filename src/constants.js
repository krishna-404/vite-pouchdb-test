const currentURL = window.location.href;
const isRemote = currentURL.slice(0,8);

let COUCH_URL;
if(isRemote === "https://"){
  // ========production========
  COUCH_URL = "https://be.smartagent.one:6984";
} else {
  // ==========development=======
  COUCH_URL = "http://localhost:5984";
};


export const constants = {
    passcode:"demo",
    COUCH_URL:COUCH_URL
}