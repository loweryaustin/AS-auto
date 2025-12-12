/**
 * GaraHerb (Men's Health Base)
 * Database file for the "GaraHerb" supplement.
 * Product Line: Digital Lions
 * Protocol: Men's Health (ED & Prostate)
 */
DATABASE_CONFIGS["GaraHerb"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "GaraHerb (Base)",
        "pitch": "Primary Men's Health Support. 1 cap per day.",
        "gender": "male"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gh-1",
            "text": "Issues getting or maintaining an erection? (Diagnostic)",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-gh-2",
            "text": "Are you still ever ejaculating? (Jertaris)",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-gh-3",
            "text": "Are you Diabetic or Pre-Diabetic? (Cetadusse)",
            "group": "Medical History"
        },
        {
            "id": "q-gh-4",
            "text": "Do you have blood pressure issues? (Tenurina)",
            "group": "Medical History"
        },
        {
            "id": "q-gh-5",
            "text": "Tingling or numbness in feet or hands? (Arialief)",
            "group": "Neuropathy Check"
        },
        {
            "id": "q-gh-6",
            "text": "Prostate issues? Inflammation? (Jertaris or Resverador)",
            "group": "Prostate"
        },
        {
            "id": "q-gh-7",
            "text": "Have you been told you have low testosterone? (Erectozyn)",
            "group": "Hormonal"
        },
        {
            "id": "q-gh-8",
            "text": "What is your Height and Weight? (Duration Logic: 18mo vs 24mo)",
            "group": "Closing"
        },
        {
            "id": "q-univ-1",
            "text": "Do you have any Thyroid issues? (Dosing Instruction)",
            "group": "Closing"
        },
        {
            "id": "q-univ-2",
            "text": "Do you have anyone military in the family? (Discount Applied)",
            "group": "Closing"
        },
        {
            "id": "q-univ-3",
            "text": "Are you good at remembering to take things? (Commitment)",
            "group": "Closing"
        }
    ],
    "recommendations": [
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-testo",
                    "text": "Low Testosterone / Low Libido",
                    "pitch": "Booster included for Testosterone boosting, energy, or libido issues.",
                    "benefit": "help boost testosterone and libido"
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
                    "text": "Blood Pressure / Circulation Issues",
                    "pitch": "Circulation support included for blood flow. We need to ensure oxygenated blood is reaching the area.",
                    "benefit": "help ensure blood flow reaches the area"
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
                    "text": "Numbness / Sensation Issues",
                    "pitch": "Repair support included for sensation issues. This strengthens the penile nerve to restore pleasure.",
                    "benefit": "help restore sensation and pleasure"
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
                    "text": "Diabetes / Pre-Diabetes",
                    "pitch": "Included because sugar damages blood vessels. We need to repair this damage to ensure blood can reach the area.",
                    "benefit": "help repair sugar-induced vessel damage"
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
                    "text": "Prostate Issues (Frequency, Swelling)",
                    "pitch": "Included to alleviate prostate blockages permanently.",
                    "benefit": "help alleviate prostate blockages"
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
                    "text": "Inflammation",
                    "pitch": "Reduces inflammation that might be blocking blood flow pathways.",
                    "benefit": "help reduce inflammation blocking blood flow"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-ed", "name": "Erectile Dysfunction", "gender": "male" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-neuro", "name": "Neuropathy Check", "gender": "any" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-horm", "name": "Hormonal", "gender": "male" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
