/**
 * Keskara (ED / Men's Health)
 * Database file for the "Keskara" supplement.
 * Product Line: Digital Lions
 * Protocol: Men's Health (ED & Prostate)
 */
DATABASE_CONFIGS["Keskara"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Keskara (Base)",
        "pitch": "Erectile Support - ED. 1 cap per day.",
        "gender": "male"
    },
    "knowledgeBase": "Keskara",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ed-1",
            "text": "Issues getting or maintaining an erection? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-ed-2",
            "text": "Are you still ever ejaculating? (Jertaris)",
            "group": "Prostate/Flow"
        },
        {
            "id": "q-ed-3",
            "text": "Are you Diabetic or Pre-Diabetic? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-ed-4",
            "text": "Do you have high blood pressure or circulation issues? (Tenurina)",
            "group": "Root Cause: Flow"
        },
        {
            "id": "q-ed-5",
            "text": "Do you have tingling or numbness in your feet or hands? (Arialief)",
            "group": "Root Cause: Nerves"
        },
        {
            "id": "q-ed-6",
            "text": "Have you been told you have low testosterone? (Erectozyn)",
            "group": "Root Cause: Hormones"
        },
        {
            "id": "q-ed-7",
            "text": "Do you have any inflammation or joint pain? (Resverador)",
            "group": "Root Cause: Inflammation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-garaherb",
            "name": "GaraHerb",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-boost",
                    "text": "Need additional potency",
                    "pitch": "Erectile Support Booster.",
                    "benefit": "help boost potency and performance"
                }
            ]
        },
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-testo",
                    "text": "Low Testosterone / Low Libido",
                    "pitch": "Included for Testosterone boosting, energy, or libido issues.",
                    "benefit": "help boost testosterone and libido"
                }
            ]
        },
        {
            "id": "supp-jertaris",
            "name": "Jertaris",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-prostate",
                    "text": "Prostate Issues (Frequent urination, swelling)",
                    "pitch": "This helps alleviate prostate blockages permanently. We use this instead of circulation supplements because clearing the blockage often restores flow on its own.",
                    "benefit": "help alleviate prostate blockages"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diabetes",
                    "text": "Diabetes / Pre-Diabetes (High Sugar)",
                    "pitch": "High blood sugar causes permanent damage to blood vessels and veins over time. We need to repair this sugar damage to ensure the blood can actually reach the area.",
                    "benefit": "help repair blood vessel damage caused by sugar"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Low Sensation / Numbness / Neuropathy",
                    "pitch": "This strengthens the penile nerve. If you have neuropathy or numbness elsewhere, it means the penile nerve is also weak. This restores sensation and pleasure.",
                    "benefit": "help restore sensation and strengthen nerves"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Circulation Issues (High BP, Cold hands/feet)",
                    "pitch": "We need to ensure oxygenated blood flow is consistently reaching the area to maintain the erection.",
                    "benefit": "help ensure oxygenated blood flow reaches the area"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam",
                    "text": "Inflammation / General Pain",
                    "pitch": "Reduces inflammation that might be blocking blood flow pathways.",
                    "benefit": "help reduce inflammation blocking blood flow"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-prostate", "name": "Prostate/Flow", "gender": "male" },
        { "id": "g-sugar", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-flow", "name": "Root Cause: Flow", "gender": "any" },
        { "id": "g-nerves", "name": "Root Cause: Nerves", "gender": "any" },
        { "id": "g-horm", "name": "Root Cause: Hormones", "gender": "male" },
        { "id": "g-inf", "name": "Root Cause: Inflammation", "gender": "any" },
    ]
};
