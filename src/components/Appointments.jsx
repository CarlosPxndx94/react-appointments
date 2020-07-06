import React from 'react';

const Appointments = ({ appointment }) => {
    return (
        <div className="cita">
            <p>Pet name: <span>{appointment.petName}</span></p>
            <p>Owner's name: <span>{appointment.ownerName}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Time: <span>{appointment.time}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>
            <p><span></span></p>
        </div>
    );
}

export default Appointments;