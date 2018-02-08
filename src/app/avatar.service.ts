import { Injectable } from '@angular/core';
import { Md5 } from "ts-md5/dist/md5";


@Injectable()
export class AvatarService {

  constructor() { }

  generate(email:string){
    return "https://api.adorable.io/avatars/100/"+Md5.hashStr(email);
  }

}
