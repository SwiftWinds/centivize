const diagnose = async (symptoms, gender, year) => {
  const symptomToId = {
    'Abdominal guarding': 188,
    'Abdominal pain': 10,
    'Abdominal pain associated with menstruation': 223,
    'Absence of a pulse': 984,
    Aggressiveness: 974,
    Agitation: 981,
    'Ankle deformity': 996,
    'Ankle swelling': 147,
    Anxiety: 238,
    'Arm swelling': 971,
    'Back deformity': 998,
    'Back pain': 104,
    'Black stools': 180,
    'Blackening of vision': 57,
    Blackhead: 24,
    'Bleeding from vagina': 284,
    'Bleeding in the conjunctiva of the eye': 176,
    'Bloated feeling in the stomach': 48,
    'Blood in stool': 190,
    'Bloody cough': 233,
    'Blue colored skin': 991,
    'Blue spot on skin': 240,
    'Blurred vision': 77,
    'Bold area among hair on the head': 239,
    'Bone fracture': 156,
    'Breathing-related pains': 250,
    'Brittleness of nails': 979,
    'Bulging abdominal wall': 192,
    'Burning eyes': 75,
    'Burning in the throat': 46,
    'Burning nose': 288,
    'Burning sensation when urinating': 107,
    'Changes in the nails': 91,
    'Cheek swelling': 170,
    'Chest pain': 17,
    'Chest tightness': 31,
    Chills: 175,
    'Coarsening of the skin structure': 218,
    'Cold feet': 89,
    'Cold hands': 978,
    'Cold sweats': 139,
    Cough: 15,
    'Cough with sputum': 228,
    Cramps: 94,
    Cravings: 49,
    Crusting: 134,
    'Curvature of the spine': 260,
    'Dark urine': 108,
    'Decreased urine stream': 163,
    'Delayed start to urination': 165,
    Diarrhea: 50,
    'Difficult defecation': 79,
    'Difficulty in finding words': 126,
    'Difficulty in speaking': 98,
    'Difficulty in swallowing': 93,
    'Difficulty to concentrate': 53,
    'Discoloration of nails': 216,
    'Disorientation regarding time or place': 128,
    'Distended abdomen': 989,
    Dizziness: 207,
    'Double vision': 71,
    'Double vision, acute-onset': 270,
    'Dribbling after urination': 162,
    'Drooping eyelid': 244,
    Drowsiness: 43,
    'Dry eyes': 273,
    'Dry mouth': 272,
    'Dry skin': 151,
    Earache: 87,
    'Early satiety': 92,
    'Eye blinking': 242,
    'Eye pain': 287,
    'Eye redness': 33,
    'Eyelid swelling': 208,
    'Eyelids sticking together': 209,
    'Face pain': 219,
    'Facial paralysis': 246,
    'Facial swelling': 970,
    'Fast, deepened breathing': 153,
    'Fatty defecation': 83,
    'Feeling faint': 982,
    'Feeling of foreign body in the eye': 76,
    'Feeling of pressure in the ear': 86,
    'Feeling of residual urine': 164,
    'Feeling of tension in the legs': 145,
    Fever: 11,
    'Finger deformity': 995,
    'Flaking skin': 214,
    'Flaking skin on the head': 245,
    Flatulence: 154,
    'Foot pain': 255,
    'Foot swelling': 1002,
    Forgetfulness: 125,
    'Formation of blisters on a skin area': 62,
    'Foul smelling defecation': 84,
    'Frequent urination': 59,
    'Genital warts': 110,
    'Hair loss': 152,
    Hallucination: 976,
    Halo: 72,
    'Hand pain': 186,
    'Hand swelling': 148,
    'Hard defecation': 80,
    'Hardening of the skin': 184,
    Headache: 9,
    'Hearing loss': 206,
    'Heart murmur': 985,
    Heartburn: 45,
    Hiccups: 122,
    'Hip deformity': 993,
    'Hip pain': 196,
    Hoarseness: 121,
    'Hot flushes': 149,
    Immobilization: 197,
    'Impaired balance': 120,
    'Impaired hearing': 90,
    'Impaired light-dark adaptation': 70,
    'Impairment of male potency': 113,
    'Incomplete defecation': 81,
    'Increased appetite': 131,
    'Increased drive': 262,
    'Increased salivation': 204,
    'Increased thirst': 40,
    'Increased touch sensitivity': 220,
    'Increased urine quantity': 39,
    'Involuntary movements': 257,
    'Irregular heartbeat': 986,
    'Irregular mole': 65,
    'Itching eyes': 73,
    'Itching in the ear': 88,
    'Itching in the mouth or throat': 973,
    'Itching in the nose': 96,
    'Itching of skin': 21,
    'Itching of the anus': 999,
    'Itching on head': 247,
    'Itching or burning in the genital area': 268,
    'Joint effusion': 194,
    'Joint instability': 198,
    'Joint pain': 27,
    'Joint redness': 230,
    'Joint swelling': 193,
    Joylessness: 47,
    'Knee deformity': 994,
    'Knee pain': 256,
    'Leg cramps': 146,
    'Leg swelling': 231,
    'Leg ulcer': 143,
    'Less than 3 defecations per week': 82,
    'Limited mobility of the ankle': 992,
    'Limited mobility of the back': 167,
    'Limited mobility of the fingers': 178,
    'Limited mobility of the hip': 1000,
    'Limited mobility of the leg': 195,
    'Lip swelling': 35,
    Lockjaw: 205,
    'Loss of eye lashes': 210,
    'Lower abdominal pain': 174,
    'Lower-back pain': 263,
    'Lump in the breast': 261,
    'Malposition of the testicles': 266,
    'Marked veins': 232,
    'Memory gap': 235,
    'Menstruation disorder': 112,
    'Missed period': 123,
    'Moist and softened skin': 215,
    'Mood swings': 85,
    'Morning stiffness': 983,
    'Mouth pain': 135,
    'Mouth ulcers': 97,
    'Muscle pain': 177,
    'Muscle stiffness': 119,
    'Muscle weakness': 987,
    'Muscular atrophy in the leg': 252,
    'Muscular atrophy of the arm': 202,
    'Muscular weakness in the arm': 168,
    'Muscular weakness in the leg': 253,
    Nausea: 44,
    'Neck pain': 136,
    'Neck stiffness': 234,
    Nervousness: 114,
    'Night cough': 133,
    'Night sweats': 1004,
    'Non-healing skin wound': 63,
    Nosebleed: 38,
    'Numbness in the arm': 221,
    'Numbness in the leg': 254,
    'Numbness of the hands': 200,
    'Oversensitivity to light': 137,
    Overweight: 157,
    'Pain in the bones': 155,
    'Pain in the calves': 142,
    'Pain in the limbs': 12,
    'Pain of the anus': 990,
    'Pain on swallowing': 203,
    'Pain radiating to the arm': 251,
    'Pain radiating to the leg': 103,
    'Pain when chewing': 286,
    'Painful defecation': 189,
    'Painful urination': 109,
    Pallor: 150,
    Palpitations: 37,
    Paralysis: 140,
    'Physical inactivity': 118,
    'Problems with the sense of touch in the face': 129,
    'Problems with the sense of touch in the feet': 130,
    'Protrusion of the eyes': 258,
    'Purulent discharge from the urethra': 172,
    'Purulent discharge from the vagina': 173,
    'Rebound tenderness': 191,
    'Reduced appetite': 54,
    'Ringing in the ear': 78,
    'Runny nose': 14,
    Sadness: 975,
    'Scalp redness': 269,
    Scar: 1001,
    'Sensitivity to cold': 60,
    'Sensitivity to glare': 69,
    'Sensitivity to noise': 102,
    'Shiny red tongue': 264,
    'Shortness of breath': 29,
    'Side pain': 183,
    'Skin lesion': 26,
    'Skin nodules': 25,
    'Skin rash': 124,
    'Skin redness': 61,
    'Skin thickening': 217,
    'Skin wheal': 34,
    'Sleepiness with spontaneous falling asleep': 241,
    Sleeplessness: 52,
    Sneezing: 95,
    'Sore throat': 13,
    Sputum: 64,
    'Stomach burning': 179,
    'Stress-related leg pain': 185,
    'Stuffy nose': 28,
    Sweating: 138,
    'Swelling in the genital area': 236,
    'Swelling of the testicles': 267,
    'Swollen glands in the armpit': 248,
    'Swollen glands in the groin': 249,
    'Swollen glands in the neck': 169,
    Tears: 211,
    'Testicular pain': 222,
    Tic: 243,
    Tingling: 201,
    Tiredness: 16,
    'Toe deformity': 997,
    'Toe swelling': 1003,
    'Tongue burning': 980,
    'Tongue swelling': 977,
    'Tremor at rest': 115,
    'Tremor on movement': 132,
    'Trouble understanding speech': 988,
    'Unconsciousness, short': 144,
    'Uncontrolled defecation': 265,
    Underweight: 116,
    'Urge to urinate': 160,
    'Urination during the night': 161,
    'Vision impairment': 68,
    'Vision impairment for far objects': 213,
    'Vision impairment for near objects': 166,
    'Visual field loss': 66,
    Vomiting: 101,
    'Vomiting blood': 181,
    'Weakness or numbness on right or left side of body': 972,
    'Weight gain': 23,
    'Weight loss': 22,
    Wheezing: 30,
    Wound: 187,
    'Yellow colored skin': 105,
    'Yellowish discoloration of the white part of the eye': 106,
  };

  const diseaseToId = {
    'Abdominal hernia': 130,
    Abortion: 170,
    'Abscess of the tonsils': 456,
    'Absence seizure': 577,
    'Accident injury': 584,
    'Accident-related bone fracture': 515,
    'Accumulation of fluid in the scrotum': 509,
    'Achilles tendon tear': 171,
    Acne: 27,
    'Acute inflammation of lung': 113,
    'Age-related issues': 582,
    'Alcohol consumption': 580,
    'Allergy to bee or wasp venom': 202,
    'Alzheimer type dementia': 66,
    'Anal abscess': 519,
    'Anal venous thrombosis': 341,
    'Aneurysm of the main artery': 182,
    'Ankle injury': 134,
    Anorexia: 48,
    Arthrosis: 192,
    'Auditory vertigo': 454,
    'Autoimmune disease': 585,
    'Back pain': 102,
    'Bacterial skin infection': 199,
    'Bad sleeping habits': 601,
    "Baker's cyst": 198,
    "Bekhterev's disease": 310,
    'Benign bone tumor': 334,
    'Benign muscle cramps': 541,
    'Benign muscle twitching': 524,
    'Benign proliferation of uterine lining tissue': 152,
    'Benign prostate enlargement': 99,
    'Benign skin tag': 553,
    'Benign tumor of the adrenal medulla': 346,
    'Black skin cancer': 297,
    'Bladder cancer': 204,
    'Bleeding disorder': 277,
    'Blistering disease': 542,
    'Bloated belly': 495,
    'Blood poisoning': 586,
    'Blood vessel expansion around anus': 128,
    'Bone pain': 523,
    'Bowel incontinence': 397,
    'Bowel obstruction': 273,
    'Brain damage caused by metabolic disorders': 483,
    'Brain tumor': 264,
    'Breakbone fever': 218,
    'Breast cancer': 291,
    'Broken rib': 562,
    Bruise: 255,
    Bulimia: 49,
    Bunion: 253,
    Burn: 415,
    'Caffeine withdrawal': 596,
    Caries: 613,
    'Change in the mammary glands': 295,
    'Chemical eye burn': 196,
    'Chicken skin': 549,
    Chickenpox: 81,
    'Chlamydia infection': 657,
    'Chronic inflammatory bowel disease of colon': 212,
    'Chronic muscular pain disorder': 243,
    'Chronic obstructive lung disease': 64,
    'Chronic pain disorder': 492,
    'Chronic tiredness syndrome': 211,
    'Chronic vein insufficiency': 210,
    'Circular hair loss': 529,
    Cirrhosis: 283,
    'Clot in a vein': 92,
    'Clouding of the eye lens': 31,
    'Cluster headache': 147,
    'Coccyx fistula': 348,
    Cold: 80,
    'Colon cancer': 215,
    Concussion: 149,
    'Condition causing overproduction of skin cells': 26,
    'Confusional state': 579,
    'Congenital eyelid levator weakness': 558,
    'Contact eczema': 174,
    'Corneal distorsion': 532,
    'Coronary heart disease': 86,
    "Crohn's disease": 311,
    'Curvature of the spine': 390,
    'Damage to the eye muscle nerves': 559,
    'Deformity of the hip joint': 536,
    'Deformity of the knee joint': 535,
    Depression: 47,
    Dermatitis: 228,
    'Detached retina': 155,
    Diabetes: 17,
    'Diabetic delayed gastric emptying': 588,
    'Diaphragmatic hernia': 261,
    'Difficult dentition': 478,
    'Diffuse hair loss': 438,
    'Disease of the motor neurons': 176,
    'Diseases of the heart valves': 485,
    'Dislocation of kneecap': 340,
    'Disorder causing imbalance of water in the body': 482,
    'Disorders of lipid metabolism': 164,
    'Dissection of the aorta': 183,
    'Disseminated sclerosis': 316,
    'Disturbed testicular descent': 266,
    'Diverticular disease': 223,
    'Drug side effect': 431,
    'Dry eye': 32,
    'Dry nasal mucosa': 462,
    'Dry skin': 100,
    "Dupuytren's contracture": 224,
    'Dysfunction of the esophagus': 564,
    'Ear injury with foreign body': 330,
    'Earwax blockage': 39,
    'Eating disorder': 475,
    'Enlarged and twisted veins': 91,
    'Enlarged lymph nodes': 287,
    'Enlarged veins of the esophagus': 477,
    'Epileptic seizures': 236,
    'Erection problems': 237,
    'Esophageal cancer': 332,
    'Esophageal corrosion': 333,
    'Eversion of the eyelid': 227,
    'Excessive feeling of fear': 181,
    'Excessive noise exposure': 608,
    'Excessive overweight': 97,
    'Extreme tendency to fall asleep': 557,
    'Eye allergy': 581,
    'Eyelid inflammation': 139,
    'Facial neuralgia': 148,
    'Facial paralysis': 452,
    Fainting: 575,
    'Fainting after standing up': 440,
    'Familial tremor': 502,
    'Far-sightedness': 143,
    'Fatigue fracture of the metatarsal': 308,
    'Fatty tumor': 165,
    'Femoral neck fracture': 132,
    Flu: 11,
    'Fluid accumulation in the abdomen': 193,
    'Fluid accumulation in the chest cavity': 349,
    'Fluid loss': 217,
    'Fluid-filled sacs in the kidney': 327,
    'Flu-related rhinitis': 368,
    'Food allergy': 320,
    'Food intolerance': 321,
    'Food poisoning': 281,
    'Foreign object in the airways': 470,
    'Foreign object in the ear': 461,
    'Foreign object in the eye': 455,
    'Foreign object in the nose': 468,
    'Foreign object in the throat': 481,
    Frostbite: 238,
    'Fungal infection': 144,
    'Gait disorder due to old age': 441,
    'Gall stones': 55,
    Ganglion: 246,
    'Genital warts': 507,
    'German measles': 107,
    'Giant cell arteritis': 312,
    "Gilbert's disease": 448,
    Gingivostomatitis: 473,
    'Gluten intolerance': 52,
    "Golfer's elbow": 234,
    Gout: 63,
    'Green cataract': 30,
    'Grinding of teeth': 612,
    'Hardening of the walls of arteries': 85,
    'Hay fever': 367,
    Headache: 104,
    'Hearing loss due to old age': 555,
    'Heart attack': 87,
    'Heart failure': 432,
    'Heart muscle disease': 654,
    'Heart racing': 434,
    Herpes: 82,
    Hiccup: 46,
    'High blood pressure': 16,
    'High blood pressure crisis': 271,
    'Hip dysplasia': 269,
    'Hip entrapment': 512,
    'Hirsuties coronae glandis': 508,
    HIV: 112,
    Hives: 145,
    Hump: 280,
    "Huntington's disease": 209,
    Hypercortisolism: 213,
    'Hypersensitivity reaction': 15,
    Hyperventilation: 94,
    'Hypofunction of pituitary gland': 556,
    'Imbalance of body minerals': 445,
    'Inadequate closure of the aortic valve': 563,
    'Infection caused by corynebacterium diphtheriae': 220,
    'Infection of kidney pelvis': 361,
    'Infection of upper airways': 460,
    'Inflammation in the anal region': 178,
    'Inflammation of a diverticulum': 494,
    'Inflammation of gingiva': 474,
    'Inflammation of hair follicles': 547,
    'Inflammation of heart muscle': 436,
    'Inflammation of inner ear labyrinth': 530,
    'Inflammation of outer tissue layer around bone': 517,
    'Inflammation of paranasal sinuses': 41,
    'Inflammation of the anal glands': 518,
    'Inflammation of the appendix': 126,
    'Inflammation of the bone marrow': 516,
    'Inflammation of the brain covering membranes': 83,
    'Inflammation of the breast tissue': 294,
    'Inflammation of the bronchi': 153,
    'Inflammation of the bursae': 208,
    'Inflammation of the cornea': 447,
    'Inflammation of the endocardium': 229,
    'Inflammation of the epididymis': 235,
    'Inflammation of the external ear canal': 38,
    'Inflammation of the liver': 54,
    'Inflammation of the nail skin': 125,
    'Inflammation of the nose and throat': 44,
    'Inflammation of the pancreas': 119,
    'Inflammation of the parotid gland': 106,
    'Inflammation of the pericardium': 437,
    'Inflammation of the peritoneum': 501,
    'Inflammation of the pleura': 350,
    'Inflammation of the prostate': 504,
    'Inflammation of the stomach': 114,
    'Inflammation of the tendon': 538,
    'Inflammation of the testes': 331,
    'Inflammation of the tonsils': 136,
    'Inflammation of the urethra': 120,
    'Inflammation of vaginal mucosa': 503,
    'Inflammation of veins': 122,
    'Inflammation to the joints': 76,
    'Inflammatory disease of the airways': 14,
    'Ingrown nail': 410,
    'Injury of the eye': 197,
    'Intestinal polyp': 216,
    'Involuntary urination': 411,
    'Inward folding of eyelid': 231,
    'Iron deficiency': 226,
    'Iron storage disease': 544,
    'Irregular heart rhythm in atria': 12,
    'Irritation of the sciatic nerve': 490,
    'Itchy skin nodule': 545,
    'Jaw fracture': 479,
    'Joint infection': 131,
    'Keloidal scar': 552,
    'Kidney inflammation': 121,
    'Kidney stones': 324,
    'Kissing disease': 109,
    'Knee inflammation': 614,
    'Knee ligament injury': 276,
    'Lack of blood': 93,
    'Lack of supply of thyroid hormones': 60,
    'Lack of vitamin B12': 540,
    'Lack of vitamin D': 96,
    'Lacrimal gland inflammation': 214,
    'Lactase deficiency': 95,
    "Landry's paralysis": 250,
    'Lichenoid lesion': 546,
    'Listeria infection': 166,
    Lockjaw: 108,
    'Long-sightedness due to old age': 101,
    'Loose watery stools': 51,
    'Low back pain': 487,
    'Low blood pressure': 572,
    'Low blood sugar': 554,
    'Lung bleeding': 649,
    'Lung cancer': 285,
    'Lung collapse': 351,
    Lupus: 439,
    'Lyme disease': 79,
    'Lymph cancer': 268,
    'Lymphatic obstruction': 655,
    'Macular degeneration': 141,
    'Malignant bone tumor': 336,
    'Malignant prostate cancer': 357,
    'Marsh fever': 290,
    Measles: 105,
    'Mediterranean anemia': 404,
    'Meningeal tumor': 298,
    Menopause: 50,
    'Menstrual problems': 489,
    'Mental illness with euphoria and hyperactivity': 292,
    'Middle ear infection': 37,
    'Mitral regurgitation': 58,
    Mole: 323,
    'Motion sickness': 600,
    'Muscle soreness': 520,
    'Muscular weakness': 534,
    'Myasthenia gravis': 318,
    'Nail growth disorder': 528,
    'Narrowing of foreskin': 347,
    'Narrowing of spinal canals of the thoracic or lumbar spine': 486,
    'Narrowing of the aortic valve': 57,
    'Narrowing of the spinal canal in the neck': 465,
    'Nasal polyp': 322,
    'Neoplasia of the upper digestive tract': 565,
    'Nerve compression in the wrist': 135,
    'Nerve pain': 522,
    'Nerve root irritation of the cervical spine': 467,
    'Nerve root irritation of the lumbar spine': 568,
    'Nerve-related bladder dysfunction': 506,
    Nosebleed: 40,
    'Obsessive-compulsive disorder': 561,
    'Obstruction of a pulmonary artery': 167,
    'Outpouching of the esophagus': 480,
    'Overactivity of the parathyroid glands': 514,
    'Overproduction of thyroid hormones': 61,
    Pain: 602,
    'Pancreas insufficiency': 498,
    'Pelvic fracture': 513,
    'Peripheral artery disease': 189,
    'Pink eye': 140,
    'Pleural tumor': 302,
    Poisoning: 443,
    'Positional vertigo': 138,
    Pregnancy: 446,
    'Pregnancy loss': 169,
    'Pregnancy-related problems': 603,
    'Pressure on the brain': 263,
    'Problems with defecation': 53,
    'Psychogenic issues': 599,
    'Rapid swelling of the skin': 180,
    "Raynaud's disease": 314,
    'Recurring itchy inflammation of the skin': 146,
    'Redness causing skin condition': 551,
    'Reflex sympathetic dystrophy': 381,
    'Reflux disease': 18,
    'Renal failure': 511,
    'Restless limb syndrome': 364,
    'Rheumatic fever': 365,
    'Rheumatic pain in many muscles': 521,
    Rheumatism: 366,
    'Ringing in the ears': 36,
    'Salivary gland inflammation': 339,
    'Salivary gland stone': 388,
    'Scalp infection': 574,
    'Scarlet fever': 376,
    "Scheuermann's disease": 315,
    'School sores': 543,
    'Sebaceous cyst': 194,
    'Seborrheic eczema': 386,
    Senility: 168,
    'Sexually transmitted diseases': 604,
    'Shaking palsy': 68,
    Shingles: 656,
    Shock: 444,
    'Short-sightedness': 142,
    'Shoulder dislocation': 383,
    'Shoulder girdle compression syndrome': 567,
    'Sick headache': 67,
    'Simultaneous malfunction of peripheral nerves': 150,
    "Singer's nodules": 458,
    'Skin tags of anus': 293,
    'Sleep apnea': 65,
    'Sleeping disorder': 379,
    'Slipped disc': 103,
    'Small sore in mouth': 43,
    Smoking: 19,
    'Spastic colon': 20,
    'Sperm cyst': 510,
    'Spondylosis of cervical spine': 464,
    'Sprained ankle': 537,
    Squint: 395,
    'State of stress': 606,
    'Stomach bleeding': 476,
    'Stomach cancer': 289,
    'Stomach flu': 84,
    'Stomach irritation': 472,
    'Stomach ulcer': 118,
    'Strain of the back muscles': 488,
    'Strain of the neck muscles': 463,
    'Strain of the regional supporting tissue': 484,
    'Strain, sprain or weakness of the muscle tendon unit and ligaments': 533,
    'Stress disorder after trauma': 353,
    Stroke: 88,
    Stye: 450,
    'Subconjunctival bleeding': 272,
    'Sudden hearing loss': 137,
    'Sudden loss of vision': 175,
    Sunburn: 391,
    'Sun-related keratosis': 550,
    'Superficial form of cellulitis': 124,
    'Suspicious change of skin': 29,
    'Swelling of the thyroid gland': 396,
    Syphilis: 110,
    'Systemic disorder with granulomatous inflammation': 374,
    'Tarsal tunnel syndrome': 539,
    'Tear in the skin of anus': 127,
    'Tear of the biceps tendon': 203,
    'Temporomandibular joint dysfunction': 469,
    'Tendon sheath inflammation': 526,
    'Tendon tear in shoulder': 370,
    'Tennis elbow': 116,
    'Testicular cancer': 267,
    'Thinning bones': 62,
    'Thyroid eye disease': 230,
    'Tick-borne encephalitis': 78,
    'Tooth abscess': 449,
    'Torsion of testes': 151,
    "Tourette's syndrome": 531,
    'Toxoplasmosis infection': 407,
    'Trigger finger': 403,
    'Tubal and ovarian inflammation': 497,
    'Tubal pregnancy': 240,
    Tuberculosis: 453,
    'Ulcer of the skin of the eyelid': 451,
    'Ulnar nerve entrapment': 325,
    'Urinary tract infection': 59,
    'Urinary tract stones': 412,
    'Vascular inflammation': 433,
    'Vertebral fracture': 566,
    'Vestibular failure': 326,
    'Vocal cord paralysis': 457,
    'Voice overuse': 609,
    'Water accumulation in the lungs': 286,
    'Water accumulation in the tissues': 329,
    Whiplash: 466,
    'White skin cancer': 200,
    'Whooping cough': 345,
    'Yeast infection': 587,
    'Yellow plague': 248,
    'Yellow skin bumps': 548,
  };

  const codes = [];
  for (let i = 0; i < symptoms.length; i++) {
    codes.push(symptomToId[symptoms[i]]);
  }

  const diagnoses = [];
  const names = [];

  const disease = await fetch(
    `https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=${JSON.stringify(
      codes,
    )}&gender=${gender}&year_of_birth=${year}&language=en-gb`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
        'x-rapidapi-key': '238e4d14a7mshe56eb0d7e18b7d6p1bb123jsnd66d2234bf3a',
      },
    },
  );
  const data = await disease.json();
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    diagnoses.push(d.Issue.ProfName);
    names.push(d.Issue.Name);
  }
  const issues = [];
  names.forEach((name) => {
    console.log(name);
    issues.push(diseaseToId[name]);
  });

  console.log(diagnoses);
  console.log(names);
  console.log(issues);

  const treatments = (
    await Promise.allSettled(
      issues.map(async (issue) => {
        const response = await fetch(
          `https://priaid-symptom-checker-v1.p.rapidapi.com/issues/${issue}/info?language=en-gb`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
              'x-rapidapi-key':
                '238e4d14a7mshe56eb0d7e18b7d6p1bb123jsnd66d2234bf3a',
            },
          },
        );
        const treatmentData = await response.json();

        return treatmentData.TreatmentDescription;
      }),
    )
  ).map((promise) => promise.value);
  return [names, treatments];
};

export default diagnose;
