function quick(arr, a, b) {
    var pivotValue = arr[a];
    var i = a + 1;
    var j = b;
    while (i <= j) {
      if (arr[i] > pivotValue && arr[j] < pivotValue) {
        var c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
        i++;
        j--;
      } else if (arr[i] <= pivotValue) {
        i++;
      } else if (arr[j] >= pivotValue) {
        j--;
      }
    }
    //console.log(j);
    arr[a] = arr[j];
    arr[j] = pivotValue;
    return j;
  }
  let list1 = [5, 22, 2, 11, 222, 12, 1, 21, 3];
  
  function quickSort(arr, a, b) {
    if (a < b) {
      let pivot1 = quick(arr, a, b);
  
      quickSort(arr, a, pivot1 - 1);
      quickSort(arr, pivot1 + 1, b);
    }
  }
  quickSort(list1, 0, 8);
  console.log('Aditya');
  console.log(list1);
  