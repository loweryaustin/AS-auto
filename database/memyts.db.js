/**
 * Memyts
 * Database file for the "Memyts" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["Memyts"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "Memyts (Base)",
        "gender": "any",
        "pitch": "It’s the foundational blend formulated to help support sharp cognitive function and assist your brain in maintaining mental performance and clarity—this is where we start building your mental edge. (Lack of focus/Attention, High mental demand, Memory Recall issues)"
    },
    "guaranteeDays": 60,
    "references": [
        {
            "id": "ref-1763256437923",
            "title": "Chart",
            "icon": "scale",
            "type": "image",
            "shortcut": "1",
            "url": "https://www.vertex42.com/ExcelTemplates/Images/body-mass-index-line-chart.png"
        },
        {
            "id": "ref-1763256516598",
            "title": "Table",
            "icon": "scale",
            "type": "image",
            "shortcut": "2",
            "url": "https://www.vertex42.com/ExcelTemplates/Images/body-mass-index-chart-portrait.png"
        },
        {
            "id": "ref-1763256602461",
            "title": "BMI-Calc",
            "icon": "scale",
            "type": "website",
            "shortcut": "3",
            "url": "https://www.calculator.net/bmi-calculator.html"
        },
        {
            "id": "ref-1763256702258",
            "title": "A1C",
            "icon": "area-chart",
            "type": "image",
            "shortcut": "4",
            "url": "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/9731-a1c-glucose-levels"
        }
    ],
    "questions": [
        {
            "id": "q-1764866303582-1wyt50lts",
            "text": "How long have you been dealing with the diabetes?",
            "group": "General"
        },
        {
            "id": "q-1764866303582-lo81zwgmm",
            "text": "Are you dealing with any other underlying health conditions such as high blood pressure or cholesterol?",
            "group": "General"
        },
        {
            "id": "q-1764866303582-v2d201rl7",
            "text": "Okay, do you take medications for those?",
            "group": "General"
        },
        {
            "id": "q-1764866303582-wgqahovth",
            "text": "How does this affect your life?",
            "group": "General"
        },
        {
            "id": "q-1764866303582-gkh55clwj",
            "text": "What is your biggest concern when it to comes to your health?",
            "group": "General"
        }
    ],
    "recommendations": [
        {
            "id": "supp-1764866869644",
            "name": "Resverador",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1764866869644",
                    "text": "Age related concerns",
                    "pitch": "Resverador delivers a powerful antioxidant. This helps to support cellular health and provides defense against oxidative stress, which is crucial to support long-term wellness.\"",
                    "benefit": "helps support cellular health and helps long term cognitive protection"
                },
                {
                    "id": "undefined",
                    "text": "High Stress Lifestyle",
                    "pitch": "Resverador delivers a powerful antioxidant. This helps to support cellular health and provides defense against oxidative stress, which is crucial to support long-term wellness.\"",
                    "benefit": "helps support against oxidative stress and or free radical damage"
                }
            ]
        },
        {
            "id": "supp-1764866951680",
            "name": "Tenurima",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1764866951680",
                    "text": "Tennitus/ Ringing in ears",
                    "pitch": "Tenurima helps provide vascular support to promote optimal blood flow and efficient nutrient delivery to the brain, which is crucial for supporting memory function and mental clarity.\"",
                    "benefit": "promotes optimal blood flow "
                },
                {
                    "id": "undefined",
                    "text": "General Fatigue",
                    "pitch": "Tenurima helps provide vascular support to promote optimal blood flow and efficient nutrient delivery to the brain, which is crucial for supporting memory function and mental clarity.\"",
                    "benefit": "helps general fatigue/ oxygen and nutrient delivery throughout the body"
                },
                {
                    "id": "undefined",
                    "text": "Cold Extremities",
                    "pitch": "Tenurima helps provide vascular support to promote optimal blood flow and efficient nutrient delivery to the brain, which is crucial for supporting memory function and mental clarity.\"",
                    "benefit": "helps support proper blood flow and oxygen delivery"
                }
            ]
        },
        {
            "id": "supp-1764867228711",
            "name": "Felaromi",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1764867228711",
                    "text": "Digestive Issues",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "helps support healthy gut brain axis"
                },
                {
                    "id": "undefined",
                    "text": "Irratability/ Mood swings",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "helps support unexplained shifts in emotional state often linked to gut-brain axis"
                },
                {
                    "id": "undefined",
                    "text": "Weak Immunity",
                    "pitch": "Felaromi provides a powerful foundation of prebiotics and probiotics to support a healthy digestive environment, directly contributing to the mental clarity and focus necessary for optimal memory function.",
                    "benefit": "Supports foundational gut health to help reduce frequent minor illnesses"
                }
            ]
        },
        {
            "id": "supp-1764867452225",
            "name": "Arialief",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1764867452225",
                    "text": "Mental Fatigue/ trouble learning new information (retention)",
                    "pitch": "Arialief helps support healthy cellular energy and antioxidant protection, which is essential for maintaining memory function and mental acuity.\"",
                    "benefit": "Helps support nerve health/ energy"
                },
                {
                    "id": "undefined",
                    "text": "Brain Fog",
                    "pitch": "Arialief helps support healthy cellular energy and antioxidant protection, which is essential for maintaining memory function and mental acuity.\"",
                    "benefit": "Helps support brain fog"
                }
            ]
        }
    ],
    "questionGroups": [
        {
            "id": "group-1764866303582-6h869",
            "name": "General",
            "gender": "any"
        }
    ]
};

