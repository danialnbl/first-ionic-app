import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = ['Work','Personal','Home']

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalController.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = ({itemName:this.taskName,itemDueDate:this.taskDate, 
                        itemPriority:this.taskPriority, itemCategory:this.taskCategory})
    
    this.dismiss()
  }

}