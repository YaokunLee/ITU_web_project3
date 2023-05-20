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
export async function getBasketByUserName(name) {
  let userData = await getAllUserData();
  let users = userData.filter(user => user.name === name)
  if (users.length > 0) {
    return users[0].basket
  } else {
    throw new Error(`abc no such user: ${name}`);
  }
}

// get gustomer by ID
export async function updateBasketByUserName(name, newBasket) {
  let allData = await getAllData();
  // 查找对应的用户
  const userIndex = allData.user_data.findIndex(user => user.name === name);
  if (userIndex !== -1) {
    allData.user_data[userIndex].basket = newBasket;
    save(allData);
    return allData.user_data[userIndex].basket;
  } else {
    throw new Error(`updateBasketByUserName no such user ${userName}`);
  }
}

export async function updateOneItemInBasket(userName, newItem) {
  let allData = await getAllData();
  // 查找对应的用户
  const userIndex = allData.user_data.findIndex(user => user.name === userName);
  if (userIndex !== -1) {
    // 查找新item对应的旧item
    const itemIndex = allData.user_data[userIndex].basket.findIndex(item => item.wine_id === newItem.wine_id);
    if (itemIndex !== -1) {
      // 替换旧item
      allData.user_data[userIndex].basket[itemIndex] = newItem;
    } else {
      // 添加新item
      allData.user_data[userIndex].basket.push(newItem);
    }
    save(allData);
    return allData.user_data[userIndex].basket;
  } else {
    throw new Error(`updateOneItemInBasket no such user ${userName}`);
  }
}

export async function deleteOneItemInBasket(userName, itemId) {
  let allData = await getAllData();
  // 查找对应的用户
  const userIndex = allData.user_data.findIndex(user => user.name === userName);
  if (userIndex !== -1) {
    // 查找新item对应的旧item
    const itemIndex = allData.user_data[userIndex].basket.findIndex(item => item.wine_id.toString() === itemId);
    if (itemIndex !== -1) {
      allData.user_data[userIndex].basket.splice(itemIndex, 1);
      save(allData);
      return allData.user_data[userIndex].basket;
    } else {
      throw new Error(`updateOneItemInBasket no such item in Basket ${userName}`);
    }
  } else {
    throw new Error(`updateOneItemInBasket no such user ${userName}`);
  }
}
