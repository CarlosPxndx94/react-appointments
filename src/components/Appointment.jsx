import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Appointment = ({ addAppointment }) => {

    const [appointment, setAppointment] = useState({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const [validateForm, setValidateForm] = useState(false);

    //function that runs every time the user types something in the form fields
    const handlerAppointment = event => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        });
    };

    //extract data

    const { petName, ownerName, date, time, symptoms } = appointment;

    //Send Form
    const submitAppoiment = event => {
        event.preventDefault();

        //Validate
        if (petName.trim() === ''
            || ownerName.trim() === ''
            || date.trim() === ''
            || time.trim() === ''
            || symptoms.trim() === ''
        ) {
            setValidateForm(true);
            return;
        }

        setValidateForm(false);

        //Assign id
        appointment.id = uuidv4();

        //Regiter Appointment
        addAppointment(appointment);

        //Clear Form
        setAppointment({
            id: '',
            petName: '',
            ownerName: '',
            date: '',
            time: '',
            symptoms: ''
        });

    };

    return (
        <Fragment>

            <h2>Register Appointment</h2>

            {
                validateForm ?
                    <p className="alerta-error">All fields are required</p>
                    :
                    null
            }

            <form
                onSubmit={submitAppoiment}
            >
                <label for="petName">Pet name</label>
                <input
                    type="text"
                    name="petName"
                    id="petName"
                    className="u-full-width"
                    placeholder="The pet's name"
                    onChange={handlerAppointment}
                    value={petName}
                />

                <label for="ownerName">Owner's name</label>
                <input
                    type="text"
                    name="ownerName"
                    id="ownerName"
                    className="u-full-width"
                    placeholder="Pet owner's name"
                    onChange={handlerAppointment}
                    value={ownerName}
                />

                <label for="date">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="u-full-width"
                    onChange={handlerAppointment}
                    value={date}
                />

                <label for="time">Time</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    className="u-full-width"
                    onChange={handlerAppointment}
                    value={time}
                />

                <label for="symptoms">Symptoms</label>
                <textarea
                    name="symptoms"
                    id="symptoms"
                    className="u-full-width"
                    onChange={handlerAppointment}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Appointment</button>

            </form>
        </Fragment>
    );
}

Appointment.proType = {
    addAppointment: PropTypes.func.isRequired
}

export default Appointment;