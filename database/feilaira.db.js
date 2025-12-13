/**
 * Feilaira (Joint Support)
 * Database file for the "Feilaira" supplement.
 * Product Line: Digital Lions
 * Protocol: Joint Health & Inflammation
 */
DATABASE_CONFIGS["Feilaira"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Feilaira (Base)",
        "pitch": "Joint Support & Inflammation Relief. 1 cap per day.",
        "gender": "any"
    },
    // NEW LINK
    "knowledgeBase": "Feilaira",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-joint-1",
            "text": "Where are you feeling the most stiffness or pain? Knees, hips, hands? (Diagnostic)",
            "group": "Diagnostic"
        },
        {
            "id": "q-joint-2",
            "text": "How long has this been limiting your movement?",
            "group": "Diagnostic"
        },
        {
            "id": "q-joint-3",
            "text": "Is there visible swelling or redness in the joints? (Feilaira Base)",
            "group": "Inflammation"
        },
        {
            "id": "q-joint-4",
            "text": "Do you also experience any tingling or numbness in the hands or feet? (Arialief)",
            "group": "Nerve Check"
        },
        {
            "id": "q-joint-5",
            "text": "Do you have any circulation issues like cold hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-joint-6",
            "text": "Is the pain keeping you awake at night? (Xelovita)",
            "group": "Sleep"
        },
        {
            "id": "q-joint-7",
            "text": "Are you currently carrying any extra weight that might be putting pressure on the joints? (Laellium)",
            "group": "Weight Stress"
        },
        {
            "id": "q-joint-8",
            "text": "How is your digestion? Do you experience bloating or discomfort? (GoldenFrib)",
            "group": "Systemic Health"
        },
        {
            "id": "q-joint-9",
            "text": "Do you feel like your immune system struggles, or do you have autoimmune concerns? (Zalovira)",
            "group": "Systemic Health"
        },
        {
            "id": "q-joint-10",
            "text": "Have you been diagnosed with Diabetes or Pre-Diabetes? (Cetacondor)",
            "group": "Medical History"
        }
    ],
    "recommendations": [
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-joint",
                    "text": "Poor Circulation / Cold Extremities",
                    "pitch": "Joints have very poor blood flow naturally (like cartilage). We need to drive oxygenated blood into the joint to help repair the tissue.",
                    "benefit": "help drive healing blood flow to the joints"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-joint",
                    "text": "Tingling / Numbness / Sharp Pain",
                    "pitch": "Sometimes inflammation presses on the nerves causing shooting pain. This helps support the nerve health while Feilaira reduces the swelling.",
                    "benefit": "help calm nerve pain caused by inflammation"
                }
            ]
        },
        {
            "id": "supp-cetacondor",
            "name": "Cetacondor",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-diab-nerve",
                    "text": "Diabetes / Diabetic Neuropathy",
                    "pitch": "High blood sugar attacks both joints AND nerves. This helps protect the nerves from sugar damage while we treat the joints.",
                    "benefit": "help protect nerves from sugar damage"
                }
            ]
        },
        {
            "id": "supp-xelovita",
            "name": "Xelovita",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sleep-pain",
                    "text": "Pain affecting sleep",
                    "pitch": "Sleep is the only time the body repairs connective tissue. If pain wakes you up, you can't heal. This ensures you get the deep sleep needed for recovery.",
                    "benefit": "help you sleep through the discomfort to heal"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight-joint",
                    "text": "Overweight / Joint Pressure",
                    "pitch": "Every extra pound is 4 pounds of pressure on the knees. Reducing this weight physically takes the load off the joint so it can heal.",
                    "benefit": "help reduce physical load on your joints"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-inflam",
                    "text": "Digestive Issues / Gut Health",
                    "pitch": "Systemic inflammation often starts in the gut. By balancing your digestion, we stop the body from sending inflammatory signals to your joints.",
                    "benefit": "help stop inflammation at the source (the gut)"
                }
            ]
        },
        {
            "id": "supp-zalovira",
            "name": "Zalovira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-immune-joint",
                    "text": "Weak Immune System / Autoimmune",
                    "pitch": "Joint issues can sometimes be an immune response. This supports a healthy immune system so it stops attacking your own tissue.",
                    "benefit": "help balance immune response"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell-severe",
                    "text": "Severe Swelling / Redness",
                    "pitch": "For acute swelling, we add Resverador to act as a systemic anti-inflammatory to bring the puffiness down quickly.",
                    "benefit": "help rapidly reduce acute swelling"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Check", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-weight", "name": "Weight Stress", "gender": "any" },
        { "id": "g-sys", "name": "Systemic Health", "gender": "any" },
        { "id": "g-med", "name": "Medical History", "gender": "any" },
        { "id": "g-sleep", "name": "Sleep", "gender": "any" }
    ]
};
