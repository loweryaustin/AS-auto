/**
 * Alitoryn (Oral Health)
 * Database file for the "Alitoryn" supplement.
 * Product Line: Digital Lions
 * Protocol: Oral Microbiome & Gum Health
 */
DATABASE_CONFIGS["Alitoryn"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Alitoryn (Base)",
        "pitch": "Oral Health & Microbiome Support. 1 cap per day (chewable/dissolvable).",
        "gender": "any"
    },
    // Placeholder for future KB
    "knowledgeBase": "Alitoryn",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-oral-1",
            "text": "Are you dealing with bleeding gums, sensitivity, or bad breath? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-oral-2",
            "text": "How long have you noticed these dental issues?",
            "group": "Diagnostic"
        },
        {
            "id": "q-oral-3",
            "text": "Do your gums bleed when you brush or floss? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-oral-4",
            "text": "Do you have sensitive teeth to hot or cold? (Alitoryn Base)",
            "group": "Enamel Strength"
        },
        {
            "id": "q-oral-5",
            "text": "Do you consume a lot of sugary foods or drinks? (Cetadusse)",
            "group": "Dietary Habits"
        },
        {
            "id": "q-oral-6",
            "text": "Do you have issues with digestion or gut health? (GoldenFrib)",
            "group": "Gut-Mouth Axis"
        },
        {
            "id": "q-oral-7",
            "text": "Do you feel like you get sick easily or have low immunity? (Zalovira)",
            "group": "Immunity"
        },
        {
            "id": "q-oral-8",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Circulation"
        }
        // Closing questions removed
    ],
    "recommendations": [
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gum-bleed",
                    "text": "Bleeding Gums / Inflammation",
                    "pitch": "Bleeding gums are a sign of systemic inflammation. This helps reduce swelling in the gum tissue so it can heal and stop bleeding.",
                    "benefit": "help reduce gum inflammation and bleeding"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-teeth",
                    "text": "Sugar cravings / High sugar intake",
                    "pitch": "Sugar feeds the harmful bacteria that cause cavities and bad breath. This helps regulate blood sugar to starve those bacteria.",
                    "benefit": "help starve cavity-causing bacteria"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-breath",
                    "text": "Bad Breath / Digestion",
                    "pitch": "The mouth is the start of the digestive tract. Bad breath often comes from the gut. This balances your entire digestive system from top to bottom.",
                    "benefit": "help target the internal source of bad breath"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gum-heal",
                    "text": "Slow gum healing / Receding gums",
                    "pitch": "Gum tissue is highly vascular. It needs strong blood flow to repair itself and stay attached to the tooth. This drives healing circulation to the gums.",
                    "benefit": "help improve circulation for gum regeneration"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-oral-immune",
                    "text": "Frequent infections / Abscesses",
                    "pitch": "Your mouth is the first line of defense. This boosts your immune system to help fight off oral infections and bacteria.",
                    "benefit": "help boost immune defense in the mouth"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-enamel", "name": "Enamel Strength", "gender": "any" },
        { "id": "g-diet", "name": "Dietary Habits", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Mouth Axis", "gender": "any" },
        { "id": "g-imm", "name": "Immunity", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" }
    ]
};
