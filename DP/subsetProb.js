let list1=[2,3,6,12,5];
let sum=11;
function subsetSum(arr,sum){
    let a= new Array(6);
    for(let i=0;i<6;i++){
        a[i]=new Array(12).fill(0);
    }
    a[0][0]=1;
    for(let j=1;j<4;j++){
      
        a[j][0]=1;
    }
    for(let i=1;i<5;i++){
      for(let j=1;j<12;j++){
        if(arr[i-1]>j){
          a[i][j]=a[i-1][j];
        }
        else{
          a[i][j]= a[i-1][j-arr[i-1]] || a[i-1][j]
        }
      }
    }
    console.log(a)
    return a[4][11];
}
console.log(subsetSum(list1,1))