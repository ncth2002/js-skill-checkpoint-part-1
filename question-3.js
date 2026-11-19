// Question #3
let userPassword = "ข้อนี้ใช้เวลาเกือบ ชม";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (userPassword) {
    if (userPassword.length < 6 ) {
        return "Strong";
        console.log(checkPasswordStrength);
    }else if (userPassword.length <= 10 ) {
        return "Medium";
    }else {
        return "Strong";
    }
    
} 
console.log(checkPasswordStrength(userPassword));



//checkPasswordStrength(userPassword); อกรูเมนต์แรก ถ้าลืมกูอดสามคะแนน