var r = readline().split(" ");
var row1 = readline().split(" ").map(n => parseInt(n));
var row2 = readline().split(" ").map(n => parseInt(n));
var row1Points = row1.reduce((a, b) => a + b);
var row2Points = row2.reduce((a, b) => a + b);
var p1 = 0;
var p2 = 0;

//how can i account for diagonals? Done
//how am i going to account for the mixes of diagonal and horizontal? ...
for (var i = 0; i < parseInt(r[0]); i++) {
    if (i % 2 === 0) {
        p1 += row1[i];
        p2 += row2[i];
    } else {
        p1 += row2[i];
        p2 += row1[i];
    }
}
print(p1);
//[1, 2, 3, 4]
//[5, 4, 3, 2]