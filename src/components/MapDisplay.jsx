import { useEffect, useRef } from 'react';

// Note: The CSS import is commented out in the original code, so it's omitted here as well.

const MapDisplay = ({ locations, zoomLevel = 4 }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    window.initMap = initMap; // Make initMap available in global scope

    const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY; // Assuming this is how you'd manage API keys in JS
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.initMap; // Clean up when component unmounts
    };
  }, [locations]); // Note: added locations to dependency array if you want to re-render map on location change

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      zoom: zoomLevel,
      center: { lat: 39.8283, lng: -98.5795 } // Default center
    });

    const bounds = new google.maps.LatLngBounds();
    
    if (locations && locations.length > 0) {
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
        });

        const imageHTML = location.images.map(img => `
          <div>
            <img src="${img.url}" alt="${img.altText}" onerror="this.style.display='none'" style="max-width: 100%; height: auto; max-height: 200px;">
            <p style="font-size: 12px;">${img.caption} - ${img.credit}</p>
          </div>
        `).join('');

        // Create an InfoWindow for each marker
        const infoWindow = new google.maps.InfoWindow({
          content: `<div style="background-color:">
                  <h4 style="font-size: 25px">${location.name}</h4> 
                  <h5 style="font-size: 15px">${location.weather}</h5> 
                  <p><a style="font-size: 15px" href="${location.directions}" target="_blank" rel="noopener noreferrer">Get Directions</a></p>
                  <p><a style="font-size: 15px" href="${location.url}" target="_blank" rel="noopener noreferrer">Park Site</a></p>
                  ${imageHTML}
                  </div>`
        });

        // Add a click event listener to open the InfoWindow
        marker.addListener('click', () => {
          infoWindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });

        bounds.extend(marker.getPosition());
      });

      map.fitBounds(bounds);
    } else {
      map.setCenter({ lat: 39.8283, lng: -98.5795 });
    }
  };

  return (
    <div className='map-container'>
      <h3 className='text-light'>DYNAMIC MAP</h3>
      <div ref={mapRef} style={{ height: '600px', width: '100%' }}></div>
    </div>
  );
};

export default MapDisplay;