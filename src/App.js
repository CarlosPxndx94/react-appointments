import React, { Fragment, useState } from 'react';
import Appointment from './components/Appointment';
import Appointments from './components/Appointments';

function App() {

  //Lis Appointment
  const [appointments, setAppointments] = useState([]);

  //Function add appointments
  const handlerAddAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  };

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
            <h2>Manage your Appointments</h2>
            {appointments.map(appointment => (
              <Appointments
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
