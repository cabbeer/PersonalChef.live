import {GoogleMap, Marker} from "@react-google-maps/api"
import React, { useState, useEffect } from "react";

export default function LatLong() {
  const [userData, setUserData] = useState([]);
  const [latLngData, setLatLngData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userRes = await fetch(
        `http://127.0.0.1:8090/api/collections/users/records`
      );
      const userData = await userRes.json();
      setUserData(userData.items);
    }
    fetchData();
  }, []);

  useEffect(() => {
    userData.forEach(async (user) => {
      const address = `${user.street}, ${user.city}, ${user.province}, ${user.postal_code}`;
      const apiKey = "AIzaSyDUH5yXVbJ8wCI9byJ1BlSTDiUhz5QIrY0";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      const result = data.results[0];

      setLatLngData((prevLatLngData) => [
        ...prevLatLngData,
        {
          id: user.id,
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng,
        },
      ]);
    });
  }, [userData]);

  return (
    <div>
      {latLngData.map((user) => (
        <div key={user.id}>
          {user.id}: Lat: {user.lat}, Lng: {user.lng}
        </div>
      ))}
    </div>
  );
}