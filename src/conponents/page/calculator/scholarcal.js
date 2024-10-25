export const savelistprice = () => {
    const listInput = document.getElementById('listInput').value;
    const priceInput = document.getElementById('priceInput').value;

    if (listInput && priceInput) {
      const listElement = document.createElement('p');
      const priceElement = document.createElement('p');
  
      listElement.textContent = listInput;
      priceElement.textContent = priceInput + ' บาท';
  
      document.getElementById('listshow').appendChild(listElement);
      document.getElementById('priceshow').appendChild(priceElement);
  
      document.getElementById('listInput').value = '';
      document.getElementById('priceInput').value = '';
    }
  };
  
  export const calculateTotal = () => {
    const priceElements = document.querySelectorAll('#priceshow p');
    let total = 0;
  
    priceElements.forEach(priceElement => {
      const price = parseFloat(priceElement.textContent.replace(' บาท', ''));
      total += price;
    });
  
    const totalInYear = total * 12;
    document.getElementById('lasttotal').innerHTML = 'ยอดรวมทั้งหมด: ' + total + ' บาท';
    document.getElementById('yeartotal').innerHTML = 'ยอดรวมทั้งหมดใน 1 ปี ' + totalInYear + ' บาท';
    document.getElementById('sarup').innerHTML = 'ควรมอบทุนการศึกษาอย่างน้อยประมาณ ' + totalInYear + ' บาทต่อปี';
  };
  
  export const clearsave = () => {
    document.getElementById('listshow').innerHTML = '';
    document.getElementById('priceshow').innerHTML = '';
    document.getElementById('lasttotal').textContent = '';
    document.getElementById('yeartotal').textContent = '';
    document.getElementById('sarup').textContent = '';
  };