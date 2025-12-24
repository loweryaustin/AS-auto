/**
 * GaraHerb (Men's Health)
 * Database file for the "GaraHerb" supplement.
 * Product Line: Digital Lions
 * Protocol: Men's Health
 */
DATABASE_CONFIGS["GaraHerb"] = {
    "productLine": "Digital Lions",
    "baseProduct": {
        "name": "GaraHerb (Base)",
        "pitch": "Primary Men's Health Support. 1 cap per day.\" While your testosterone support handles the internal drive, Garaherb ensures the circulatory system has the support to help the blood flow from the groin to the tip of the penis.\"",
        "gender": "male"
    },
    "knowledgeBase": "GaraHerb",
    "guaranteeDays": 60,
    "questions": [
        {
            "id": "q-gh-1",
            "text": "Issues getting or maintaining an erection? (Diagnostic)",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-gh-2",
            "text": "Are you still ever ejaculating? (Jertaris)",
            "group": "Erectile Dysfunction"
        },
        {
            "id": "q-gh-3",
            "text": "Are you Diabetic or Pre-Diabetic? (Cetadusse)",
            "group": "Medical History"
        },
        {
            "id": "q-gh-4",
            "text": "Do you have blood pressure issues? (Tenurina)",
            "group": "Medical History"
        },
        {
            "id": "q-gh-5",
            "text": "Tingling or numbness in feet or hands? (Arialief)",
            "group": "Neuropathy Check"
        },
        {
            "id": "q-gh-6",
            "text": "Prostate issues? Inflammation? (Jertaris or Resverador)",
            "group": "Prostate"
        },
        {
            "id": "q-gh-7",
            "text": "Have you been told you have low testosterone? (Erectozyn)",
            "group": "Hormonal"
        }
    ],
    "recommendations": [
        {
            "id": "supp-erectozyn",
            "name": "Erectozyn",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-testo",
                    "text": "Low Testosterone / Low Libido",
                    "pitch": "\"Erectozyn is designed to support the body’s natural testosterone production, providing the essential hormonal 'spark' that activates the drive and maintains the tissue health required for reliable, peak performance.\"",
                    "benefit": "help boost testosterone - libido, tissue integrity (corpus cavernosum - sponge like tissues in penis), nitric oxide production, and nerve health"
                }
            ]
        },
        {
            "id": "supp-tenurina",
            "name": "Tenurina",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-circ",
                    "text": "Blood Pressure / Circulation Issues",
                    "pitch": "Tenurima helps promote optimal vasodilation and blood flow, supporting long term circulatory power required to achieve and maintain peak performance.\"",
                    "benefit": "help ensure blood flow reaches the area"
                }
            ]
        },
        {
            "id": "supp-arialief",
            "name": "Arialief",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-numbness",
                    "text": "Numbness / Sensation Issues",
                    "pitch": "Arialief supports the health of the nerves that send \"performance\" signals from the brain to the pelvic region This helps to strengthens the penile nerve to restore pleasure.",
                    "benefit": "help restore sensation and pleasure"
                }
            ]
        },
        {
            "id": "supp-cetadusse",
            "name": "Cetadusse",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-diabetes",
                    "text": "Diabetes / Pre-Diabetes",
                    "pitch": "\"Cetadusse helps maintain healthy blood sugar levels, which supports the protection of the delicate blood vessels and nerves from the oxidative damage that can hinder reliable performance.\"",
                    "benefit": "help repair sugar-induced vessel damage"
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
                    "text": "Prostate Issues (Frequency, Swelling)",
                    "pitch": "\"Jertaris helps promote optimal prostate health and pelvic comfort, helping reduce urinary and structural pressure so they shouldn't interfere with the healthy nerve signaling and blood flow needed for peak performance.\"",
                    "benefit": "help alleviate prostate blockages"
                }
            ]
        },
        {
            "id": "supp-resverador",
            "name": "Resverador",
            "gender": "male",
            "symptoms": [
                {
                    "id": "symp-inflam",
                    "text": "Inflammation",
                    "pitch": "\"Resverador delivers potent antioxidants that help the body manage oxidative stress and inflammation, which is essential for supporting the delicate lining of your blood vessels and ensuring they can relax and expand for optimal performance.\"",
                    "benefit": "help reduce inflammation blocking blood flow"
                }
            ]
        }
    ],
    "questionGroups": [
        {
            "id": "g-ed",
            "name": "Erectile Dysfunction",
            "gender": "male"
        },
        {
            "id": "g-med",
            "name": "Medical History",
            "gender": "any"
        },
        {
            "id": "g-neuro",
            "name": "Neuropathy Check",
            "gender": "any"
        },
        {
            "id": "g-pros",
            "name": "Prostate",
            "gender": "male"
        },
        {
            "id": "g-horm",
            "name": "Hormonal",
            "gender": "male"
        }
    ],
    "references": []
};
