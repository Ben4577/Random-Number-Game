
//export class Users {
//  Users: User[] = [];
//}


export class User  {
  UserId: number;
  UserName: string = '';
  UserScores: UserScore[] = new Array();
}


export class UserScore {
  TimeCompleted: number = 0;
  Date: Date; 
}


export class Decision {
  name: string = '';
}
