import { getDB } from "./mongooseConnection";

const DB = getDB();

//#region schemas
const MEDIA_SCHEMA = DB.Schema({
  name: String,
  imgLink: String,
  homepage: String
});
//#endregion schemas

//#region models
const Media = DB.model("Media", MEDIA_SCHEMA);
//#endregion models

module.exports = {
  Media
};
