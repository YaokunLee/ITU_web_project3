import * as fs from "fs/promises";
import {getDataFilePath, save} from "../common.js";

const DATA_FILE = getDataFilePath();

// return all customer from file
export async function getAllUserData() {
  try {
    let data = await fs.readFile(DATA_FILE);
    let allData = JSON.parse(data);
    return allData.user_data;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// return all customer from file
export async function getAllData() {
  try {
    let data = await fs.readFile(DATA_FILE);
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with ampty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

// get gustomer by ID
export async function getUserByName(name) {
  let userData = await getAllUserData();
  let userIndex = userData.findIndex(user => user.name === name)
  if (userIndex !== -1) {
    return userData[userIndex]
  } else {
    throw new Error(`no such user: ${name}`);
  }
}

// get gustomer by ID
export async function addOneUser(newUserInfo) {
  const name = newUserInfo.name;
  let allData = await getAllData();
  let userData = allData.user_data;

  if (!newUserInfo.hasOwnProperty('basket')) {
    newUserInfo.basket = [];
  }
  const userIndex = userData.findIndex(user => user.name === name);
  if (userIndex !== -1) {
    userData[userIndex] = newUserInfo;
  } else {
    userData.push(newUserInfo);
  }
  save(allData);
  const userIndex2 = userData.findIndex(user => user.name === name);
  return userData[userIndex2];
}