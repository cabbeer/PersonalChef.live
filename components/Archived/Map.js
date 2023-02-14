import { React } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDUH5yXVbJ8wCI9byJ1BlSTDiUhz5QIrY0",
  });

  if (!isLoaded) {
    return <div>loading bish</div>;
  }

  return (
    <GoogleMap
      zoom={8}
      center={{ lat: 43.7, lng: -79.6 }}
      mapContainerClassName={"map-container"}
    ></GoogleMap>
  );
}