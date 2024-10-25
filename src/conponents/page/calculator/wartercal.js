export function warterCal (){
    let weight = document.getElementById('weightInput').value;
    let warterCalresult = weight * 2.2 * 30 / 2
    let warterCalcup = warterCalresult.toFixed(0) / 225 
    return 'น้ำหนักตัวของคุณคือ ' + weight + ' กิโลกรัมควรดื่มน้ำอย่างน้อยประมาณ ' + warterCalresult.toFixed(0) + ' มิลลิลิตร หรือประมาณ ' + warterCalcup.toFixed(0) + ' แก้ว'
}