"use strict";

var array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
console.log("%cOriginal array", "font-weight: bold");
logArray(array, "green");

array = rotate1(array);
console.log(" ");
console.log("%cRotated array by first method", "font-weight: bold");
logArray(array, "orange");

array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
array = rotate2(array);
console.log(" ");
console.log("%cRotated array by second method", "font-weight: bold");
logArray(array, "blue");

var swapped = [[0, 0], [0, 3], [3, 0], [3, 3]];

function logArray(array, styleColor) {
    var style = "color: " + styleColor;
    var n = array.length;
    for (var i = 0; i < n; i++) {
        var a = "";
        for (var j = 0; j < n; j++) {
            a += array[i][j] + ", ";
        }
        console.log("%c%s", style, a);
    }
}

function rotate1(array) {
    var rotate = [];
    var n = array.length;
    for (var i = 0; i < n; i++) {
        rotate[i] = [];
        for (var j = 0; j < n; j++) {
            rotate[i][j] = array[n - 1 - j][i];
        }
    }
    return rotate;
}

function rotate2(array) {
    var swap;
    var n = array.length;
    var odd = n % 2;
    var h = Math.round(n / 2); //half length
    for (var i = 0; i < h - odd; i++) {
        for (var j = 0; j < h; j++) {
            swap = array[i][j];
            array[i][j] = array[n - 1 - j][i];
            array[n - 1 - j][i] = array[n - 1 - i][n - 1 - j];
            array[n - 1 - i][n - 1 - j] = array[j][n - 1 - i];
            array[j][n - 1 - i] = swap;
        }
    }
    return array;
}