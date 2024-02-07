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

function RotateArray(nums,k){
    k = k%nums.length;
    aux = nums.slice(nums.length-k,nums.length).concat(nums.slice(0,nums.length-k));
    nums = aux;
}

/*Array1 = [1,2,3,4,5,6,7,8,9];
RotateArray(Array1,3)
console.log(Array1); */

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
        
       