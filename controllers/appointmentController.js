import Appointment from '../models/Appointment.js';
import Doctor from '../models/Doctor.js';

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Public
export const createAppointment = async (req, res) => {
  try {
    const { patientName, phone, gender, location, doctorId, appointmentDate } = req.body;
    
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const appointment = new Appointment({
      patientName,
      phone,
      gender,
      location,
      doctor: doctorId,
      appointmentDate
    });

    const createdAppointment = await appointment.save();
    res.status(201).json(createdAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Public
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).populate('doctor', 'name specialty');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};