import PouchDB from "pouchdb-browser";
import pouchAuth from "pouchdb-authentication";
import { constants } from "../constants";


PouchDB.plugin(pouchAuth);

const remoteDB = new PouchDB(`${constants.COUCH_URL}/_users`, {skip_setup: true});

const handleSignIn = async() => {
    try {
        return await remoteDB
                .login(constants.passcode, constants.passcode)
                .then ((response) => {
                    console.log({response}, "login response 15");
                    return response;
                });
    } catch (err) {
        console.log("handleSignIn 12", err);
        return err;
    }
};

export default handleSignIn;