/**
 * Eros Lift (Instituto)
 * Database file for the "Eros Lift" supplement.
 * Product Line: Instituto
 * Protocol: Men's Health & Vitality
 */
DATABASE_CONFIGS["Eros Lift"] = {
    "productLine": "Instituto",
    "baseProduct": {
        "name": "Eros Lift (Base)",
        "pitch": "As men age, maintaining that spark and vitality is key. Eros Lift is here to support your system to naturally promote healthy male vitality and help optimize your performance confidence.",
        "gender": "male"
    },
    "knowledgeBase": "ErosLift",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-eros-1",
            "text": "How long have you been dealing with these performance issues?",
            "group": "History"
        },
        {
            "id": "q-eros-2",
            "text": "Would you say it’s an issue getting an erection, keeping it, or both?",
            "group": "Diagnostic"
        },
        {
            "id": "q-eros-3",
            "text": "Do you still wake up with morning erections?",
            "group": "Diagnostic"
        },
        {
            "id": "q-eros-4",
            "text": "Do you wake up to urinate in the middle of the night (Nocturia)?",
            "group": "Prostate"
        },
        {
            "id": "q-eros-5",
            "text": "Do you have high blood pressure or circulation issues? (Vital Blood)",
            "group": "Medical History"
        },
        {
            "id": "q-eros-6",
            "text": "Have you been diagnosed with Diabetes or high blood sugar? (Gluco Control)",
            "group": "Medical History"
        },
        {
            "id": "q-eros-7",
            "text": "Do you deal with high stress or anxiety regarding performance? (Nerve Alive)",
            "group": "Stress/Nerves"
        },
        {
            "id": "q-eros-8",
            "text": "Have you noticed a drop in overall energy or drive? (Alpha Max)",
            "group": "Hormones"
        }
    ],
    "recommendations": [
        {
            "id": "supp-vital-blood",
            "name": "Vital Blood",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Vital Blood contains L-Arginine and L-Citrulline, amino acids that serve as precursors for nitric oxide production. This supports optimal blood flow and efficient nutrient delivery, which is necessary for peak male performance.",
                    "benefit": "help support circulatory function for physical response"
                }
            ]
        },
        {
            "id": "supp-nerve-alive",
            "name": "Nerve Alive",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "Performance Anxiety / High Stress",
                    "pitch": "High levels of physiological stress or cortisol can negatively impact vitality. Nerve Alive is formulated with botanicals to support a relaxed nervous system and assist the body in managing its stress response.",
                    "benefit": "help support your body's physical response"
                }
            ]
        },
        {
            "id": "supp-alpha-max",
            "name": "Alpha Max",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-low-t",
                    "text": "Low Testosterone / Low Drive",
                    "pitch": "Alpha Max is an advanced formula specifically designed to support the body's natural production of male hormones, promoting strength, energy, and overall male vitality.",
                    "benefit": "help support optimal hormone levels"
                }
            ]
        },
        {
            "id": "supp-gluco-control",
            "name": "Gluco Control",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "High blood sugar damages the micro-vessels required for performance. Gluco Control helps support healthy glucose levels to protect these vessels from further damage.",
                    "benefit": "help support healthy blood sugar levels"
                }
            ]
        },
        {
            "id": "supp-prostate-max",
            "name": "Prostate Max",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-prostate",
                    "text": "Prostate Issues (Frequency, Urgency)",
                    "pitch": "Prostate MAX contains key vitamins and extracts, including Saw Palmetto, designed to support healthy prostate function. This helps ensure that prostate issues don't interfere with your comfort or performance.",
                    "benefit": "help support healthy prostate function"
                }
            ]
        },
        {
            "id": "supp-mens-growth",
            "name": "Mens Growth",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-libido",
                    "text": "Low Libido / Need Extra Boost",
                    "pitch": "As the body's needs change, Men's Growth provides targeted herbal support designed to promote healthy endogenous hormone activity and support peak physiological performance.",
                    "benefit": "help promote a healthy libido"
                }
            ]
        },
        {
            "id": "supp-vigor-boost",
            "name": "Vigor Boost",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-fatigue",
                    "text": "General Fatigue / Low Stamina",
                    "pitch": "Vigor Boost provides key adaptogens and supportive compounds to help modulate fatigue and maintain the body's energy resilience throughout the day.",
                    "benefit": "help maintain energy and readiness"
                }
            ]
        },
        {
            "id": "supp-volu-max",
            "name": "Volu Max",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-conf",
                    "text": "Low Confidence / Performance Worries",
                    "pitch": "Volu Max includes specific herbal and amino acid compounds to support male reproductive wellness and optimize the physiological factors contributing to confident performance.",
                    "benefit": "help promote overall sexual wellness"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "male" },
        { "id": "g-diag", "name": "Diagnostic", "gender": "male" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-stress", "name": "Stress/Nerves", "gender": "any" },
        { "id": "g-horm", "name": "Hormones", "gender": "male" }
    ]
};
