import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl} from '@angular/forms';
import {MatSidenav, MatTreeFlatDataSource, MatTreeFlattener, VERSION} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {NavItem} from '../../interfaces';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Router} from '@angular/router';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  level: number;
}

@Component({
  selector: 'sel-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SiteLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  isCompanyTopSheet = false;
  isProductTopSheet = false;
  language = 'en';

  // Left tree-menu in mat-sidenav
  navItems: NavItem[];
  private transformer = (node: NavItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.displayName,
      disabled: node.disabled,
      iconName: node.iconName,
      route: node.route,
      level: level
    };
  };
  treeControl: any = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(public router: Router,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public translate: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    // translate instructions
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    this.translate.use(this.language);

    this.navItems = [
      {
        displayName: 'site.menu.home',
        iconName: 'home',
        route: '/home',
        children: []
      },
      {
        displayName: 'site.menu.company.company',
        iconName: 'business',
        route: '/company/aboutUs',
        children: [
          {
            displayName: 'site.menu.company.aboutCompany',
            iconName: 'face',
            route: '/company/aboutUs',
            children: []
          },
          {
            displayName: 'site.menu.company.contacts',
            iconName: 'contacts',
            route: '/company/contacts',
            children: []
          },
          {
            displayName: 'site.menu.company.investors',
            iconName: 'group',
            route: '/company/investors',
            children: []
          }
        ]
      },
      {
        displayName: 'site.menu.products',
        iconName: 'highlight',
        route: '/product',
        children: []
      },
      // {
      //       //   displayName: 'site.menu.clients',
      //       //   iconName: 'recent_actors',
      //       //   route: '/client',
      //       //   children: []
      //       // },
    ];
  }

  ngAfterViewInit() {
    this.dataSource.data = this.navItems;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  switchLanguage() {
    if (this.language === 'en') {
      this.language = 'ru';
      this.translate.use(this.language);
    } else {
      this.language = 'en';
      this.translate.use(this.language);
    }
  }

  getTopSheetVisible(nameButton: any) {
    switch (nameButton) {
      case 'home':
        this.isCompanyTopSheet = false;
        this.isProductTopSheet = false;
        break;
      case 'company':
        this.isCompanyTopSheet = !this.isCompanyTopSheet;
        this.isProductTopSheet = false;
        break;
      case 'product':
        this.isProductTopSheet = !this.isProductTopSheet;
        this.isCompanyTopSheet = false;
        break;
      case 'client':
        this.isCompanyTopSheet = false;
        this.isProductTopSheet = false;
        break;
      case 'help':
        this.isCompanyTopSheet = false;
        this.isProductTopSheet = false;
        break;
      default:
        break;
    }
  }

  onItemSelected(item: NavItem) {
    this.router.navigate([item.route]);
  }
}
