/**
 * Jertaris (Prostate)
 * Database file for the "Jertaris" supplement.
 * Product Line: Digital Lions
 * Protocol: Prostate Health
 */
DATABASE_CONFIGS["Jertaris"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Jertaris (Base)",
        "pitch": "Supports healthy circulation, prostate function, urinary comfort, and male vitality.",
        "gender": "male"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-pros-1",
            "text": "Do you ever feel a sudden, strong need to urinate, making it hard to wait? (Urgency) (Diagnostic)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-2",
            "text": "On average, how often are you needing to use the restroom during the day? (Frequency) (Diagnostic)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-3",
            "text": "How often do you find yourself waking up during the night to urinate? (Nocturia) (Xelovita)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-4",
            "text": "Have you noticed any changes in the strength or flow of your urinary stream? (Resverador)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-5",
            "text": "After you finish, do you often feel like your bladder hasn't fully emptied? (Arialief)",
            "group": "Prostate Symptoms"
        },
        {
            "id": "q-pros-6",
            "text": "Do you have any issues with blood pressure or circulation? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-pros-7",
            "text": "Any issues with erectile dysfunction or low libido? (Erectozyn)",
            "group": "Sexual Health"
        },
        {
            "id": "q-univ-1",
            "text": "What is your Height and Weight? (Duration Logic)",
            "group": "Closing"
        },
        {
            "id": "q-univ-2",
            "text": "Do you have any Thyroid issues? (Dosing Instruction)",
            "group": "Closing"
        },
        {
            "id": "q-univ-3",
            "text": "Do you have anyone military in the family? (Discount Applied)",
            "group": "Closing"
        },
        {
            "id": "q-univ-4",
            "text": "Are you good at remembering to take things? (Commitment)",
            "group": "Closing"
        }
    ],
    "recommendations": [
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell-pros",
                    "text": "Weak stream / Swelling",
                    "pitch": "A weak stream is often caused by inflammation swelling the prostate against the urethra. This helps reduce that inflammation to open up the flow.",
                    "benefit": "help reduce prostate inflammation"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-pros",
                    "text": "Circulation issues",
                    "pitch": "Improved circulation supports healthy blood flow to the prostate to clear out toxins and reduce swelling.",
                    "benefit": "help improve pelvic circulation"
                }
            ]
        },
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-ed-pros",
                    "text": "Erectile Dysfunction symptoms",
                    "pitch": "Prostate issues often go hand-in-hand with performance issues. This helps boost testosterone and vitality while we fix the prostate.",
                    "benefit": "help support male vitality and performance"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-bladder",
                    "text": "Bladder control / Not emptying",
                    "pitch": "Sometimes the issue isn't just the prostate, but the nerves controlling the bladder. This supports the nerve signaling to help you empty fully.",
                    "benefit": "help support healthy nerve signalling to the bladder"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-noct",
                    "text": "Waking up at night (Nocturia)",
                    "pitch": "Waking up constantly ruins your body's ability to repair itself. This helps you stay asleep so your body can focus on healing the prostate.",
                    "benefit": "help you stay asleep through the night"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-pros", "name": "Prostate Symptoms", "gender": "male" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sex", "name": "Sexual Health", "gender": "male" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
