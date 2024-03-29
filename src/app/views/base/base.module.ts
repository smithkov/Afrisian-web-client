// Angular
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { CardsComponent } from "./cards.component";

// Forms Component
import { FormsComponent } from "./forms.component";

// Shop Component
import { ShopComponent } from "./shop.component";

// Product Component
import { ProductComponent } from "./productAdd/product.component";

// Product List Component
import { ProductDetailComponent } from "./productDetail/productDetail.component";

// Product List Component
import { CategoryComponent } from "./category/category.component";

// Product Component
import { ProductListComponent } from "./productList/productList.component";

// Category Component
import { CategoryListComponent } from "./categoryList/categoryList.component";

// Category Detail Component
import { CategoryDetailComponent } from "./categoryDetail/categoryDetail.component";

// Sub-Category Components
import { SubCategoryComponent } from "./subCategory/subCategory.component";
import { SubCategoryListComponent } from "./subCategoryList/subCategoryList.component";
import { SubCategoryDetailComponent } from "./subCategoryDetail/subCategoryDetail.component";

import { SwitchesComponent } from "./switches.component";
import { TablesComponent } from "./tables.component";

// Tabs Component
import { TabsModule } from "ngx-bootstrap/tabs";
import { TabsComponent } from "./tabs.component";

// Carousel Component
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CarouselsComponent } from "./carousels.component";

// Collapse Component
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CollapsesComponent } from "./collapses.component";

// Dropdowns Component
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

// Pagination Component
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoversComponent } from "./popovers.component";

// Popover Component
import { PopoverModule } from "ngx-bootstrap/popover";
import { PaginationsComponent } from "./paginations.component";

// Progress Component
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ProgressComponent } from "./progress.component";

// Tooltip Component
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TooltipsComponent } from "./tooltips.component";

// Components Routing
import { BaseRoutingModule } from "./base-routing.module";

import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    ShopComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryDetailComponent,
    CategoryComponent,
    SubCategoryComponent,
    SubCategoryListComponent,
    SubCategoryDetailComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CategoryListComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent
  ]
})
export class BaseModule {}
