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
  
    document.getElementById('lasttotal').textContent = 'ยอดรวมทั้งหมด: ' + total + ' บาท';
  };
  
  export const clearsave = () => {
    document.getElementById('listshow').innerHTML = '';
    document.getElementById('priceshow').innerHTML = '';
    document.getElementById('lasttotal').textContent = '';
  };