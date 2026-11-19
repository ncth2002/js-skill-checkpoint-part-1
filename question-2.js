// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
console.log(inventory);
inventory.push ( {
  name: "orange",
  price: 20,
  quantity: 300
}
)
console.log(inventory);
let mixAllvalue = 0;
console.log(inventory);

for ( let i = 0; i < inventory.length; i++) {
  mixAllvalue += inventory[i].price * inventory[i].quantity
  console.log(mixAllvalue);

}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${mixAllvalue} บาท`);