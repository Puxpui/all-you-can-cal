export const circlecalculator = () => {
    function calculateCircleArea() {
        let radius = (document.getElementById('cirredius').value);
        let cirresult = Math.PI * radius * radius;
        document.getElementById('cirresult').innerHTML = 
            'พื้นที่ของวงกลมที่มีรัศมี ' + radius + ' เซนติเมตร คือ ' + cirresult.toFixed(2) + ' ตารางเซนติเมตร';
    }
    calculateCircleArea();
}

export const trianglecalculator = () => {
    function calculateTriangleArea() {
        let base = (document.getElementById('tribase').value);
        let height = (document.getElementById('triheight').value);
        let triresult = 0.5 * base * height;
        document.getElementById('triresult').innerHTML = 
            'พื้นที่ของสามเหลี่ยมที่มีฐาน ' + base + ' เซนติเมตร และความสูง ' + height + ' เซนติเมตร คือ ' + triresult.toFixed(2) + ' ตารางเซนติเมตร';
    }
    calculateTriangleArea();
}

export const rectanglecalculator = () => {
    function calculateRectangleArea() {
        let width = (document.getElementById('rectwidth').value);
        let length = (document.getElementById('rectlength').value);
        let rectresult = width * length;
        document.getElementById('rectresult').innerHTML = 
            'พื้นที่ของสี่เหลี่ยมที่มีความกว้าง ' + width + ' เซนติเมตร และความยาว ' + length + ' เซนติเมตร คือ ' + rectresult.toFixed(2) + ' ตารางเซนติเมตร';
    }
    calculateRectangleArea();
}

export const clear = () => {
    document.getElementById('cirresult').innerHTML = '';
    document.getElementById('triresult').innerHTML = '';
    document.getElementById('rectresult').innerHTML = '';
};
