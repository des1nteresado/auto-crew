export const getStringQuery = (array, isObj = false) => {
  if (Array.isArray(array) && array.length > 0) {
    let query = '';

    array.forEach((element) => {
      if (array[array.length - 1] !== element) {
        query += `${isObj ? element._id : element},`;
      } else {
        query += `${isObj ? element._id : element}`;
      }
    });

    return query;
  }
  return '';
};
