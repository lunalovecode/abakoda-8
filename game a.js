var r = readline().split("");
var row1 = readline().split(" ").map(a);
var row2 = readline().split(" ").map(a);
 
var row1Points = row1.reduce(addArr);
var row2Points = row2.reduce(addArr);
 
function a(n) {
    return parseInt(n);
}
 
function addArr(a, b) {
    return a + b;
}
 
if (row1Points > row2Points) {
    print(row1Points);
} else {
    print(row2Points);
}