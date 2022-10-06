export default class Dungeon {
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.arr2D = [];
    for (let i=0; i < this.height; i++) {
      this.arr2D.push([]);
      for (let n=0; n < this.width; n++) {
        this.arr2D[i].push(n);
      }
    }
  }  
};



// 2DArr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8]
// arr1 = [1,2,3,4,5,6,7,8]
// 2DArr[0][3] === arr1, value 4