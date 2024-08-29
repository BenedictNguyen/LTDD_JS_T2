//1. map hàm map sẽ tạo ra một array mới duyệt qua các phần tử và áp dụng 1 biểu thức logic – biểu thức này được cung cấp qua 1 hàm callback.
const arr1 = [1, 2, 3, 4, 5, 6, 7];
var result = arr1.map(i => {
    return i * 2;
})
console.log(result);

//2. forEach được sử dụng để duyệt qua từng phần tử của mảng

const arr2 = [1, 2, 3, 4, 5, 6, 7];
var result = arr2.forEach(i => {
    console.log(i);
});

// 3. includes: được sử dụng để check sự tồn tại của item nào trong mảng, Sẽ trả ra kết quả là True nếu như tìm thấy và người lại sẽ trả về là false
const arr3 = [1, 2, 3, 4, 5, 6, 7];
var result = arr3.includes(2);
var result = arr3.includes(4);
console.log(result)

// 4. Some Được sử dụng để kiểm tra một mảng có thỏa mãn điều kiện của bạn hay không
const arr4 = [1, 2, 3, 4, 5, 6, 7];
var result = arr4.some(i => {
    return i = i >= 7;
})

console.log(result);

// 5. every Hàm này thì hơi khác hàm some một chút đó là nó sẽ check hết các phần tử trong mảng thỏa mãn điều kiện rồi trả về true hoặc false
const arr5 = [1, 2, 3, 4, 5, 6, 7];
var result = arr5.every(i => {
    return i % 2 !== 0;
});

console.log(result);