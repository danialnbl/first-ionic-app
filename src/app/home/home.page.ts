import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
  ]

  today : number = Date.now();

  constructor(public modalController:ModalController, public todoService:TodoService) {
    this.getAlltask()
  }

  async addTask(){
    const modal = await this.modalController.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      this.getAlltask()
      //console.log(newTaskObj.data);
      //this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  getAlltask(){
    this.todoList = this.todoService.getAllTask()
    console.log(this.todoService.getAllTask());
  }

  delete(key){
    //console.log(key);
    this.todoService.deleteTask(key)
    this.getAlltask()
  }

  async update(selectedTask){
    const modal = await this.modalController.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAlltask()
    })

    return await modal.present()
  }

}
