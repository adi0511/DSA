function jobSeq(arr1, arr2) {
    var maxhr = Math.max(...arr2);
    var length = arr1.length;
    var profit = 0;
    let arr3 = [];
    var hrList = [];
    for (var i = 0; i < length; i++) {
      arr3.push([arr1[i], arr2[i]]);
    }
    for (var i = 0; i < maxhr; i++) {
      hrList.push(0);
    }
    // console.log(arr3,hrList);
    for (var i = 0; i < length; i++) {
      for (var j = maxhr - 1; j >= 0; j--) {
        console.log(i,j)
        if (hrList[j] === 0 && j+1 <= arr3[i][1]) {
          profit = profit + arr3[i][0];
          hrList[j] = 1;
          console.log("aditya")
          break;
        }
      }
    }
    console.log(profit)
  }
  
  let list1 = [80,70,60,50,40,30,10];
  let list2 = [4,1,2,5,3,2,1];
  
  jobSeq(list1, list2);
  
  
  
  