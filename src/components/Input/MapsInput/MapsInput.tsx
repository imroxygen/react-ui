import React, { useEffect, useState, useRef } from "react";
import MapboxGeocoder , { GeocoderOptions } from '@mapbox/mapbox-gl-geocoder';
import mapboxgl, { Map, Marker } from "mapbox-gl";

interface AppLocalizer{
    mapbox_api:string,
}

const appLocalizer:AppLocalizer={
    mapbox_api:"api"
}
export interface MapsInputProps {
    LatVal:number,
    LngVal:number,
    wrapperClass:string,
    containerId:string,
    containerClass:string,
    proSetting:string,
    description:string,
    descClass:string,
}

const MapsInput : React.FC<MapsInputProps> = ({
    LatVal,
    LngVal,
    wrapperClass,
    containerId,
    containerClass,
    proSetting,
    description,
    descClass,
})=>{

    const [Lat, setLat] = useState<number>(LatVal || 22.5726); // Default to Kolkata coordinates
    const [Lng, setLng] = useState<number>(LngVal || 88.3639);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const markerRef = useRef<mapboxgl.Marker | null>(null);


    useEffect(() => {
        // Initialize Mapbox
        mapboxgl.accessToken = appLocalizer.mapbox_api;

        const map:Map = new mapboxgl.Map({
            container: mapContainerRef.current as HTMLDivElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [Lng, Lat],
            zoom: 12,
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            marker: false,
            mapboxgl: mapboxgl as unknown as Required<GeocoderOptions>["mapboxgl"],
        });

        // Add geocoder control to the map
        map.addControl(geocoder);

        // Initialize Marker
        markerRef.current = new mapboxgl.Marker({ color: "red" })
            .setLngLat([Lng, Lat])
            .addTo(map);

        // Handle geocoder results
        geocoder.on("result", (ev) => {
            const { center } = ev.result;
            setLat(center[1]);
            setLng(center[0]);

            if (markerRef.current) {
                markerRef.current.setLngLat(center);
            }
        });
    
        // Cleanup on component unmount
        return () => map.remove();
    }, [])
    
    useEffect(() => {
        // Update the marker position when coordinates change
        if (markerRef.current) {
            markerRef.current.setLngLat([Lng, Lat]);
        }
    }, [Lat, Lng]);

    return (
        <div className={wrapperClass}>
            <div
                ref={mapContainerRef} // Reference to the map container
                id={containerId || 'maps-container'}
                className={containerClass || 'maps-container'}
                style={{ width: '100%', height: '300px' }}
            >
            </div>            
            
            {proSetting && <span className="admin-pro-tag">pro</span>}            
            
            {description &&
                <p className={descClass} dangerouslySetInnerHTML={{ __html: description }}>
                </p>
            }
        </div>
    );
}

export default MapsInput;