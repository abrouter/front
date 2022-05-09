function httpRequest(url, method, body) {
    return fetch(window.api + url, {
        credentials: 'include',
        'method': method,
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body),
      })
      .then(response => {

        if (response.status !== 200 && response.status !== 201) {
          let error = (new Error('Request failed'));
          error.json = response.json();
          throw error; 
        }

        return response.json()
      }
      );
}

export default httpRequest;
