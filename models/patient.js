import mongoose, { Schema } from 'mongoose';

var patientSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    personal: {
        risk: Number,
        smoker: Boolean,
        diabetic: Boolean,
        hypertension: Boolean,
        obesity:  Boolean,
        observations: String,
    },
    background: {
        family: String,
        childhood: String,
        allergy_hist: {
            alr: Boolean,
            adt: Boolean,
            dust_a: Boolean,
            drug: Boolean,
            food_a: Boolean,
            eia: Boolean,
            gerd: Boolean,
        },
        observations: String,
    },
    ini_symptoms: {
        date: Date,
        wheezing: '',
        shortness_of_breath: '',
        cough: '',
        chest_tightness: '',
        nighttime: '',
        restriction: '',
        observations: String,
    },
    comorbidities: {
        pulse: String,
        saturation: String,
        blood_pressure: String,
        resp_rate: String,
        urt_findings: {
            dns: Boolean,
            pharyn: Boolean,
            rhonchi: Boolean,
            pnd: Boolean,
            hpt: Boolean,
            nps: Boolean,
            ear_dis: Boolean,
        }
    },
    tests: {
        cbc: {
            hb: String,
            wbc: String,
            eosin: String,
            aec: String,
        },
        xray: String,
        pefr: Array,
        spirometry: Object,
        IGE: String,
        skin_prick: Object,
        observations: String,
    },
    follow_up: Array,
});

export default mongoose.model('patient', patientSchema);