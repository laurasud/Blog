import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

 item: any;

  constructor() { }

  
  addToStorage() {
        if (localStorage.length === 0){
        localStorage.setItem('post1', JSON.stringify({show: true, name: 'post1', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        localStorage.setItem('post2', JSON.stringify({show: true, name: 'post2', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        localStorage.setItem('post3', JSON.stringify({show: true, name: 'post3', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        localStorage.setItem('post4', JSON.stringify({show: true, name: 'post4', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        localStorage.setItem('post5', JSON.stringify({show: true, name: 'post5', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        localStorage.setItem('post6', JSON.stringify({show: true, name: 'post6', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, created_at: Date()}))
        }
  }

    clearStorage(){
        localStorage.clear();
    }

    getData() {
        let archive = [];
        for (let i = 0; i<localStorage.length; i++) {
            let item= localStorage.getItem(localStorage.key(i));
            let obj = JSON.parse(item);
            if (obj.show === true){
                archive.push(obj);
            }
        }
        return archive;
    }

    addData(name: string, text: string){
        let obj = {
            show: true,
            name: name,
            text: text,
            created_at: Date()
        }
        localStorage.setItem(name, JSON.stringify(obj));
    }

    getItem (name: string){
        let obj = localStorage.getItem(name);
        this.item = JSON.parse(obj);
        return this.item
    }

    updatePost(name: string, data: string ){
        let del = localStorage.getItem(name);
        let obj = JSON.parse(del);
        obj.text = data;
        obj.update = Date();
        localStorage.setItem(name, JSON.stringify(obj));
    }

    deletePost(name: string){
        let del = localStorage.getItem(name);
        let obj = JSON.parse(del);
        obj.show = false;
        localStorage.setItem(name, JSON.stringify(obj));
    }

}
