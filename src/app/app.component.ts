import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    Arr = Array;

    clans = DataService.clans;
    archetypes = DataService.archetypes;
    voies = DataService.voies;

    IMPORTANCES = DataService.importances;
    ELEMENT_TYPES = DataService.elementTypes;
    MAX_POINTS_CAPACITE = 3;

    characterSheet = {
        clan: this.clans[0],
        nature: this.archetypes[0],
        attitude: this.archetypes[0],
        attributs: DataService.attributs,
        capacites: DataService.capacites,
        avantages: DataService.avantages,
        voie: DataService.voies[0]
    };

    constructor () {
        const setDefaultImportances = (element, importanceIndex) => {
            const importance = this.IMPORTANCES[importanceIndex];
            this.setImportance(element, importance);
        };

        this.characterSheet.attributs.forEach(setDefaultImportances);
        this.characterSheet.capacites.forEach(setDefaultImportances);
        this.setDisciplines(this.clans[0].disciplines);
    }

    onItemPlusClick(item, element) {
        const maxedOut = i => i.points >= i.pointsMax;
        const pointsAvailable = e => e.pointsAvailable > 0;
        const maxCapacite = (e, i) => this.isCapacite(e) && i.points >= this.MAX_POINTS_CAPACITE;

        if (!maxedOut(item) && pointsAvailable(element) && !maxCapacite(element, item)) {
            item.points ++;
            element.pointsAvailable --;
        }
    }

    onItemMinusClick(item, element) {
        if (item.points > item.pointsMin) {
            item.points --;
            element.pointsAvailable ++;
        }
    }

    setImportance(element, importance) {
        element.importance = importance;
        element.pointsAvailable = this.isAttribute(element) ? importance.defaultPointsAttributs : importance.defaultPointsCapacites;
        element.pointsDefauts = element.pointsAvailable;
    }

    isCapacite(element) {
        return element.type && element.type.id === this.ELEMENT_TYPES.CAPACITE.id;
    }

    isAttribute(element) {
        return element.type && element.type.id === this.ELEMENT_TYPES.ATTRIBUT.id;
    }

    onImportanceChanged(importance, element, arr) {
        const previousSelectedImportance = element.importance;
        const elementWithSelectedImportance = arr.find(att => att.importance.id === importance.id);
        this.setImportance(elementWithSelectedImportance, previousSelectedImportance);
        this.resetItems(elementWithSelectedImportance);
        this.setImportance(element, importance);
        this.resetItems(element);
    }

    resetItems(element) {
        element.items.forEach((item) => {
            item.points = item.pointsMin;
        });
    }

    onClanChange(clan) {
        this.setDisciplines(clan.disciplines);
    }

    setDisciplines(disciplines) {
        let currentDisciplines = [];
        disciplines.forEach((discipline) => {
            let newElement = {
                points: 0,
                pointsMin: 0,
                pointsMax: 9,
                name: discipline.name
            };
            currentDisciplines.push(newElement);
        });
        this.characterSheet.avantages[0].pointsAvailable = 4;
        this.characterSheet.avantages[0].items = currentDisciplines;
    }

    onVoieChanged(voie) {

    }
}
