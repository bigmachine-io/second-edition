module.exports = (n) => {
  //build the grid we'll use for multipliers
  //you can use an array here or an object
  //I think objects read easier
  var grid = {};
  for (var i = 2; i <= n; i++) {
    grid[i]={marked: false};
  }
  //the multiplier limit
  const limit = Math.sqrt(n);
  //loop up to limit
  for (var i = 2; i <= limit; i++) {
    //figure out the multiples of i
    for(var x = i + i; x <= n; x += i){
      //mark the multiples of i
      grid[x].marked = true;
    }
  }
  //the ouput - only return the numbers
  //from the grid that weren't marked
  var out =[];
  for (var i = 2; i <= n; i++) {
    if(!grid[i].marked) out.push(i);
  }
  return out;
};