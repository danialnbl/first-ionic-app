import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  
  categories = ['Work','Personal','Home']

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject = {}

  constructor(public modalController: ModalController, public todoService:TodoService) { }

  ngOnInit() {

    this.taskName = this.task.value.itemName
    this.taskDate = this.task.value.itemDueDate
    this.taskPriority = this.task.value.itemPriority
    this.taskCategory = this.task.value.itemCategory
    console.log(this.task);

  }

  async dismiss(){
    await this.modalController.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
    console.log(this.taskCategory);
  }

  async update(){
    this.taskObject = ({itemName:this.taskName,itemDueDate:this.taskDate,itemPriority:this.taskPriority, itemCategory:this.taskCategory})
    
    let uid = this.task.key

    if (uid){
      await this.todoService.updateTask(uid,this.taskObject)
    }
    else{
      console.log("can't save empty task");
    }
        
    this.dismiss()
  }

}
