import PouchDB from "pouchdb-browser";
import { constants } from "../constants";

const dbName = "vite_pouchdb_test"
const localDB = new PouchDB(dbName, {auto_compaction: true});
const remoteDB = new PouchDB(`${constants.COUCH_URL}/${dbName}`, {skip_setup: true});

export const initialReplication = () => {
    localDB.replicate.from(remoteDB)
        .catch(err => {
            console.error(err);
        });
}

export const dbConn = {
    put: async (doc) => {
        await localDB.put(doc)
        .catch(err => console.error(err, "putDoc 18"));
    },
    query: async(queryObj, options) => {
        try {
            console.log(queryObj, options);
            let response = await localDB.query(queryObj, options);
            return response;
        } catch (err) {
            console.error(err, "dbQuery 25");
        }
    },
}

export const finalReplication = () => {
    localDB.replicate.to(remoteDB)
        .catch(err => {
            console.error(err, "final replication 25");
        })
}