function knapsack(arr1, arr2, wt) {
    let size = arr1.length;
    let arr3 = [];
    var weight = wt;
    var profit = 0;
    var j = 0;
    for (var i = 0; i < size; i++) {
      var b = [arr1[i], arr2[i]];
      arr3.push(b);
    }
    while (weight > 0) {
      if (arr3[j][1] <= weight) {
        profit = profit + arr3[j][0];
        console.log(profit,j)
        
        weight = weight - arr3[j][1];
        j++;
        console.log(weight,"weight")
      } else {
          console.log((arr3[j][0] / arr3[j][1]),"val")
        profit = profit + (arr3[j][0] / arr3[j][1]) * weight;
        weight = 0;
      }
    }
    console.log(profit,)
  }
  
  var list1=[500];
  var list2 =[30]
  
  knapsack(list1,list2,10)