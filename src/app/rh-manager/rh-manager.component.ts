import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';

@Component({
  selector: 'app-rh-manager',
  templateUrl: './rh-manager.component.html',
  styleUrls: ['./rh-manager.component.css']
})
export class RhManagerComponent implements OnInit {
  listeCandidats : Personne[];
  listeRecrues : Personne[];
  listeRefuses : Personne[];
  showValue = false;
  displayValue = 'none';

  constructor(private cvService : ListepersonneService) { }

  ngOnInit() {
    this.listeCandidats = this.cvService.filterPersonne(this.cvService.listePersonne, "candidat")
    this.listeRecrues = this.cvService.filterPersonne(this.cvService.listePersonne, "recrue")
    this.listeRefuses = this.cvService.filterPersonne(this.cvService.listePersonne, "refuse")

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const p = event.item.data;
      p['status'] = event.container.element.nativeElement.classList[0];
      console.log(p);
      
      this.cvService.updatePersonne(p);
    }
  }

  showModal() {
    this.showValue =true;
    this.displayValue = 'block';
  }

  hideModal() {
    this.showValue = false;
    this.displayValue = 'none';
  }

  savePerson(nom, prenom, path) {
    this.cvService.addPersonne(new Personne(5, nom, prenom, 100, "ingenieur", path, "candidat"));
    this.listeCandidats = this.cvService.filterPersonne(this.cvService.listePersonne, "candidat");
    this.hideModal();
  }

}
