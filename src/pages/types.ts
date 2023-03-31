export enum ROLE{
    BOT='bot',
    USER='user',
}

export interface ConvercationItem {
  role: ROLE;
  content: string;
}

export interface UserInfo {
    name:string;
    days:number;
}