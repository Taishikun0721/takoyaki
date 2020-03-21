      
    function initMap() {
      const mapElement = document.getElementById('map')
      const mapProps = {
        center: {lat: 35.65858404079, lng: 139.74543164468},
        zoom: 12
      }

      const map = new google.maps.Map(mapElement, mapProps);
      

      const markerProps = [
        {
          HTML: `<h2>たこやき店1</h2>`,
          lat: 35.65858404079, 
          lng: 139.74543164468 
        },
        {
          HTML: `<h2>たこやき店2</h2>`,
          lat: 35.65858404079, 
          lng: 139.75
        },
        {
          HTML: `<h2>たこやき店3</h2>`,
          lat: 35.65858404079, 
          lng: 139.76
        }
      ]

      markerProps.forEach(({ HTML, lat, lng }) => {
        const infowindow = new google.maps.InfoWindow({
          content: HTML
        });
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: 'Hello World'
        }) 
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      })

    }


