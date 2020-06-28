import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layoutHeaderFooter', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layoutTabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layoutMenu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layoutSplitPanel', loadChildren: './layout-split-panel/layout-split-panel.module#LayoutSplitPanelPageModule' },
  { path: 'layoutTabs/tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'layoutTabs/tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'layoutTabs/tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'layoutGrid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layoutCssUtilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'componentActionSheet', loadChildren: './componente-action-sheet/componente-action-sheet.module#ComponenteActionSheetPageModule' },
  { path: 'componentAlert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'componentBadges', loadChildren: './component-badges/component-badges.module#ComponentBadgesPageModule' },
  { path: 'componentButton', loadChildren: './component-button/component-button.module#ComponentButtonPageModule' },
  { path: 'componentCard', loadChildren: './component-card/component-card.module#ComponentCardPageModule' },
  { path: 'componentCheckbox', loadChildren: './component-checkbox/component-checkbox.module#ComponentCheckboxPageModule' },
  { path: 'componentRadio', loadChildren: './component-radio/component-radio.module#ComponentRadioPageModule' },
  { path: 'componentDatetime', loadChildren: './component-date-time/component-date-time.module#ComponentDateTimePageModule' },
  { path: 'componentFab', loadChildren: './component-fab/component-fab.module#ComponentFabPageModule' },
  { path: 'componentInput', loadChildren: './component-input/component-input.module#ComponentInputPageModule' },
  { path: 'componentList', loadChildren: './component-list/component-list.module#ComponentListPageModule' },
  { path: 'componentLoading', loadChildren: './component-loading/component-loading.module#ComponentLoadingPageModule' },
  { path: 'componentModal', loadChildren: './component-modal/component-modal.module#ComponentModalPageModule' },
  { path: 'componentModalInterno', loadChildren: './component-modal-interno/component-modal-interno.module#ComponentModalInternoPageModule' },
  { path: 'componentRange', loadChildren: './component-range/component-range.module#ComponentRangePageModule' },
  { path: 'componentSelect', loadChildren: './component-select/component-select.module#ComponentSelectPageModule' },
  { path: 'componentSlides', loadChildren: './component-slides/component-slides.module#ComponentSlidesPageModule' },
  { path: 'componentSpinner', loadChildren: './component-spinner/component-spinner.module#ComponentSpinnerPageModule' },
  { path: 'componentToast', loadChildren: './component-toast/component-toast.module#ComponentToastPageModule' },
  { path: 'componentInfinitScroll', loadChildren: './component-infinit-scroll/component-infinit-scroll.module#ComponentInfinitScrollPageModule' },
  { path: 'componentPopover', loadChildren: './component-popover/component-popover.module#ComponentPopoverPageModule' },
  { path: 'componentRefresher', loadChildren: './component-refresher/component-refresher.module#ComponentRefresherPageModule' },
  { path: 'componentSearchbar', loadChildren: './component-searchbar/component-searchbar.module#ComponentSearchbarPageModule' },
  { path: 'componentToggle', loadChildren: './component-toggle/component-toggle.module#ComponentTogglePageModule' },
  { path: 'animacoes', loadChildren: './animacoes/animacoes.module#AnimacoesPageModule' },
  { path: 'componentesNativos', loadChildren: './componentes-nativos/componentes-nativos.module#ComponentesNativosPageModule' },
  { path: 'componenteNativoCamera', loadChildren: './componente-nativo-camera/componente-nativo-camera.module#ComponenteNativoCameraPageModule' },
  { path: 'componenteNativoTextToSpeech', loadChildren: './componente-nativo-text-to-speech/componente-nativo-text-to-speech.module#ComponenteNativoTextToSpeechPageModule' },
  { path: 'ngrx', loadChildren: './ngrx/ngrx.module#NgrxPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
