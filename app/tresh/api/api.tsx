export async function getCountries () {
    let data = []
    try {
      const response = await fetch("http://95.174.91.82:8080/countries", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      data = await response.json();
      console.log(data);
      if(!data)
        data = []
      
      // return JSON.stringify(data);
    } catch (error) {
      console.error('error:', error);
      data = []
      // throw new Error('error: ' + error);
    }
    finally{
      return data;  
      //setCountries(JSON.stringify(data))
    }
  }
