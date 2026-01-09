/**
 * Cetadusse (Digital Lions)
 * Database file for "Cetadusse"
 * Protocol: Blood Sugar & Metabolic Health
 */
DATABASE_CONFIGS["Cetadusse"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Cetadusse (Base)",
        "pitch": "This helps regulate glucose absorption and improve insulin sensitivity, protecting your nerves and blood vessels from sugar damage.",
        "gender": "any"
    },
    "knowledgeBase": "Cetadusse",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-cet-1",
            "text": "How long have you been managing high blood sugar or Diabetes?",
            "group": "History"
        },
        {
            "id": "q-cet-2",
            "text": "What was your last A1C reading?",
            "group": "History"
        },
        {
            "id": "q-cet-3",
            "text": "Do you experience tingling, numbness, or burning in your hands or feet? (Cetacondor)",
            "group": "Neuropathy Risk"
        },
        {
            "id": "q-cet-4",
            "text": "Do you have issues with circulation or high blood pressure? (Tenurina)",
            "group": "Vascular Health"
        },
        {
            "id": "q-cet-5",
            "text": "Are you carrying extra weight around the midsection (Belly Fat)? (Laellium)",
            "group": "Weight"
        },
        {
            "id": "q-cet-6",
            "text": "Do you struggle with intense sugar cravings after meals? (Goldenfrib)",
            "group": "Gut Health"
        },
        {
            "id": "q-cet-7",
            "text": "Do you have joint pain or general stiffness? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-cet-8",
            "text": "How is your sleep? Do you wake up hungry or sweating? (Xelovita)",
            "group": "Sleep"
        }
    ],
    "recommendations": [
        {
            "id": "supp-cetacondor",
            "name": "Cetacondor",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-neuro",
                    "text": "Tingling / Numbness / Neuropathy",
                    "pitch": "High blood sugar strips the insulation off your nerves, causing that tingling. Cetacondor repairs the nerves and regrows that insulation.",
                    "benefit": "help repair sugar-damaged nerves"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-belly",
                    "text": "Belly Fat / Weight Gain",
                    "pitch": "Belly fat releases chemicals that block insulin from working. Laellium helps you burn that specific fat to reverse the resistance.",
                    "benefit": "help burn fat causing insulin resistance"
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
                    "text": "High Blood Pressure / Poor Circulation",
                    "pitch": "Sugar acts like sandpaper inside your blood vessels, causing scarring and stiffness. Tenurina heals the vessel lining to restore healthy flow.",
                    "benefit": "help heal blood vessels from sugar damage"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-cravings",
                    "text": "Sugar Cravings / Gut Issues",
                    "pitch": "Bad bacteria in the gut feed on sugar and send craving signals to your brain. GoldenFrib balances the gut to stop these cravings at the source.",
                    "benefit": "help stop cravings by balancing the gut"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-inflam",
                    "text": "Joint Stiffness / Inflammation",
                    "pitch": "Sugar causes 'Glycation,' which turns your joints stiff and brittle. Resverador reduces the systemic inflammation caused by high glucose.",
                    "benefit": "help reduce sugar-induced inflammation"
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
                    "text": "Poor Sleep / Night Sweats",
                    "pitch": "Blood sugar crashes at night can wake you up. Xelovita helps you stay asleep, which lowers cortisol (stress hormone) and stabilizes morning sugar.",
                    "benefit": "help stabilize hormones during sleep"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-neuro", "name": "Neuropathy Risk", "gender": "any" },
        { "id": "g-vasc", "name": "Vascular Health", "gender": "any" },
        { "id": "g-wgh", "name": "Weight", "gender": "any" },
        { "id": "g-gut", "name": "Gut Health", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ],
    "references": []
};
