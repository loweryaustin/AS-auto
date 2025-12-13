/**
 * Korvizol (Topical Neuropathy Relief)
 * Database file for the "Korvizol" supplement.
 * Product Line: Digital Lions
 * Protocol: Topical Nerve Pain Relief
 */
DATABASE_CONFIGS["Korvizol"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Korvizol (Base)",
        "pitch": "Daily Comfort Cream for Burning & Tingling. Apply topically.",
        "gender": "any"
    },
    "knowledgeBase": "Korvizol", // Linked immediately
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-kor-1",
            "text": "Where is the burning or tingling located? Feet, hands, or legs? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-kor-2",
            "text": "Is the sensation more of a burning fire, or electric shocks? (Korvizol Base)",
            "group": "Symptoms"
        },
        {
            "id": "q-kor-3",
            "text": "Is the pain worse at night or does it keep you awake? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-kor-4",
            "text": "Do you have Diabetes or high blood sugar? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-kor-5",
            "text": "Do you feel numbness or 'dead' sensations in the area? (Cetacondor/Arialief)",
            "group": "Internal Repair"
        },
        {
            "id": "q-kor-6",
            "text": "Do you have poor circulation or cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-kor-7",
            "text": "Do you have swelling or inflammation in the legs? (Resverador)",
            "group": "Inflammation"
        }
        // Closing questions removed
    ],
    "recommendations": [
        {
            "id": "supp-cetacondor",
            "name": "Cetacondor",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-internal-nerve",
                    "text": "Numbness / Deep Nerve Damage",
                    "pitch": "The cream helps the surface pain instantly, but Cetacondor repairs the damaged nerve insulation from the inside so the pain stops coming back.",
                    "benefit": "help repair the nerve structure internally"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-burn",
                    "text": "Night Burning / Insomnia",
                    "pitch": "Nerve pain often flares at night when distractions are gone. This ensures you sleep deeply so your nerves can go into repair mode.",
                    "benefit": "help you sleep through the night burning"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-nerve",
                    "text": "Cold Feet / Poor Circulation",
                    "pitch": "Nerves die without oxygen. Tenurina drives blood flow to the feet to feed the nerves we are trying to save.",
                    "benefit": "help drive oxygen to the dying nerves"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diab-pain",
                    "text": "Diabetes / Sugar Spikes",
                    "pitch": "Sugar acts like sandpaper on your nerves. We need to control the sugar spikes to stop the daily damage.",
                    "benefit": "help stop sugar from damaging the nerves"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell-nerve",
                    "text": "Swelling / Compression",
                    "pitch": "If your feet are swollen, the fluid crushes the nerves. This reduces the swelling to take the pressure off.",
                    "benefit": "help reduce swelling compressing the nerves"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-root-s", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-int", "name": "Internal Repair", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" }
    ]
};
