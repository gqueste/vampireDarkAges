export class DataService {
    
    static get clans() {
        return [
            {
                id: 'clan1',
                name: 'Clan 1',
                description: 'Description du Clan 1'
            },
            {
                id: 'clan2',
                name: 'Clan 2',
                description: 'Description du Clan 2'
            }
        ];
    }
    
    static get archetypes() {
        return [
            {
                id: 'arch1',
                name: 'Archétype 1',
                description: 'Description de l arch 1'
            },
            {
                id: 'arch2',
                name: 'Archétype 2',
                description: 'Description de l arch 2'
            }
        ];
    }
    
    static get importances() {
        return {
            primaire: 'primaire',
            secondaire: 'secondaire',
            tertiaire: 'tertiaire'
        };
    }
    
    static get attributs() {
        return [
            {
                id: 'physiques',
                title: 'Physiques',
                importance: DataService.importances.primaire,
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
                importance: DataService.importances.secondaire,
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
                importance: DataService.importances.tertiaire,
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
        return [];
    }
}