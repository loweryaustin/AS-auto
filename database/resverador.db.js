/**
 * Resverador (Digital Lions)
 * Database file for "Resverador"
 * Protocol: Systemic Inflammation & Swelling
 */
DATABASE_CONFIGS["Resverador"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Resverador (Base)",
        "pitch": "This formula targets systemic inflammation and fluid retention, acting like a 'fire extinguisher' for chronic pain and swelling.",
        "gender": "any"
    },
    "knowledgeBase": "Resverador",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-res-1",
            "text": "Where do you feel the most inflammation? Joints, legs, or all over?",
            "group": "Symptoms"
        },
        {
            "id": "q-res-2",
            "text": "Do you have visible swelling (edema) or puffiness in your ankles/feet?",
            "group": "Swelling"
        },
        {
            "id": "q-res-3",
            "text": "Do you have specific joint pain or arthritis diagnoses? (Feilaira)",
            "group": "Joints"
        },
        {
            "id": "q-res-4",
            "text": "Do you experience tingling or numbness caused by the swelling? (Arialief)",
            "group": "Nerves"
        },
        {
            "id": "q-res-5",
            "text": "How is your digestion? Do you have bloating or Leaky Gut issues? (GoldenFrib)",
            "group": "Gut Source"
        },
        {
            "id": "q-res-6",
            "text": "Are you carrying extra weight that feels 'inflammatory' or stubborn? (Laellium)",
            "group": "Weight"
        },
        {
            "id": "q-res-7",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-res-8",
            "text": "Do you crave sugar or have high blood sugar? (Cetadusse)",
            "group": "Diet"
        }
    ],
    "recommendations": [
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-joint-repair",
                    "text": "Arthritis / Joint Damage",
                    "pitch": "Resverador puts out the 'fire' of inflammation, but Feilaira rebuilds the 'house' (cartilage). You need both to fully restore mobility.",
                    "benefit": "help rebuild damaged joint tissue"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-comp",
                    "text": "Numbness / Tingling / Compression",
                    "pitch": "When tissue swells, it crushes your nerves. Resverador reduces the swelling, and Arialief repairs the crushed nerve to stop the tingling.",
                    "benefit": "help repair nerves damaged by compression"
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
                    "text": "Digestive Issues / Leaky Gut",
                    "pitch": "Most inflammation starts in the gut. If your gut is 'leaking' toxins, you will stay inflamed forever. GoldenFrib seals the leak at the source.",
                    "benefit": "help stop inflammation at the gut source"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-flush",
                    "text": "Poor Circulation / Edema",
                    "pitch": "Swelling is just stuck fluid. Tenurina improves circulation to flush that stagnant fluid out of your legs and feet.",
                    "benefit": "help flush out fluid retention"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-fat-inflam",
                    "text": "Overweight / Belly Fat",
                    "pitch": "Fat cells release inflammatory chemicals called cytokines. To lower your total body inflammation, we need to reduce the fat mass with Laellium.",
                    "benefit": "help reduce inflammatory fat cells"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-sugar-fire",
                    "text": "Sugar Cravings / High Glucose",
                    "pitch": "Sugar is highly inflammatory. It acts like lighter fluid on the fire. Cetadusse regulates sugar to stop feeding the inflammation.",
                    "benefit": "help prevent sugar-induced inflammation"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-swell", "name": "Swelling", "gender": "any" },
        { "id": "g-joint", "name": "Joints", "gender": "any" },
        { "id": "g-nerve", "name": "Nerves", "gender": "any" },
        { "id": "g-gut", "name": "Gut Source", "gender": "any" },
        { "id": "g-wgh", "name": "Weight", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-diet", "name": "Diet", "gender": "any" }
    ],
    "references": []
};
