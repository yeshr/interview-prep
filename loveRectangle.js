/**
 * Created by yeshg on 4/26/2016.
 */

var rect1 = {
    leftX: 1,
    bottomY: 1,

    width: 10,
    height: 4
};

var rect2 = {
    leftX: 5,
    bottomY: 3,

    width: 5,
    height: 10
};

function loveRectangle(r1, r2) {
    try {
        var IX1 = calcCord(r1.leftX, r1.width, r2.leftX, r2.width);
        var IY1 = calcCord(r1.bottomY, r1.height, r2.bottomY, r2.height);

        var solution = {
            leftX: IX1,
            bottomY: IY1,
            width: Math.min(r1.leftX + r1.width, r2.leftX + r2.width) - IX1,
            height: Math.min(r1.bottomY + r1.height, r2.bottomY + r2.height) - IY1
        };

        return solution;

    } catch (e) {
        return 'No Love';
    }

    return solution;
}

function lowerY(y1, h1, y2, h2) { // y1=1, h1=4, y2=3, h2=10
    return y1 + h1 < y2 + h2 ? y1 + h1 : y2 + h2;
}

function lowerX(x1, w1, x2, w2) { // x1=1, w1=10, x2=5, w2=5
    return x1+w1 < x2+w2 ? x1+w1 : x2+w2;
}

function calcCord(c1, offset1, c2, offset2) {
    var start = Math.max(c1, c2);
    var end = Math.min(c1+offset1, c2+offset2);

    if (start > end) {
        throw 'No intersection';
    }
    else {
        return start;
    }
}

module.exports = loveRectangle;

//console.log(loveRectangle(rect1, rect2));