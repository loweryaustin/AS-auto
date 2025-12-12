/**
 * Laellium (Weight Loss)
 * Database file for the "Laellium" supplement.
 * Product Line: Digital Lions
 * Protocol: Universal Weight Loss
 */
DATABASE_CONFIGS["Laellium"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Laellium (Base)",
        "pitch": "Weight Loss Support - 1 cap per day. (60 Day Supply)",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-wl-1",
            "text": "What’s your age, height, and current weight? (Duration Logic)",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-2",
            "text": "What’s your ideal weight-loss goal?",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-time",
            "text": "How long has it been since you were last at your goal weight? (Felaromi Trigger)",
            "group": "Weight Loss"
        },
        {
            "id": "q-wl-stress",
            "text": "Do you have any joint pain (arthritis) or nerve tingling (neuropathy)? (Stress/Safety Trigger)",
            "group": "Body Stress"
        },
        {
            "id": "q-wl-3",
            "text": "Have you tried anything before for weight loss? If so, what?",
            "group": "History"
        },
        {
            "id": "q-wl-4",
            "text": "Are you able to exercise consistently, even just light activity?",
            "group": "History"
        },
        {
            "id": "q-wl-5",
            "text": "Are you sleeping well at night?",
            "group": "Sleep"
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
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-meta",
                    "text": "Universal Weight Loss Inclusion",
                    "pitch": "This helps speed up your metabolic rate permanently so you shouldn't see weight gain once you're off the regimen.",
                    "benefit": "help permanently reset metabolic rate"
                }
            ]
        },
        {
            "id": "supp-felaromi",
            "name": "Felaromi",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-old-fat",
                    "text": "Long time since goal weight",
                    "pitch": "This helps break the fat cells up since it's been years since you've been at your goal weight.",
                    "benefit": "help break down stubborn fat cells"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-skin",
                    "text": "Loose Skin Prevention",
                    "pitch": "This helps tighten skin as you're in the process, so you shouldn't end up with a bunch of loose skin.",
                    "benefit": "help tighten skin during weight loss"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-stress",
                    "text": "Nerve Stress / Tingling (4th Supp)",
                    "pitch": "We need to have this on board to help get that nerve stress off your body. That helps your body feel safer to let go of that fat reserve.",
                    "benefit": "help lower body stress to unlock fat reserves"
                }
            ]
        },
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-joint-stress",
                    "text": "Joint Pain / Arthritis (4th Supp)",
                    "pitch": "We need to have this on board to help get that inflammation stress off your body. That helps your body feel safer to let go of that fat reserve.",
                    "benefit": "help lower physical stress to unlock fat reserves"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-bp-meds",
                    "text": "High Blood Pressure / Circulation",
                    "pitch": "Improved circulation helps flush out the toxins released by burning fat.",
                    "benefit": "help flush toxins from fat loss"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-wl", "name": "Weight Loss", "gender": "any" },
        { "id": "g-stress", "name": "Body Stress", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
