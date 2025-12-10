/**
 * LipoVive
 * Database file for the "LipoVive" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["LipoVive"] = {
    "productLine": "WWG",
    "baseProduct": {
        "name": "LipoVive (Base)",
        "pitch": "Click the settings cog to edit this pitch.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-1765219810077-c7yfsq91n",
            "text": "Can you tell me a bit about your weightloss journey? (women)",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223363724-0.6439046091294586",
            "text": "How long have you been working on weightloss? (men)",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223082277-0.51549471386378",
            "text": "Age, Height, Weight",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223388116-0.15900417256766697",
            "text": "And what is your ideal goal weight?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223102492-0.2036661309563187",
            "text": "How long has it been since you were last at your ideal goal weight?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765219810077-ki4zgrxna",
            "text": "Are you able to get exercise on a regular basis?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223159137-0.39354369948543955",
            "text": "(If not working out) Is that because it's just not working for you?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765223074688-0.8836288369439597",
            "text": "Are you experiencing any underlying conditions such as diabetes?",
            "group": "General"
        },
        {
            "id": "q-1765223244393-0.3675648372191961",
            "text": "Are you experiencing sugar cravings?",
            "group": "Diabetes"
        },
        {
            "id": "q-1765223255976-0.8701777383660207",
            "text": "What was your last A1c?",
            "group": "Diabetes"
        },
        {
            "id": "q-1765223284567-0.12865193197712033",
            "text": "Are you experiencing any tingling or numbness in your extremities? (neuropathy)",
            "group": "Diabetes"
        }
    ],
    "recommendations": [
        {
            "id": "supp-1765219928111",
            "name": "NervoLyn",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765219928111",
                    "text": "High Stress / Anxiety",
                    "pitch": "",
                    "benefit": "help with balancing those cortisol levels for better wieghtloss"
                },
                {
                    "id": "symp-1765223425359",
                    "text": "Neuropathy, tingling numbness in extremities",
                    "pitch": "",
                    "benefit": "help with tingling and numbness"
                }
            ]
        },
        {
            "id": "supp-1765220077580",
            "name": "NaturoLipo",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765220077580",
                    "text": "Loose Skin",
                    "pitch": "",
                    "benefit": "help with tightening the skin as you reach your weightloss goal"
                },
                {
                    "id": "undefined",
                    "text": "Bone Density (elderly)",
                    "pitch": "",
                    "benefit": "help keep your bones stronger as you age"
                }
            ]
        },
        {
            "id": "supp-1765220153998",
            "name": "OatZem",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765220153998",
                    "text": "Weightloss",
                    "pitch": "this should be your fast acting booster",
                    "benefit": "help with weightloss without workouts"
                }
            ]
        },
        {
            "id": "supp-1765220236579",
            "name": "Gluco Recover",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765220236579",
                    "text": "Hypoglycemia",
                    "pitch": "",
                    "benefit": "help keep your blood sugar at good levels"
                },
                {
                    "id": "undefined",
                    "text": "Diabetes",
                    "pitch": "",
                    "benefit": "help come off of your diabetes medications"
                },
                {
                    "id": "undefined",
                    "text": "Sugar Cravings",
                    "pitch": "",
                    "benefit": "help with sugar cravings to aid your weightloss journey"
                }
            ]
        },
        {
            "id": "supp-1765220529710",
            "name": "MenoKaps",
            "gender": "female",
            "symptoms": [
                {
                    "id": "symp-1765220529710",
                    "text": "Menopause",
                    "pitch": "",
                    "benefit": "help with your menopause symptoms"
                }
            ]
        },
        {
            "id": "supp-1765220930295",
            "name": "Gluco Sleep",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765220930295",
                    "text": "Difficulty Sleeping",
                    "pitch": "",
                    "benefit": "help with getting to sleep and staying asleep"
                }
            ]
        }
    ],
    "references": [],
    "questionGroups": [
        {
            "id": "group-1765219810077-wu1sx",
            "name": "Weightloss",
            "gender": "any"
        },
        {
            "id": "g-1765222981795",
            "name": "General",
            "gender": "any"
        },
        {
            "id": "g-1765223033705",
            "name": "Diabetes",
            "gender": "any"
        }
    ]
};

