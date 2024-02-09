//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 
 
function MergeSortedArray1 (nums1, nums2, m,n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};

function MergeSortedArray2 (nums1, nums2, m,n) {
    let i = m-1;
    let  j = n - 1;
    let k = m+ n - 1;

    while (j>=0){
        if (i>=0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i-=1;
        }else{
             nums1[k] = nums2[j];
             j-=1;
        }
        k-=1;

    }
};

/*
let a = [1,2,3,0,0,0];
let b = [2,5,6];
let m = 3;
let n = 3;

MergeSortedArray2(a,b,m,n);
console.log(a); */

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement1 (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!=val) {
            nums[j] = nums[i];
             j++;
        }
        
    }
    return j;
}


/*let a = [1,2,2,3,5,7,2];
removeElement1(a,2);
console.log(a);*/

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

//Consider the number of unique elements of nums to be k
function removeDuplicatesSort1(nums) {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            nums[j]=nums[i];
            j++;
        }else {
            
        }
    }
    return j;
}

//Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//Return k after placing the final result in the first k slots of nums.
//Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicatesSortTwice2 (nums){
    let j = 1;
    let cont = 0;
    for (i=1; i < nums.length; i++){
        if (nums[i]=== nums[i-1]){
            cont++;
        }else{
            cont = 0;
        }
        if (cont<2){
            nums[j]=nums[i];
            j++;
        }

    }
    return j;
}
/*let a = [1,2,2,2,3,5,5,5,7,8,8,8];
let b = removeDuplicatesSortTwice2 (a);
console.log(a);
console.log(b);*/

//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than n/2 times. You may assume that the majority element always exists in the array.

function MajorityElement (nums){
    let cont = 1;
    let aux = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(nums[i]==aux){
            cont++;
        }else{
            cont--;
        }
        if (cont==0){
            aux=nums[i];
            cont=1;
        }
        
    }
    return aux;
};

/*let a = [1,2,2,2,3,5,5,5,2,7,8,2,8,8,2,2,2,2,2,2,2,2,2];
let b = MajorityElement (a);
console.log(a);
console.log(b);*/

//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
function RotateArray(nums,k){
    k = k%nums.length;
    aux = nums.slice(nums.length-k,nums.length).concat(nums.slice(0,nums.length-k));
    nums = aux;
}

//This have a problem, dont use
/*Array1 = [1,2,3,4,5,6,7,8,9];
RotateArray(Array1,3)
console.log(Array1); */

//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
function BestTimetoBuyandSellStock(prices){
    let minValue = prices[0];
    let diff = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i]<minValue){
            minValue = prices[i];
        }
        if (prices[i]-minValue>0){
            diff = Math.max(diff, prices[i]-minValue);
        }
        
    }
    return diff;
}

//You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
//On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.	
//Find and return the maximum profit you can achieve.
	
function BestTimetoBuyandSellStock2(prices){
    let diff = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i]>prices[i-1]){
            diff = diff + prices[i]-prices[i-1]
        }        
    }
    return diff;
};


Array1 = [1,2,3,4,5];
console.log(BestTimetoBuyandSellStock2(Array1));

//You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
//Return true if you can reach the last index, or false otherwise.
        
       