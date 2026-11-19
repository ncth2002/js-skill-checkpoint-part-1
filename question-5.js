// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

//อินเด็กซ์ 0 คือเสื้อยืด 1 คือกางเกง 2 คือเสื้อเชิ๊ต
//let allValuePrice = 0;
const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice (products, promotionCode) {

  let allValuePrice = 0;
  for ( let i = 0; i < products.length; i++) {
    allValuePrice += products[i].price * products[i].quantity

// หา% ต้องเอาจำนวน ไปคูณ แล้วหารด้วย100 (หรือเปล่า) ลดยี่สิบ ก็คูณ 0.8 ลด 50 ก็คูณ 0.5
  }
    if (promotionCode === "SALE20") {
      return allValuePrice * 0.8;
    }else if (promotionCode === "SALE50") {
        return allValuePrice * 0.5
      }else {
        return allValuePrice //ไม่มีโปรโมชั่น
      }
    }
    console.log(calculateTotalPrice(products, promotionCode));









calculateTotalPrice(products, promotionCode)