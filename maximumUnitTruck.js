/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => (b[1] - a[1]));
    let balanceSize = truckSize;
    let units = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        let addBox = Math.min(balanceSize, boxTypes[i][0]);
        units += addBox * boxTypes[i][1]
        balanceSize -= addBox
        if (balanceSize === 0) {
            break
        }
    }
    return units
};
/* 
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
*/