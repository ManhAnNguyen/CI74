I.'==' và '==='

== : so sánh giá trị
=== : so sánh kiểu dữ liệu và giá trị

II.Data type : nguyên thủy<number,string,boolean,undefined,null> : tham trị và object<array,object,function> : tham chiếu

III.array => mảng chứa các phần tử [a,b,c,d,e] --> đếm từ 0 tức là vị trí số 1 thì index bằng 0

cách lấy phần từ trong array array[index]

array.push(10)

1.foreach

numbers.forEach((num, index) => console.log(num, index));

2.map --> trả về cho mn 1 mảng mới

numbers.map((num, index) => map\* 3);

3.filter(lọc) --> trả về 1 mảng mà mảng đó chứa các phần tử thỏa mãn điều kiện
nếu k thỏa mãn -> trả ra mảng rỗng

const results = numbers.filter((num) => num > 2);

3.find(tìm) --> trả về giá trị đầu tiên thỏa mãn điều kiện,nếu k thỏa mãn điêu kiện sẽ ra undefined

const results = numbers.find((num) => num > 2);

4.some(1 vài) -> trả ra true hoặc false nếu trong mảng chỉ cần có 1 phần tử thỏa mãn điều kiện

const results = numbers.some((num) => num > 10);

5.every(tất cả)

const results = numbers.every((num) => num > 0);

IV.
Sự khác biệt : let const var

1.var có thể tái khai báo còn let và const thì không
2.var và let có thể thay đổi giá trị còn const thì không 3. hoisting chỉ var mới bị hoisting,còn let và const sẽ không bị hoisting

--> hoisting : là 1 kỹ thuật nó sẽ đưa thao tác khai báo biến lên đầu:

.var
console.log(text); //undefined
var text = 2;

console.log(text); //2

.let
console.log(text); //error
let text = 2;

console.log(text); //error

.const
console.log(text); //error
const text = 2;

console.log(text); //error
