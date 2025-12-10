/**
 * ReduBurn
 * Database file for the "ReduBurn" supplement.
 * This file "self-registers" into the global DATABASE_CONFIGS object.
 */
DATABASE_CONFIGS["ReduBurn"] = {
    "productLine": "WWG",
    "baseProduct": {
        "name": "ReduBurn (Base)",
        "pitch": "Click the settings cog to edit this pitch.",
        "gender": "any"
    },
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-1765225381307-401jaq3w8",
            "text": "Can you tell me a bit about your weightloss journey? (women)",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225381307-83ijd9ds5",
            "text": "How long have you been working on weightloss? (men)",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225381307-9l3siylb6",
            "text": "Age, Height, Weight",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225381307-1fq5wjft0",
            "text": "And what is your ideal goal weight?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225542298-0.06715365926891992",
            "text": "How long has it been since you were last at your ideal goal weight?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225548823-0.6405752616187138",
            "text": "Are you able to get exercise on a regular basis?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225550646-0.10151871069910301",
            "text": "(If not working out) Is that because it's just not working for you?",
            "group": "Weightloss"
        },
        {
            "id": "q-1765225564643-0.7004332585754139",
            "text": "Are you experiencing any underlying conditions such as diabetes?",
            "group": "General"
        },
        {
            "id": "q-1765225573700-0.5469925583844918",
            "text": "Are you experiencing sugar cravings?",
            "group": "Diabetes"
        },
        {
            "id": "q-1765225577933-0.3384124533804498",
            "text": "What was your last A1c?",
            "group": "Diabetes"
        },
        {
            "id": "q-1765225581329-0.6116754143498137",
            "text": "Are you experiencing any tingling or numbness in your extremities? (neuropathy)",
            "group": "Diabetes"
        }
    ],
    "recommendations": [
        {
            "id": "supp-1765225414517-debmn",
            "name": "NervoLyn",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225414517-xppro",
                    "text": "High Stress / Anxiety",
                    "pitch": "",
                    "benefit": "help with balancing those cortisol levels for better wieghtloss"
                },
                {
                    "id": "symp-1765225414517-64k1b",
                    "text": "Neuropathy, tingling numbness in extremities",
                    "pitch": "",
                    "benefit": "help with tingling and numbness"
                }
            ]
        },
        {
            "id": "supp-1765225425700-oj2ch",
            "name": "NaturoLipo",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225425700-q002m",
                    "text": "Loose Skin",
                    "pitch": "",
                    "benefit": "help with tightening the skin as you reach your weightloss goal"
                },
                {
                    "id": "symp-1765225425700-8gfam",
                    "text": "Bone Density (elderly)",
                    "pitch": "",
                    "benefit": "help keep your bones stronger as you age"
                }
            ]
        },
        {
            "id": "supp-1765225437318-vd98j",
            "name": "OatZem",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225437318-d01mi",
                    "text": "Weightloss",
                    "pitch": "this should be your fast acting booster",
                    "benefit": "help with weightloss without workouts"
                }
            ]
        },
        {
            "id": "supp-1765225447699-mmf13",
            "name": "Gluco Recover",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225447699-zss1u",
                    "text": "Hypoglycemia",
                    "pitch": "",
                    "benefit": "help keep your blood sugar at good levels"
                },
                {
                    "id": "symp-1765225447699-sn5y7",
                    "text": "Diabetes",
                    "pitch": "",
                    "benefit": "help come off of your diabetes medications"
                },
                {
                    "id": "symp-1765225447699-rmu3d",
                    "text": "Sugar Cravings",
                    "pitch": "",
                    "benefit": "help with sugar cravings to aid your weightloss journey"
                }
            ]
        },
        {
            "id": "supp-1765225466141-fblmy",
            "name": "MenoKaps",
            "gender": "female",
            "symptoms": [
                {
                    "id": "symp-1765225466141-mrh01",
                    "text": "Menopause",
                    "pitch": "",
                    "benefit": "help with your menopause symptoms"
                }
            ]
        },
        {
            "id": "supp-1765225475060-epj0r",
            "name": "Gluco Sleep",
            "gender": "any",
            "symptoms": [
                {
                    "id": "symp-1765225475060-6hhwh",
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
            "id": "group-1765225381307-12p6n",
            "name": "Weightloss",
            "gender": "any"
        },
        {
            "id": "g-1765225556068",
            "name": "General",
            "gender": "any"
        },
        {
            "id": "g-1765225569281",
            "name": "Diabetes",
            "gender": "any"
        }
    ]
};

