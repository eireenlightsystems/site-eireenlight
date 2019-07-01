import {Input} from '@angular/core';

export interface User {
  login: string;
  password: string;
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

export interface CardInfo {
  theme: string;
  width: string;
  height: string;
  widthPhoto: string;
  heightPhoto: string;
  isMatCardAvatar: boolean;
  matCardAvatar: string;
  matCardTitle: string;
  matCardSubtitle: string;
  matCardImage: string;
  matCardContent: string;
  isAction: boolean;
}

export class Address {
  namePlace: string;
  address: string;
  nCoordinate: number;
  eCoordinate: number;
  comment: string;
}

