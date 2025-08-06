import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from '../models/Doctor.js';

dotenv.config();

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=faces',
    availableSlots: ['2023-08-10T09:00:00', '2023-08-10T11:00', '2023-08-11T10:00']
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: 8,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=faces',
    availableSlots: ['2023-08-10T14:00', '2023-08-11T09:00', '2023-08-11T15:00']
  },
  {
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    experience: 15,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=faces',
    availableSlots: ['2023-08-12T10:00', '2023-08-12T13:00', '2023-08-13T11:00']
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);

    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();