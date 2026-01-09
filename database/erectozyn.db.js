/**
 * Erectozyn (Digital Lions)
 * Database file for "Erectozyn"
 * Protocol: Testosterone Support & Male Vitality
 */
DATABASE_CONFIGS["Erectozyn"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Erectozyn (Base)",
        "pitch": "This formula supports the body's natural production of free testosterone to improve drive, energy, and muscle retention.",
        "gender": "male"
    },
    "knowledgeBase": "Erectozyn",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-t-1",
            "text": "Have you noticed a drop in overall energy, drive, or motivation?",
            "group": "Symptoms"
        },
        {
            "id": "q-t-2",
            "text": "Have you experienced a loss of muscle mass or strength recently?",
            "group": "Physical"
        },
        {
            "id": "q-t-3",
            "text": "Are you carrying extra weight, specifically in the belly area? (Laellium)",
            "group": "Estrogen Risk"
        },
        {
            "id": "q-t-4",
            "text": "How is your sleep quality? Do you wake up feeling rested? (Xelovita)",
            "group": "Production"
        },
        {
            "id": "q-t-5",
            "text": "Do you struggle with performance or circulation issues? (GaraHerb)",
            "group": "Performance"
        },
        {
            "id": "q-t-6",
            "text": "Do you have frequent urination or prostate concerns? (Jertaris)",
            "group": "Prostate"
        },
        {
            "id": "q-t-7",
            "text": "Are you under high stress or anxiety? (Arialief)",
            "group": "Cortisol"
        },
        {
            "id": "q-t-8",
            "text": "Do you crave sugar or have high blood sugar? (Cetadusse)",
            "group": "Diet"
        }
    ],
    "recommendations": [
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-belly",
                    "text": "Belly Fat / Weight Gain",
                    "pitch": "Belly fat produces an enzyme that turns your Testosterone into Estrogen. Laellium helps you burn that fat to protect your male hormones.",
                    "benefit": "help stop fat from killing testosterone"
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
                    "text": "Poor Sleep / Fatigue",
                    "pitch": "Your body produces almost all of its testosterone while you sleep. Xelovita ensures you get the deep rest needed to recharge your levels.",
                    "benefit": "support nightly testosterone production"
                }
            ]
        },
        {
            "id": "supp-garaherb",
            "name": "GaraHerb",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-ed",
                    "text": "Performance Issues / ED",
                    "pitch": "Testosterone is the fuel, but Circulation is the pump. GaraHerb maximizes blood flow to ensure you can use that new energy physically.",
                    "benefit": "help maximize physical performance and flow"
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
                    "text": "Prostate Concerns / Urination",
                    "pitch": "We want to boost your vitality without irritating the prostate. Jertaris protects prostate health while Erectozyn restores your drive.",
                    "benefit": "help protect prostate health while boosting T"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-stress",
                    "text": "High Stress / Anxiety",
                    "pitch": "Stress releases Cortisol, which blocks Testosterone from working. Arialief calms the nervous system to lower Cortisol and let T levels rise.",
                    "benefit": "help lower cortisol to boost testosterone"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar",
                    "text": "Sugar Cravings / High Glucose",
                    "pitch": "Sugar causes an immediate drop in testosterone. Cetadusse regulates blood sugar to prevent these crashes.",
                    "benefit": "help prevent sugar-induced testosterone drops"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "male" },
        { "id": "g-phys", "name": "Physical", "gender": "male" },
        { "id": "g-est", "name": "Estrogen Risk", "gender": "any" },
        { "id": "g-prod", "name": "Production", "gender": "any" },
        { "id": "g-perf", "name": "Performance", "gender": "male" },
        { "id": "g-pros", "name": "Prostate", "gender": "male" },
        { "id": "g-cort", "name": "Cortisol", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" }
    ],
    "references": []
};
