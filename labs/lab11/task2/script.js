function getMyIpInfo() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;


        const url = `https://ipapi.co/`; // Replace 'YOUR_API_KEY' with your actual API key

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const city = data.name;
                const country = data.country;

                document.getElementById('city').textContent = city;
                document.getElementById('country').textContent = country;
                
            })
            .catch(error => {
                console.error('Error fetching IP info:', error);
                
            });
    },
    function(error) {
        console.error('Error getting geolocation:', error);
        
    });
}