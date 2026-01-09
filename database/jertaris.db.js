/**
 * Jertaris (Digital Lions)
 * Database file for "Jertaris"
 * Protocol: Prostate Health & Urinary Flow
 */
DATABASE_CONFIGS["Jertaris"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Jertaris (Base)",
        "pitch": "This formula supports healthy prostate size to reduce urinary urgency, improve flow, and stop those frequent nighttime bathroom trips.",
        "gender": "male"
    },
    "knowledgeBase": "Jertaris",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-jer-1",
            "text": "How many times do you wake up at night to use the restroom (Nocturia)?",
            "group": "Symptoms"
        },
        {
            "id": "q-jer-2",
            "text": "Do you experience a weak stream, dribbling, or the feeling you can't empty fully?",
            "group": "Symptoms"
        },
        {
            "id": "q-jer-3",
            "text": "How long has this been affecting your sleep or daily life?",
            "group": "Impact"
        },
        {
            "id": "q-jer-4",
            "text": "Do you have inflammation or swelling elsewhere (joints/legs)? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-jer-5",
            "text": "Do you have poor circulation or high blood pressure? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-jer-6",
            "text": "Have you noticed a drop in libido or performance? (Erectozyn)",
            "group": "Sexual Health"
        },
        {
            "id": "q-jer-7",
            "text": "Are you carrying extra weight around the midsection? (Laellium)",
            "group": "Hormones/Weight"
        },
        {
            "id": "q-jer-8",
            "text": "Do you ever feel sudden urgency that is hard to control? (Arialief)",
            "group": "Nerve Health"
        }
    ],
    "recommendations": [
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-prostate-swell",
                    "text": "Weak Stream / Swelling",
                    "pitch": "A weak stream is caused by the prostate swelling against the urine tube. Resverador acts as a systemic anti-inflammatory to reduce that swelling and open the flow.",
                    "benefit": "help reduce prostate inflammation"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-pelvic",
                    "text": "Poor Circulation / Stagnation",
                    "pitch": "The pelvic area needs fresh blood flow to flush out toxins that irritate the prostate. Tenurina improves circulation to keep the area clean and healthy.",
                    "benefit": "help flush toxins from the prostate"
                }
            ]
        },
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-libido-pros",
                    "text": "Low Libido / ED Symptoms",
                    "pitch": "Prostate issues often lower your drive. Erectozyn supports healthy testosterone levels to restore your vitality while Jertaris fixes the plumbing.",
                    "benefit": "help restore male drive and vitality"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nocturia",
                    "text": "Waking up at Night (Nocturia)",
                    "pitch": "Waking up 3-4 times a night ruins your recovery. Xelovita helps you sleep deeply so your body produces the hormones needed to shrink the prostate.",
                    "benefit": "help you sleep through the urge to go"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-urgency",
                    "text": "Urgency / Bladder Spasms",
                    "pitch": "Sometimes 'urgency' is just an irritated nerve sending a false signal. Arialief calms the bladder nerves so you don't feel the need to go constantly.",
                    "benefit": "help calm overactive bladder nerves"
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
                    "text": "Belly Fat / Estrogen Dominance",
                    "pitch": "Belly fat turns testosterone into estrogen, which fuels prostate growth. Laellium helps burn that fat to stop the hormonal imbalance.",
                    "benefit": "help reduce belly fat driving prostate growth"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "male" },
        { "id": "g-imp", "name": "Impact", "gender": "male" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-sex", "name": "Sexual Health", "gender": "male" },
        { "id": "g-wgh", "name": "Hormones/Weight", "gender": "male" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" }
    ],
    "references": []
};
