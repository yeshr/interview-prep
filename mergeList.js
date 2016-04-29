/**
 * Created by yeshg on 3/26/2016.
 */

function mergeLists(lists) {
    var longestList = lists.reduce((list1, list2) => { return list1.length > list2.length ? list1 : list2 });

    var result = [];
    var curList;

    while(longestList.length) {
        for(curList of lists) {
            if (curList.length > 0) {
                result.push(curList.shift());
            }
        }
    }

    // [1, 4, 12, 2, 5, -4, 3, 7, 0, 10]
    console.log(result);
}

mergeLists(process.argv[2]);
