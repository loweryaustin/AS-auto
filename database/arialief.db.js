/**
 * Arialief (Digital Lions)
 * Database file for "Arialief"
 * Protocol: Nerve Health & Signal Comfort
 */
DATABASE_CONFIGS["Arialief"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Arialief (Base)",
        "pitch": "This formula supports healthy nerve signaling to reduce the 'static' (tingling/burning) and improve comfort.",
        "gender": "any"
    },
    "knowledgeBase": "Arialief",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ari-1",
            "text": "Where is the nerve discomfort located? Feet, hands, or legs?",
            "group": "Diagnostic"
        },
        {
            "id": "q-ari-2",
            "text": "Is the sensation more of a burning fire, tingling, or numbness?",
            "group": "Symptoms"
        },
        {
            "id": "q-ari-3",
            "text": "Is the pain worse at night? Does it keep you awake? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-ari-4",
            "text": "Do you have poor circulation or cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-ari-5",
            "text": "Are you managing Diabetes or high blood sugar? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-ari-6",
            "text": "Do you have swelling or inflammation in the area? (Resverador)",
            "group": "Compression"
        },
        {
            "id": "q-ari-7",
            "text": "Do you feel like you need immediate relief while this builds up? (Korvizol)",
            "group": "Immediate Relief"
        },
        {
            "id": "q-ari-8",
            "text": "Do you have digestive issues or a history of alcohol use? (GoldenFrib)",
            "group": "Gut-Nerve Axis"
        }
    ],
    "recommendations": [
        {
            "id": "supp-korvizol",
            "name": "Korvizol",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-pain",
                    "text": "Burning Pain / Need Instant Relief",
                    "pitch": "Oral supplements take time to rebuild the nerve. I'm adding Korvizol cream to give you immediate relief from the burning right now.",
                    "benefit": "provide immediate topical relief"
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
                    "text": "Cold Feet / Poor Circulation",
                    "pitch": "Nerves starve without oxygen. Tenurina pumps blood to the extremities to feed the dying nerves so they can heal.",
                    "benefit": "help drive oxygen to nerves for repair"
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
                    "text": "Diabetes / Sugar Spikes",
                    "pitch": "Sugar attacks the nerve coating like acid. Cetadusse regulates your blood sugar to stop this daily damage.",
                    "benefit": "help stop sugar from damaging nerves"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell",
                    "text": "Swelling / Compression",
                    "pitch": "If your feet are swollen, the fluid crushes the nerves. Resverador acts as a natural diuretic to release this pressure.",
                    "benefit": "help reduce swelling compressing the nerves"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep",
                    "text": "Night Pain / Insomnia",
                    "pitch": "Nerve repair happens during deep sleep. Xelovita ensures you stay asleep long enough for the body to fix the wiring.",
                    "benefit": "help relax nerves for repair during sleep"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-alcohol",
                    "text": "Alcohol History / Gut Issues",
                    "pitch": "Alcohol and poor digestion strip B-vitamins from your body, causing nerve damage. GoldenFrib restores the gut's ability to absorb these critical nutrients.",
                    "benefit": "help restore nutrient absorption for nerves"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-root", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-comp", "name": "Compression", "gender": "any" },
        { "id": "g-imm", "name": "Immediate Relief", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Nerve Axis", "gender": "any" }
    ],
    "references": []
};
