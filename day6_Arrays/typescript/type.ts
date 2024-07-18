

/// Arrays in typescript


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr1);

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr);

arr.push(11);
arr.push(12);
arr.push(13);
arr.push(14);
arr.push(15);
arr.push(16);
arr.push(17);
arr.push(18);
arr.push(19);
arr.push(20);

// console.log(arr);


function sum(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// console.log(sum(arr));


function printViaLoop(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printViaLoop(arr);
// printViaLoop(arr1);




/// Array methods

function useOfMap(arr: number[]): void {

    arr.map((num: number) => {
            console.log(num);
    });
    
}

useOfMap(arr);
