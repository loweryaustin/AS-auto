/**
 * GaraHerb (Digital Lions)
 * Database file for "GaraHerb"
 * Protocol: Male Potency & Nitric Oxide Support
 */
DATABASE_CONFIGS["GaraHerb"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "GaraHerb (Base)",
        "pitch": "This formula targets Nitric Oxide production to maximize blood flow and hydraulic pressure for reliable performance.",
        "gender": "male"
    },
    "knowledgeBase": "GaraHerb",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gh-1",
            "text": "Are you struggling with firmness, duration, or getting started?",
            "group": "Symptoms"
        },
        {
            "id": "q-gh-2",
            "text": "How long has this been affecting your confidence?",
            "group": "Impact"
        },
        {
            "id": "q-gh-3",
            "text": "Do you have high blood pressure or poor circulation in your hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-gh-4",
            "text": "Do you wake up to urinate frequently at night? (Jertaris)",
            "group": "Prostate"
        },
        {
            "id": "q-gh-5",
            "text": "Do you feel like your overall drive and energy is low? (Erectozyn)",
            "group": "Testosterone"
        },
        {
            "id": "q-gh-6",
            "text": "Are you managing Diabetes or high blood sugar? (Cetadusse)",
            "group": "Medical History"
        },
        {
            "id": "q-gh-7",
            "text": "Do you have numbness or lack of sensation? (Arialief)",
            "group": "Nerve Health"
        },
        {
            "id": "q-gh-8",
            "text": "Do you have joint pain or systemic inflammation? (Resverador)",
            "group": "Inflammation"
        }
    ],
    "recommendations": [
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "High BP / Poor Circulation",
                    "pitch": "GaraHerb signals the vessels to open, but Tenurina repairs the vessel walls so they are flexible enough to respond. They work together to maximize pressure.",
                    "benefit": "help repair blood vessels for maximum flow"
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
                    "text": "Frequent Urination / Weak Stream",
                    "pitch": "You can't get full flow if the pipe is clamped shut. Jertaris shrinks the prostate to remove the physical blockage in the pelvic floor.",
                    "benefit": "help clear prostate blockages"
                }
            ]
        },
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-libido",
                    "text": "Low Drive / Low Energy",
                    "pitch": "Circulation is the mechanics, but Testosterone is the fuel. Erectozyn boosts your natural drive so you are ready when the moment strikes.",
                    "benefit": "help boost testosterone and libido"
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
                    "text": "Numbness / Delayed Response",
                    "pitch": "If you have low sensation, the nerve signal isn't reaching the brain fast enough. Arialief strengthens the nerve wiring to restore pleasure and response speed.",
                    "benefit": "help restore nerve sensation and signaling"
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
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "Sugar damages the valves in your veins, leading to 'Venous Leak' (losing firmness). Cetadusse stops this damage to help you maintain the erection.",
                    "benefit": "help protect veins from sugar damage"
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
                    "text": "Inflammation / Swelling",
                    "pitch": "Inflammation lowers testosterone and restricts blood flow. Resverador clears system-wide inflammation to improve overall vascular health.",
                    "benefit": "help reduce inflammation blocking blood flow"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-test", "name": "Testosterone", "gender": "male" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" }
    ],
    "references": []
};
