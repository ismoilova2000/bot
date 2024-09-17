
document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '6565471791:AAERDOmgwY1zV1vUfqp3-NdIbHhdG59s9Lw';  // Замените на ваш токен
    const chat_id = '-4575911254';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // alert("Message sent!");
        // location.reload()
        const thanks = document.querySelector('#thanks')
        thanks.innerText = 'Спасибо, что отправил данные!' 

        setTimeout(() => {
            location.reload()
        }, 3000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });
  


