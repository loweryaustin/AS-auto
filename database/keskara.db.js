/**
 * Keskara (Digital Lions)
 * Database file for "Keskara"
 * Protocol: Men's Health & Erectile Support
 */
DATABASE_CONFIGS["Keskara"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Keskara (Base)",
        "pitch": "Erectile Support Formula. 1 cap per day to support blood flow and performance.",
        "gender": "male"
    },
    "knowledgeBase": "Keskara",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ed-1",
            "text": "Are you having issues getting an erection, maintaining it, or both?",
            "group": "Diagnostic"
        },
        {
            "id": "q-ed-2",
            "text": "How long has this been affecting your confidence or relationships?",
            "group": "Impact"
        },
        {
            "id": "q-ed-3",
            "text": "Do you also experience a weak urinary stream or wake up at night to pee? (Jertaris)",
            "group": "Prostate"
        },
        {
            "id": "q-ed-4",
            "text": "Have you been diagnosed with High Blood Pressure or poor circulation? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-ed-5",
            "text": "Do you have Diabetes or high blood sugar? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-ed-6",
            "text": "Do you have numbness or low sensation in the area, or tingling in your feet? (Arialief)",
            "group": "Nerve Health"
        },
        {
            "id": "q-ed-7",
            "text": "Have you been told you have low Testosterone? (Erectozyn)",
            "group": "Hormones"
        },
        {
            "id": "q-ed-8",
            "text": "Are you carrying extra weight around the midsection (Belly Fat)? (Laellium)",
            "group": "Estrogen Risk"
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
                    "pitch": "An erection is purely hydraulics. Blood needs to get in fast. Tenurina clears the 'pipes' and boosts Nitric Oxide to maximize that hydraulic pressure.",
                    "benefit": "help ensure oxygenated blood flow reaches the area"
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
                    "pitch": "If you have nerve damage in your feet (neuropathy), you likely have it in the penile nerve too. Arialief strengthens the wiring to restore sensation and signal speed.",
                    "benefit": "help restore sensation and strengthen nerves"
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
                    "text": "Prostate Issues (Frequent urination, weak stream)",
                    "pitch": "An enlarged prostate physically squeezes the plumbing shut. Jertaris helps shrink the prostate to remove that physical clamp so blood can flow freely.",
                    "benefit": "help alleviate prostate blockages"
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
                    "pitch": "Keskara fixes the mechanics, but Erectozyn provides the fuel. It boosts free testosterone to restore your natural drive and energy.",
                    "benefit": "help boost testosterone and libido"
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
                    "text": "Diabetes / High Sugar",
                    "pitch": "High sugar acts like sandpaper on blood vessels, causing scar tissue that blocks flow. Cetadusse stops this damage so the vessels can heal.",
                    "benefit": "help repair blood vessel damage caused by sugar"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-belly-fat",
                    "text": "Belly Fat / Estrogen",
                    "pitch": "Belly fat produces an enzyme that turns your Testosterone into Estrogen. Laellium helps burn that fat to protect your manhood.",
                    "benefit": "help burn fat that kills testosterone"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-imp", "name": "Impact", "gender": "any" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-root", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-horm", "name": "Hormones", "gender": "male" },
        { "id": "g-est", "name": "Estrogen Risk", "gender": "any" }
    ]
};
