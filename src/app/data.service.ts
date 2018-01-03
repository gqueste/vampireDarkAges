export class DataService {

    static get clans() {
        return [
            {
                id: 'assamite',
                name: 'Assamite',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    },
                    {
                        id: 'quietus_hematus',
                        name: 'Quietus (Hematus)'
                    }
                ]
            },
            {
                id: 'brujah',
                name: 'Brujah',
                disciplines: [
                    {
                        id: 'celerite',
                        name: 'Célérité'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    }
                ]
            },
            {
                id: 'cappadocien',
                name: 'Cappadocien',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'necromancie',
                        name: 'Nécromancie'
                    }
                ]
            },
            {
                id: 'gangrel',
                name: 'Gangrel',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'proteisme',
                        name: 'Protéisme'
                    }
                ]
            },
            {
                id: 'lasombra',
                name: 'Lasombra',
                disciplines: [
                    {
                        id: 'domination',
                        name: 'Domination'
                    },
                    {
                        id: 'obtenebration',
                        name: 'Obténébration'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    }
                ]
            },
            {
                id: 'malkavien',
                name: 'Malkavien',
                disciplines: [
                    {
                        id: 'alienation',
                        name: 'Aliénation'
                    },
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    }
                ]
            },
            {
                id: 'nosferatu',
                name: 'Nosferatu',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'ravnos',
                name: 'Ravnos',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'chimerie',
                        name: 'Chimérie'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    }
                ]
            },
            {
                id: 'setite',
                name: 'Setite',
                disciplines: [
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    },
                    {
                        id: 'serpentis',
                        name: 'Serpentis'
                    }
                ]
            },
            {
                id: 'toreador',
                name: 'Toréador',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'celerite',
                        name: 'Célérité'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'tremere',
                name: 'Tremere',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'domination',
                        name: 'Domination'
                    },
                    {
                        id: 'thaumaturgie',
                        name: 'Thaumaturgie'
                    }
                ]
            },
            {
                id: 'tzimisce',
                name: 'Tzimisce',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'vicissitude',
                        name: 'Vicissitude'
                    }
                ]
            },
            {
                id: 'ventrue',
                name: 'Ventrue',
                disciplines: [
                    {
                        id: 'domination',
                        name: 'Domination'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'ahrimane',
                name: 'Ahrimane',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    },
                    {
                        id: 'spiritus',
                        name: 'Spiritus'
                    }
                ]
            },
            {
                id: 'anda',
                name: 'Anda',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'proteisme',
                        name: 'Protéisme'
                    }
                ]
            },
            {
                id: 'baali',
                name: 'Baali',
                disciplines: [
                    {
                        id: 'daemonium',
                        name: 'Daemonium'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'bonsam',
                name: 'Bonsam',
                disciplines: [
                    {
                        id: 'abombwe',
                        name: 'Abombwe'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    }
                ]
            },
            {
                id: 'danava',
                name: 'Danava',
                disciplines: [
                    {
                        id: 'domination',
                        name: 'Domination'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'thaumaturgie',
                        name: 'Thaumaturgie'
                    }
                ]
            },
            {
                id: 'gargouille',
                name: `Gargouille`,
                disciplines: [
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'vol',
                        name: 'Vol'
                    }
                ]
            },
            {
                id: 'giovani',
                name: 'Giovani',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'necromancie',
                        name: 'Nécromancie'
                    }
                ]
            },
            {
                id: 'impundulu',
                name: 'Impundulu',
                disciplines: [
                    {
                        id: 'necromancie',
                        name: 'Nécromancie'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'lamie',
                name: 'Lamie',
                disciplines: [
                    {
                        id: 'necromancie',
                        name: 'Nécromancie'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    }
                ]
            },
            {
                id: 'lhiannan',
                name: 'Lhiannan',
                disciplines: [
                    {
                        id: 'animalisme',
                        name: 'Animalisme'
                    },
                    {
                        id: 'ogham',
                        name: `Ogham`
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'nagaraja',
                name: 'Nagaraja',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'domination',
                        name: 'Domination'
                    },
                    {
                        id: 'necromancie',
                        name: 'Nécromancie'
                    }
                ]
            },
            {
                id: 'niktuku',
                name: 'Niktuku',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'celerite',
                        name: 'Célérité'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    }
                ]
            },
            {
                id: 'ramanga',
                name: 'Ramanga',
                disciplines: [
                    {
                        id: 'aizina',
                        name: 'Aizina'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    }
                ]
            },
            {
                id: 'salubrienGuerisseur',
                name: 'Salubrien Guérisseur',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'auspex'
                    },
                    {
                        id: 'presence',
                        name: 'Présence'
                    },
                    {
                        id: 'valeren',
                        name: 'Valeren'
                    }
                ]
            },
            {
                id: 'salubrienGuerrier',
                name: 'Salubrien Guerrier',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'Auspex'
                    },
                    {
                        id: 'forceDAme',
                        name: `Force d'âme`
                    },
                    {
                        id: 'valeren',
                        name: 'Valeren'
                    }
                ]
            },
            {
                id: 'salubrienVeilleur',
                name: 'Salubrien Veilleur',
                disciplines: [
                    {
                        id: 'auspex',
                        name: 'auspex'
                    },
                    {
                        id: 'occultation',
                        name: 'Occultation'
                    },
                    {
                        id: 'valeren',
                        name: 'Valeren'
                    }
                ]
            },
            {
                id: 'vraiBrujah',
                name: 'Vrai Brujah',
                disciplines: [
                    {
                        id: 'presence',
                        name: 'Présence'
                    },
                    {
                        id: 'puissance',
                        name: 'Puissance'
                    },
                    {
                        id: 'temporis',
                        name: 'Temporis'
                    }
                ]
            }
        ];
    }

    static get elementTypes() {
        return {
            ATTRIBUT: {
                id: 'attribut'
            },
            CAPACITE: {
                id: 'capacite'
            }
        }
    }

    static get archetypes() {
        return [
            {
                name: 'Ange gardien'
            },
            {
                name: 'Architecte'
            },
            {
                name: 'Autocrate'
            },
            {
                name: 'Battant'
            },
            {
                name: 'Bête'
            },
            {
                name: 'Bon vivant'
            },
            {
                name: 'Bouffon'
            },
            {
                name: 'Brute'
            },
            {
                name: 'Caméléon'
            },
            {
                name: 'Casse-cou'
            },
            {
                name: 'Célébrant'
            },
            {
                name: 'Conformiste'
            },
            {
                name: 'Défenseur'
            },
            {
                name: 'Déviant'
            },
            {
                name: 'Dilettante'
            },
            {
                name: 'Dirigiste'
            },
            {
                name: 'Enfant'
            },
            {
                name: 'Enigme'
            },
            {
                name: 'Fanatique'
            },
            {
                name: 'Gourou'
            },
            {
                name: 'Grand-guignol'
            },
            {
                name: 'Idéaliste'
            },
            {
                name: 'Individualiste'
            },
            {
                name: 'Juge'
            },
            {
                name: 'Martyr'
            },
            {
                name: 'Masochiste'
            },
            {
                name: 'Mercenaire'
            },
            {
                name: 'Monstre'
            },
            {
                name: 'Oeil du cyclone'
            },
            {
                name: 'Opportuniste'
            },
            {
                name: 'Pédagogue'
            },
            {
                name: 'Pénitent'
            },
            {
                name: 'Perfectionniste'
            },
            {
                name: 'Philosophe'
            },
            {
                name: 'Râleur'
            },
            {
                name: 'Rebelle'
            },
            {
                name: 'Sadique'
            },
            {
                name: 'Séducteur'
            },
            {
                name: 'Soldat'
            },
            {
                name: 'Solitaire'
            },
            {
                name: 'Survivant'
            },
            {
                name: 'Traditionaliste'
            },
            {
                name: 'Visionnaire'
            }
        ];
    }

    static get importances() {
        return [
            {
                id: 'primaire',
                name: 'Primaire',
                defaultPointsAttributs: 7,
                defaultPointsCapacites: 13
            },
            {
                id: 'secondaire',
                name: 'Secondaire',
                defaultPointsAttributs: 5,
                defaultPointsCapacites: 9
            },
            {
                id: 'tertiaire',
                name: 'Tertiaire',
                defaultPointsAttributs: 3,
                defaultPointsCapacites: 5
            }
        ];
    }

    static get attributs() {
        return [
            {
                id: 'physiques',
                title: 'Physiques',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Force',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Dextérité',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Vigueur',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'sociaux',
                title: 'Sociaux',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Charisme',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Manipulation',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Apparence',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'mentaux',
                title: 'Mentaux',
                pointsAvailable: 0,
                type: DataService.elementTypes.ATTRIBUT,
                importance: undefined,
                items: [
                    {
                        name: 'Perception',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Intelligence',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    },
                    {
                        name: 'Astuce',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 9
                    }
                ]
            }
        ]
    }

    static get capacites() {
        return [
            {
                id: 'talents',
                title: 'Talents',
                pointsAvailable: 0,
                type: DataService.elementTypes.CAPACITE,
                importance: undefined,
                items: [
                    {
                        name: 'Adresse',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Athlétisme',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Bagarre',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Commandement',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Empathie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Expression',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Intuition',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Intimidation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Subterfuge',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Vigilance',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'competences',
                title: 'Compétences',
                pointsAvailable: 0,
                type: DataService.elementTypes.CAPACITE,
                importance: undefined,
                items: [
                    {
                        name: 'Animaux',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Artisanat',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Commerce',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Equitation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Etiquette',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Furtivité',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Melée',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Représentation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Survie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Tir à l arc',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'connaissances',
                title: 'Connaissances',
                type: DataService.elementTypes.CAPACITE,
                pointsAvailable: 0,
                importance: undefined,
                items: [
                    {
                        name: 'Droit',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Enigmes',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Eruditions',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Investigation',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Médecine',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Occultisme',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Politique',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Sénéchal',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Sagesse populaire',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Théologie',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            }
        ]
    }

    static get avantages() {
        return [
            {
                id: 'disciplines',
                title: 'Disciplines',
                pointsAvailable: 4,
                defaultPoints: 4,
                items: [
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: '',
                        type: 'input',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'historique',
                title: 'Historique',
                pointsAvailable: 5,
                defaultPoints: 5,
                items: [
                    {
                        name: 'Alliés',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Contacts',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Domaine',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Fausse identité',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Influence',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Mentor',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Renommée',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Ressources',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Servants',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Statut',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    },
                    {
                        name: 'Troupeau',
                        points: 0,
                        pointsMin: 0,
                        pointsMax: 9
                    }
                ]
            },
            {
                id: 'vertus',
                title: 'Vertus',
                pointsAvailable: 7,
                defaultPoints: 7,
                items: [
                    {
                        name: 'Conscience/Conviction',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 5
                    },
                    {
                        name: 'Maitre de soi/Instinct',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 5
                    },
                    {
                        name: 'Courage',
                        points: 1,
                        pointsMin: 1,
                        pointsMax: 5
                    }
                ]
            }
        ];
    }

    static get voies() {
        return [
            {
                name: 'Voie de la Bête - Via Bestiae',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de la Bête - Crédo du Chasseur',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de la Bête - Crédo du Nomade',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie de la Bête - Crédo du Libérateur',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie du Paradis - Via Caeli',
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: `Voie de l'Humanité - Via Humanitatis`,
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: `Voie de l'Humanité - Crédo du Souffle`,
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: `Voie de l'Humanité - Crédo de la Communauté`,
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: `Voie de l'Humanité - Crédo de l'Illumination`,
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie des Rois - Via Regalis',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie des Rois - Crédo de la Chevalerie',
                firstVertue: 'Conscience',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie des Rois - Crédo du Devaraja',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie des Rois - Crédo du Daena',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie de Lilith - Derech Lilith',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de Lilith - Crédo des Epines',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de Lilith - Crédo des Voiles',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de Lilith - Crédo de la Création',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie de la Métamorphose - Via Mutationis',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie du Péché - Via Peccati',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie du Péché - Crédo du Plaisir',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie du Diable - Crédo du Plaisir',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie du Diable - Crédo des Cris',
                firstVertue: 'Conviction',
                secondVertue: 'Instinct',
            },
            {
                name: 'Voie des Ossements',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            },
            {
                name: 'Voie du Yasa',
                firstVertue: 'Conviction',
                secondVertue: 'Maîtrise de soi',
            }
        ]
    }
}
