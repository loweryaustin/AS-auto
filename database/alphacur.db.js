/**
 * AlphaCur (Sciatic Nerve)
 * Database file for the "AlphaCur" supplement.
 * Product Line: Digital Lions
 * Protocol: Sciatic Nerve Health
 */
DATABASE_CONFIGS["AlphaCur"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "AlphaCur (Base)",
        "pitch": "Sciatic Nerve Relief & Metabolic Support. 1 cap per day.",
        "gender": "any"
    },
    "knowledgeBase": null,
    "guaranteeDays": 60,
    "knowledgeBase": "AlphaCur",
    "questions": [
        {
            "id": "q-sci-1",
            "text": "Where is the pain radiating? Lower back, down the leg, or into the foot? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-sci-2",
            "text": "How long has this sciatic discomfort been affecting your daily life?",
            "group": "Diagnostic"
        },
        {
            "id": "q-sci-3",
            "text": "Is the pain sharp and shooting, or more of a dull ache? (AlphaCur Base)",
            "group": "Symptoms"
        },
        {
            "id": "q-sci-4",
            "text": "Do you also experience tingling or numbness in the legs or feet? (Arialief)",
            "group": "Nerve Damage"
        },
        {
            "id": "q-sci-5",
            "text": "Do you have inflammation or stiffness in the lower back? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-sci-6",
            "text": "Do you feel like your immune system is weak or compromised? (Zalovira)",
            "group": "Immunity"
        },
        {
            "id": "q-sci-7",
            "text": "Do you have circulation issues or cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-sci-8",
            "text": "Is the discomfort keeping you awake at night? (Xelovita)",
            "group": "Sleep"
        }
        // Closing questions removed
    ],
    "recommendations": [
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-back-swell",
                    "text": "Lower Back Inflammation / Stiffness",
                    "pitch": "Sciatica is often caused by inflammation pressing on the nerve root. This helps reduce that swelling to take the pressure off.",
                    "benefit": "help reduce inflammation compressing the nerve"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numb-leg",
                    "text": "Tingling / Numbness in legs",
                    "pitch": "If you have tingling, the nerve sheath is damaged. This supports the repair of the nerve insulation to stop the misfiring.",
                    "benefit": "help repair damaged nerve insulation"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-weak",
                    "text": "Weak Immune System",
                    "pitch": "AlphaCur provides immune support, and Zalovira boosts this further to ensure your body isn't fighting infection while trying to heal the nerve.",
                    "benefit": "help boost overall immune defense"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-legs",
                    "text": "Poor Circulation / Cold Feet",
                    "pitch": "Nerves need oxygen to heal. This improves blood flow to the legs and feet to feed the sciatic nerve.",
                    "benefit": "help deliver oxygen to the sciatic nerve"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-pain",
                    "text": "Pain affecting sleep",
                    "pitch": "Sciatica often flares up at night. This ensures you get deep restorative sleep so your nerves can repair.",
                    "benefit": "help you sleep through the discomfort"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Damage", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ]
};
