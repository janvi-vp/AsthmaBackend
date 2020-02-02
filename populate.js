import mongoose from 'mongoose';

import Patient from './models/patient';

const patients = [
    {
        name: "Abcd",
        age: 25,
        gender: "Male",
        personal: {
            risk: 2,
            smoker: false,
            diabetic: true,
            hypertension: true,
            obesity:  false,
            observations: "None",
        },
        background: {
            family: "No family history",
            childhood: "No childhood history",
            allergy_hist: {
                alr: false,
                adt: false,
                dust_a: false,
                drug: false,
                food_a: false,
                eia: false,
                gerd: false,
            },
            observations: '',
        },
        ini_symptoms: {
            date: '2020-02-01',
            wheezing: '1',
            shortness_of_breath: '1',
            cough: '1',
            chest_tightness: '1',
            nighttime: '1',
            restriction: '1',
            observations: "",
        },
        comorbidities: {
            pulse: '72',
            saturation: '400',
            blood_pressure: '130',
            resp_rate: '24',
            urt_findings: {
                dns: false,
                pharyn: false,
                rhonchi: false,
                pnd: false,
                hpt: false,
                nps: false,
                ear_dis: false,
            }
        },
        tests: {
            cbc: {
                hb: '12',
                wbc: '12',
                eosin: '12',
                aec: '12',
            },
            xray: "Regular",
            pefr: [],
            spirometry: {},
            IGE: '34',
            skin_prick: {},
            observations: 'None1',
        },
        follow_up: [],
    }
];

mongoose.connect("mongodb://localhost/asthma", { useNewUrlParser: true });

patients.map(data => {
    const patient = new Patient(data);
    patient.save();
})