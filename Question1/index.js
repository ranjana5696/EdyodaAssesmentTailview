
let a = [8,1,6,2,6,4,2,0,7]
let n = a.length;

function findMean(a,n){
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += a[i];
    
    }
    return sum/n;
}


function findMedian(a,n) {
    const sorted = a.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function findLargest(a,n){

    return Math.max(...a)

}

document.write("Mean= " + findMean(a,n) + "<br>");
document.write("Median= " + findMedian(a,n) + "<br>");
document.write("Largest= " + findLargest(a,n) + "<br>");
