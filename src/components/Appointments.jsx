import React from 'react';
import PropTypes from 'prop-types';

const Appointments = ({ appointment, removeAppointment }) => {
    return (
        <div className="cita">
            <p>Pet name: <span>{appointment.petName}</span></p>
            <p>Owner's name: <span>{appointment.ownerName}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Time: <span>{appointment.time}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => removeAppointment(appointment.id)}
            >Remove &times;</button>
        </div>
    );
}

Appointments.prototype = {
    appointment: PropTypes.object.isRequired,
    removeAppointment: PropTypes.func.isRequired
}

export default Appointments;