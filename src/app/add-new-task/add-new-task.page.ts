import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

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
  taskObject = {}

  constructor(public modalController: ModalController, public todoService:TodoService) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalController.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
    console.log(this.taskCategory);
  }

  async AddTask(){
    this.taskObject = ({itemName:this.taskName,itemDueDate:this.taskDate,itemPriority:this.taskPriority, itemCategory:this.taskCategory})
    
    let uid = this.taskName + this.taskDate

    if (uid){
      await this.todoService.addTask(uid,this.taskObject)
    }
    else{
      console.log("can't save empty task");
    }
        
    this.dismiss()
  }

}
