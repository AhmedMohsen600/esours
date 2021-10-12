export function getItem(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function addItemToArray(key, item) {
  const array = getItem(key);
  array.push(item);
  setItem(key, array);
}

export function addItemToList(key, itemToAdd) {
  /**
   * get shortlist array
   * loop on the array
   * check if item exsit in shortlist
   * if exsist delete from the shortlist array
   * set the new item in rejected array
   */
  const shortlist = getItem(key);
  for (let item of shortlist) {
    if (itemToAdd === item) {
      shortlist.filter((f) => f !== itemToAdd);
      break;
    }
  }
}
