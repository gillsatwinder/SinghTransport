fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'test',
        name: 'test',
        email: 'test@test.com',
        message: 'test'
      })
    }).then(res => res.text()).then(console.log);
