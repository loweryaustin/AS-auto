/**
 * Feilaira (Digital Lions)
 * Database file for "Feilaira"
 * Protocol: Joint Health & Structural Repair
 */
DATABASE_CONFIGS["Feilaira"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Feilaira (Base)",
        "pitch": "This provides the structural building blocks to rebuild cartilage and lubricate 'dry' joints from the inside out.",
        "gender": "any"
    },
    "knowledgeBase": "Feilaira",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-jnt-1",
            "text": "Where is the pain located? Knees, hips, back, or hands?",
            "group": "Diagnostic"
        },
        {
            "id": "q-jnt-2",
            "text": "Is the pain a dull ache (bone) or sharp/electric (nerve)? (Arialief)",
            "group": "Symptoms"
        },
        {
            "id": "q-jnt-3",
            "text": "Do you feel stiffest in the morning? (Sign of inflammation)",
            "group": "Symptoms"
        },
        {
            "id": "q-jnt-4",
            "text": "Do you need immediate relief while the repair builds up? (Basmontex)",
            "group": "Immediate Relief"
        },
        {
            "id": "q-jnt-5",
            "text": "Do you have poor circulation or cold hands/feet? (Tenurina)",
            "group": "Circulation"
        },
        {
            "id": "q-jnt-6",
            "text": "Are you carrying extra weight that puts pressure on your joints? (Laellium)",
            "group": "Weight Stress"
        },
        {
            "id": "q-jnt-7",
            "text": "Do you have visible swelling or fluid retention? (Resverador)",
            "group": "Inflammation"
        },
        {
            "id": "q-jnt-8",
            "text": "Do you have digestive issues or 'leaky gut' symptoms? (GoldenFrib)",
            "group": "Gut-Joint Axis"
        }
    ],
    "recommendations": [
        {
            "id": "supp-basmontex",
            "name": "Basmontex",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-pain-relief",
                    "text": "Morning Stiffness / Need Instant Relief",
                    "pitch": "Joint repair takes time. I'm adding Basmontex cream to give you immediate relief right now so you can move comfortably while Feilaira rebuilds the tissue.",
                    "benefit": "provide immediate topical relief"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-circ-joint",
                    "text": "Cold Joints / Poor Circulation",
                    "pitch": "Cartilage has no blood supply of its own. It starves easily. Tenurina improves circulation to push nutrients deep into the joint space.",
                    "benefit": "help drive repair nutrients into the joint"
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
                    "text": "Overweight / Knee or Hip Pain",
                    "pitch": "Every pound of weight puts 4 pounds of pressure on your knees. Laellium helps you shed the weight to physically take the grinding load off your joints.",
                    "benefit": "help reduce the physical load on your joints"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-nerve-pain",
                    "text": "Sharp / Shooting / Electric Pain",
                    "pitch": "That sharp, shooting sensation is often a nerve being pinched by the joint. Arialief calms the nerve pain while Feilaira fixes the joint structure.",
                    "benefit": "help calm sharp nerve pain"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-swell-joint",
                    "text": "Swelling / Redness / Heat",
                    "pitch": "If the joint is swollen, it can't heal. Resverador acts as a systemic anti-inflammatory to bring the puffiness down.",
                    "benefit": "help reduce swelling in the joint"
                }
            ]
        },
        {
            "id": "supp-goldenfrib",
            "name": "GoldenFrib",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-gut-joint",
                    "text": "Digestive Issues / Autoimmune",
                    "pitch": "Systemic inflammation often starts in the gut ('Leaky Gut'). GoldenFrib seals the gut to stop toxins from leaking out and attacking your joints.",
                    "benefit": "help stop inflammation at the gut source"
                }
            ]
        }
    ],
    "questionGroups": [
        { "id": "g-diag", "name": "Diagnostic", "gender": "any" },
        { "id": "g-symp", "name": "Symptoms", "gender": "any" },
        { "id": "g-imm", "name": "Immediate Relief", "gender": "any" },
        { "id": "g-circ", "name": "Circulation", "gender": "any" },
        { "id": "g-wgh", "name": "Weight Stress", "gender": "any" },
        { "id": "g-inf", "name": "Inflammation", "gender": "any" },
        { "id": "g-gut", "name": "Gut-Joint Axis", "gender": "any" }
    ],
    "references": []
};
