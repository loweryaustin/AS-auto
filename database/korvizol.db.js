/**
 * Korvizol (Digital Lions)
 * Database file for "Korvizol"
 * Protocol: Topical Nerve Pain Relief
 */
DATABASE_CONFIGS["Korvizol"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Korvizol (Base)",
        "pitch": "Daily Comfort Cream for Burning & Tingling. Apply topically for immediate relief.",
        "gender": "any"
    },
    "knowledgeBase": "Korvizol",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-kor-1",
            "text": "Where is the burning or tingling located? Feet, hands, or legs?",
            "group": "Diagnostic"
        },
        {
            "id": "q-kor-2",
            "text": "Is the sensation more of a burning fire, or sharp electric shocks?",
            "group": "Symptoms"
        },
        {
            "id": "q-kor-3",
            "text": "Do you feel numbness or 'dead' sensations in the area? (Cetacondor)",
            "group": "Internal Repair"
        },
        {
            "id": "q-kor-4",
            "text": "Is the pain worse at night? Does it keep you awake? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-kor-5",
            "text": "Do you have Diabetes or high blood sugar? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-kor-6",
            "text": "Do you have poor circulation or cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-kor-7",
            "text": "Are you carrying extra weight that puts pressure on your legs and feet? (Laellium)",
            "group": "Weight Stress"
        },
        {
            "id": "q-kor-8",
            "text": "Do you have visible swelling or inflammation in the legs? (Resverador)",
            "group": "Inflammation"
        }
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
                    "pitch": "The cream helps the surface pain instantly, but Cetacondor repairs the damaged nerve insulation (myelin) from the inside so the pain stops coming back.",
                    "benefit": "help repair the nerve structure internally"
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
                    "pitch": "Nerves die without oxygen. Tenurina improves circulation to drive blood flow to the feet, 'feeding' the dying nerves.",
                    "benefit": "help drive oxygen to the nerves"
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
                    "pitch": "High sugar acts like sandpaper on your nerves. Cetadusse regulates blood sugar to stop this daily damage so healing can begin.",
                    "benefit": "help stop sugar from damaging the nerves"
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
                    "pitch": "Nerve pain often flares at night when distractions are gone. This ensures you sleep deeply, which is the only time nerves actually repair themselves.",
                    "benefit": "help you sleep through the night burning"
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
                    "pitch": "If your legs are swollen, that fluid physically crushes the nerves. Resverador reduces the swelling to take the pressure off.",
                    "benefit": "help reduce swelling compressing the nerves"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-nerve",
                    "text": "Overweight / Pressure",
                    "pitch": "Carrying extra weight puts constant physical pressure on the nerves in your feet and spine. Laellium helps reduce this load to allow the nerves to recover.",
                    "benefit": "help reduce physical weight pressure on nerves"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-int", "name": "Internal Repair", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" },
        { "id": "g-root-s", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-wgh", "name": "Weight Stress", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" }
    ],
    "references": []
};
