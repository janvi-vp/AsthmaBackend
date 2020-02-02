import Patient from '../models/patient';

const fetchPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        return patients;
    } catch(err) {
        console.log(err);
    }
}

export { fetchPatients };