
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.reduce((result, item, index) => {
    return index % 2 == 0? result.concat(item) : result.concat(item.reverse());
  }, []);
}
