import React, { Fragment, useState, useEffect } from 'react';
import Appointment from './components/Appointment';
import Appointments from './components/Appointments';

function App() {


  //initial appointments
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }
  //Lis Appointment
  const [appointments, setAppointments] = useState(initialAppointments);

  //useEffect change appointments
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify((initialAppointments ? appointments : [])));
  }, [appointments, initialAppointments]);

  //Function add appointments
  const handlerAddAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  };

  //Function remove appointment by id
  const removeAppointment = id => {
    const newAppointments = appointments.filter(ap => ap.id !== id);
    setAppointments(newAppointments);
  }

  //Title
  const title = (appointments.length > 0 ? 'Manage your Appointments' : 'Add one appointment');

  return (
    <Fragment>
      <h1>Appointments Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Appointment
              addAppointment={handlerAddAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointments
                key={appointment.id}
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
