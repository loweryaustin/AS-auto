/**
 * Blinzador (Fungus)
 * Database file for the "Blinzador" supplement.
 * Product Line: Digital Lions
 * Protocol: Antifungal & Tissue Repair
 */
DATABASE_CONFIGS["Blinzador"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Blinzador (Base)",
        "pitch": "Fungus Support Spray. (180 Day Protocol)",
        "gender": "any"
    },
    "guaranteeDays": 180,
    "questions": [
        {
            "id": "q-fun-1",
            "text": "How long have you been dealing with the foot or nail fungus? (Protocol Setup)",
            "group": "Fungus"
        },
        {
            "id": "q-fun-2",
            "text": "Is it mostly on the skin, under the nails, or both? (Diagnostic)",
            "group": "Fungus"
        },
        {
            "id": "q-fun-3",
            "text": "Have you had issues with recurring infections, athlete’s foot, or yeast issues in the past? (GoldenFrib)",
            "group": "Root Cause"
        },
        {
            "id": "q-fun-4",
            "text": "Do you have dry, cracked feet or generally cold feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-fun-5",
            "text": "Do you crave sugar or have high blood sugar/diabetes? (Cetadusse)",
            "group": "Root Cause"
        },
        {
            "id": "q-fun-6",
            "text": "Is there redness, swelling, or pain in the area? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-fun-7",
            "text": "Do you feel like your immune system struggles to fight things off? (Zalovira)",
            "group": "Immunity"
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
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-fung",
                    "text": "Recurring infections / Gut history",
                    "pitch": "Fungus on the outside often starts with Candida overgrowth on the inside. This helps balance the gut so the fungus stops coming back.",
                    "benefit": "help stop the internal source of the fungus"
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
                    "pitch": "Sugar is the fuel that fungus eats. We need to control your blood sugar levels to essentially 'starve' the fungus out.",
                    "benefit": "help starve the fungus by controlling sugar"
                }
            ]
        },
        {
            "id": "supp-tenurima",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-fung",
                    "text": "Dry cracked feet / Cold feet",
                    "pitch": "The feet are the hardest place to heal because they are furthest from the heart. This drives oxygenated blood to the toes to speed up repair.",
                    "benefit": "help drive healing blood flow to the feet"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam-fung",
                    "text": "Swelling / Redness / Pain",
                    "pitch": "If the tissue is inflamed, it can't heal properly. This helps reduce the redness and swelling so the Blinzador can penetrate better.",
                    "benefit": "help reduce inflammation to allow healing"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-imm-fung",
                    "text": "Weak immune system",
                    "pitch": "This provides the immune support your body needs to fight off the infection from the inside while the spray works on the outside.",
                    "benefit": "help boost immune defense against infection"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-fung", "name": "Fungus", "gender": "any" },
        { "id": "g-root", "name": "Root Cause", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-inflam", "name": "Inflammation", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-close", "name": "Closing", "gender": "any" }
    ]
};
