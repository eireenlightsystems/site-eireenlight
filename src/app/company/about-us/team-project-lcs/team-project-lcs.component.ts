import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {CardInfo} from '../../../shared/interfaces';

@Component({
  selector: 'sel-team-project-lcs',
  templateUrl: './team-project-lcs.component.html',
  styleUrls: ['./team-project-lcs.component.css']
})
export class TeamProjectLCSComponent implements OnInit {

  personsRU: CardInfo[];
  personsEN: CardInfo[];

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    this.personsRU = [
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/leshev.jpg',
        matCardTitle: 'Алексей Лещев',
        matCardSubtitle: 'Генеральный директор компании',
        matCardImage: '../pictures/team/leshev.jpg',
        matCardContent: 'Руководитель проекта "Система контроля-управления динамического освещения улично-дорожной сети".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/lubimov.jpg',
        matCardTitle: 'Алексей Любимов',
        matCardSubtitle: 'Программист пользовательского интерфейса, программист базы данных ПО Центра управления',
        matCardImage: '../pictures/team/lubimov.jpg',
        matCardContent: 'Помощник руководителя проекта "Система контроля-управления динамического освещения улично-дорожной сети".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/okuncev.jpg',
        matCardTitle: 'Сергей Окунцев',
        matCardSubtitle: 'Программист серверной части ПО Центра управления',
        matCardImage: '../pictures/team/okuncev.jpg',
        matCardContent: 'Архитектор ПО Центра управления программно-аппаратного комплекса "Система контроля-управления динамического освещения улично-дорожной сети".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/raskin.jpg',
        matCardTitle: 'Павел Раскин',
        matCardSubtitle: 'НИОКР',
        matCardImage: '../pictures/team/raskin.jpg',
        matCardContent: 'Отвечает за научно исследовательские и опытно-конструкторские работы связанные с программно-аппаратным комплексом "Система контроля-управления динамического освещения улично-дорожной сети".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/bot.jpg',
        matCardTitle: 'Андрей Шулепов',
        matCardSubtitle: 'Системный программист',
        matCardImage: '../pictures/team/bot.jpg',
        matCardContent: 'Отвечает за аппаратную часть программно-аппаратного комплекса "Система контроля-управления динамического освещения улично-дорожной сети".',
        isAction: false,
      }
    ];
    this.personsEN = [
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/leshev.jpg',
        matCardTitle: 'Aleksei Lishov',
        matCardSubtitle: 'CEO of the company',
        matCardImage: '../pictures/team/leshev.jpg',
        matCardContent: 'Project Manager "Control system-management of dynamic lighting of the road network".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/lubimov.jpg',
        matCardTitle: 'Aleksei Liubimov',
        matCardSubtitle: 'User Interface Programmer, Database Programmer',
        matCardImage: '../pictures/team/lubimov.jpg',
        matCardContent: 'Assistant to the project manager "Control system-management of dynamic lighting of the road network".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/okuncev.jpg',
        matCardTitle: 'Sergey Okuntsev',
        matCardSubtitle: 'Server side programmer of the Control Center software',
        matCardImage: '../pictures/team/okuncev.jpg',
        matCardContent: 'Software Architect of the Control Center of the hardware-software complex "Control system-control of dynamic lighting of the road network".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/raskin.jpg',
        matCardTitle: 'Pavel Raskin',
        matCardSubtitle: 'R & D',
        matCardImage: '../pictures/team/raskin.jpg',
        matCardContent: 'Responsible for the research and development work associated with the software and hardware complex "Control system-control of dynamic lighting of the road network".',
        isAction: false,
      },
      {
        theme: 'light',
        width: '200px',
        height: '650px',
        widthPhoto: '195px',
        heightPhoto: '210px',
        isMatCardAvatar: false,
        matCardAvatar: '../pictures/team/bot.jpg',
        matCardTitle: 'Andrey Shulepov',
        matCardSubtitle: 'System programmer',
        matCardImage: '../pictures/team/bot.jpg',
        matCardContent: 'Responsible for the hardware of the hardware-software complex "Control system-control of dynamic lighting of the road network".',
        isAction: false,
      }
    ];
  }

}
