/**
 * Tenurina (Digital Lions)
 * Database file for "Tenurina"
 * Protocol: Circulation & Heart Health
 */
DATABASE_CONFIGS["Tenurina"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Tenurina (Base)",
        "pitch": "This formula acts as a vasodilator, opening up your blood vessels to improve circulation, warm up cold extremities, and deliver oxygen to vital tissues.",
        "gender": "any"
    },
    "knowledgeBase": "Tenurina",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-ten-1",
            "text": "Do you often have cold hands or feet, even when it's warm?",
            "group": "Symptoms"
        },
        {
            "id": "q-ten-2",
            "text": "Have you been diagnosed with High Blood Pressure?",
            "group": "History"
        },
        {
            "id": "q-ten-3",
            "text": "Do you experience tingling or numbness in your extremities? (Arialief)",
            "group": "Nerve Health"
        },
        {
            "id": "q-ten-4",
            "text": "Do you have joint pain or stiffness that gets worse with inactivity? (Feilaira)",
            "group": "Joints"
        },
        {
            "id": "q-ten-5",
            "text": "Are you managing Diabetes or high blood sugar? (Cetadusse)",
            "group": "Root Cause: Sugar"
        },
        {
            "id": "q-ten-6",
            "text": "Do you have swelling (edema) in your ankles or legs? (Resverador)",
            "group": "Swelling"
        },
        {
            "id": "q-ten-7",
            "text": "(Men) Do you have any issues with prostate health or erectile function? (Keskara)",
            "group": "Men's Health"
        },
        {
            "id": "q-ten-8",
            "text": "Are you carrying extra weight that puts strain on your heart? (Laellium)",
            "group": "Weight"
        }
    ],
    "recommendations": [
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Numbness / Tingling",
                    "pitch": "Circulation feeds the nerves. If you have tingling, the nerves are already damaged from lack of oxygen. Arialief repairs the nerve structure while Tenurina restores the fuel supply.",
                    "benefit": "help repair oxygen-starved nerves"
                }
            ]
        },
        {
            "id": "supp-feilaira",
            "name": "Feilaira",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-joints",
                    "text": "Joint Stiffness / Pain",
                    "pitch": "Joints have very poor blood supply naturally. Tenurina improves flow to push nutrients deep into the cartilage, while Feilaira provides the building blocks to repair the joint.",
                    "benefit": "help drive repair nutrients into stiff joints"
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
                    "text": "Diabetes / High Blood Sugar",
                    "pitch": "High sugar acts like sandpaper inside your arteries, causing scarring and stiffness. Cetadusse regulates sugar to stop this damage so your vessels can heal and relax.",
                    "benefit": "help prevent sugar from scarring arteries"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swelling",
                    "text": "Swelling (Edema) / Inflammation",
                    "pitch": "Swollen tissue physically squeezes your blood vessels shut. Resverador reduces the swelling to take the pressure off your veins, allowing better flow.",
                    "benefit": "help reduce swelling compressing the veins"
                }
            ]
        },
        {
            "id": "supp-keskara",
            "name": "Keskara",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-ed",
                    "text": "Erectile Dysfunction / Performance",
                    "pitch": "Performance is purely hydraulics. Tenurina provides the blood flow, and Keskara targets the specific tissues and hormones needed for male vitality.",
                    "benefit": "help support blood flow for male performance"
                }
            ]
        },
        {
            "id": "supp-laellium",
            "name": "Laellium",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-weight",
                    "text": "Overweight / Heart Strain",
                    "pitch": "For every pound of fat, your body grows a mile of new capillaries. That puts massive strain on your heart. Laellium helps shed the weight to reduce the heart's workload.",
                    "benefit": "help reduce the heart's workload by losing weight"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-hist", "name": "History", "gender": "any" },
        { "id": "g-nerve", "name": "Nerve Health", "gender": "any" },
        { "id": "g-joint", "name": "Joints", "gender": "any" },
        { "id": "g-root", "name": "Root Cause: Sugar", "gender": "any" },
        { "id": "g-swell", "name": "Swelling", "gender": "any" },
        { "id": "g-men", "name": "Men's Health", "gender": "male" },
        { "id": "g-weight", "name": "Weight", "gender": "any" }
    ],
    "references": []
};
