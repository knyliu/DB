import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedAppointments = () => {
  const [savedAppointments, setSavedAppointments] = useState([]); 
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/appointments/SavedAppointments/${userID}`
        );
        
        setSavedAppointments(response.data.savedAppointments || []); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedAppointments();
  }, [userID]); 

  return (
    <div>
      <h1>Saved Appointments</h1>
      <ul>
        {savedAppointments.map((appointment) => ( 
          <li key={appointment._id}>
            <div>
              <h2>{appointment.name}</h2>
            </div>
            <p>{appointment.description}</p>
            <img src={appointment.imageUrl} alt={appointment.name} />
            <p>Appointment Time: {appointment.appointmentTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
