import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  //inject the service
  constructor(private service:FileUploadService) { }

  medicine:MedicineClass[];
  id:number=0;

  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result1=>this.medicine=result1);
  }

  DeleteMedicineById(id:number){
    //refresh the list once user is deleted
    this.medicine=this.medicine.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("user Deleted");
  }





  //update image
  //add image
firebaseConfig = {
  apiKey: "AIzaSyDKczjoS_qmuWtjDOQOCIN8bjYTw-GbEl0",
  authDomain: "kitchenstory-39828.firebaseapp.com",
  projectId: "kitchenstory-39828",
  storageBucket: "kitchenstory-39828.appspot.com",
  messagingSenderId: "818537684504",
  appId: "1:818537684504:web:0c08d2899f13f916236d6d",
  measurementId: "G-7QHEMG3VBT"
};

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  async selectFile(event: any,id:any) {
    this.id=id;
    const file: File = event.target.files[0];
    await this.saveImage(file);
  }

  async saveImage(file: File) {
    const storageRef = getStorage(this.app);
    const imagesRef = ref(storageRef, 'images/' + file.name);
    await uploadBytes(imagesRef, file);
    const url = await getDownloadURL(imagesRef);
    console.log("inside saveImage method "+this.id);
    this.service.addImageUrl(url,this.id).subscribe(response=>
      {
         
      },
      error=>
      {
      }
      );
    console.log('Image URL:', url);
  }
}
