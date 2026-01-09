/**
 * Blinzador (Digital Lions)
 * Database file for "Blinzador"
 * Protocol: Antifungal & Nail Support
 */
DATABASE_CONFIGS["Blinzador"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Blinzador (Base)",
        "pitch": "This topical solution targets the infection at the site, penetrating the nail bed to clear fungus and support healthy regrowth.",
        "gender": "any"
    },
    "knowledgeBase": "Blinzador",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-fun-1",
            "text": "How long have you been dealing with the nail or foot fungus?",
            "group": "History"
        },
        {
            "id": "q-fun-2",
            "text": "Is it affecting just one toe, or has it spread to multiple nails/feet?",
            "group": "Symptoms"
        },
        {
            "id": "q-fun-3",
            "text": "Do you have digestive issues, bloating, or a history of yeast infections? (GoldenFrib)",
            "group": "Gut Source"
        },
        {
            "id": "q-fun-4",
            "text": "Do you crave sugar or have high blood sugar/Diabetes? (Cetadusse)",
            "group": "Fuel Source"
        },
        {
            "id": "q-fun-5",
            "text": "Do you have poor circulation or cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-fun-6",
            "text": "Do you feel like your immune system is weak or sluggish? (Zalovira)",
            "group": "Immunity"
        },
        {
            "id": "q-fun-7",
            "text": "Is the area swollen, red, or painful? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-fun-8",
            "text": "Do you also have nerve pain or tingling in the feet? (Arialief)",
            "group": "Nerve Health"
        }
    ],
    "recommendations": [
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-fung",
                    "text": "Digestive Issues / Recurring Fungus",
                    "pitch": "Fungus on the toes often comes from yeast overgrowth in the gut. GoldenFrib balances your internal flora to stop the infection from coming back.",
                    "benefit": "help stop the fungal source in the gut"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-fung",
                    "text": "Sugar Cravings / Diabetes",
                    "pitch": "Sugar feeds fungus. If your blood sugar is high, you are feeding the infection. Cetadusse regulates sugar to 'starve' the fungus out.",
                    "benefit": "help starve the fungus by lowering sugar"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-fung",
                    "text": "Cold Feet / Poor Circulation",
                    "pitch": "Your immune cells need to get to your toes to fight the fungus. Tenurina improves circulation to deliver your body's defenses to the infection site.",
                    "benefit": "help deliver immune cells to the feet"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-fung",
                    "text": "Weak Immunity / Slow Healing",
                    "pitch": "Blinzador works from the outside, but Zalovira boosts your immune system to fight the infection from the inside.",
                    "benefit": "help boost internal immune defense"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell-fung",
                    "text": "Swelling / Redness",
                    "pitch": "Fungus thrives in swollen, damp tissue. Resverador reduces inflammation to dry out the environment so the fungus can't grow.",
                    "benefit": "help reduce swelling to inhibit fungal growth"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-fung",
                    "text": "Tingling / Numbness",
                    "pitch": "Fungal infections often happen in feet that have nerve damage (neuropathy). Arialief repairs the nerves to restore sensation and health to the foot.",
                    "benefit": "help repair nerves in the infected area"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-gut", "name": "Gut Source", "gender": "any" },
        { "id": "g-fuel", "name": "Fuel Source", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" }
    ],
    "references": []
};
