const search_URL = 'https://api.data.gov.sg/v1/transport/carpark-availability'

function getData() {
  axios
    .get(search_URL, {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

const axiosInstance = axios.create({
  baseURL: search_URL
});

function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div>
    <h5>Status: ${res.status}</h5>
  </div>


  <div>
    <h3>Data Body: <h3>
    <pre>${JSON.stringify(res.data, null, 2)}</pre>
  </div>


  <div>
      Metadata (object heading)
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  
  
  <div>
      Config (available methods, etc)
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

document.getElementById('get').addEventListener('click', getData);
