import * as React from 'react';
import { SmartSelect as SmartSelectNamespace } from 'framework7/components/smart-select/smart-select';

declare namespace F7ListItem {
  interface Props {
    slot? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    title? : string | number
    text? : string | number
    media? : string
    subtitle? : string | number
    header? : string | number
    footer? : string | number
    link? : boolean | string
    target? : string
    noFastclick? : boolean
    noFastClick? : boolean
    after? : string | number
    badge? : string | number
    badgeColor? : string
    mediaItem? : boolean
    mediaList? : boolean
    divider? : boolean
    groupTitle? : boolean
    swipeout? : boolean
    swipeoutOpened? : boolean
    sortable? : boolean
    accordionItem? : boolean
    accordionItemOpened? : boolean
    smartSelect? : boolean
    smartSelectParams? : Object
    noChevron? : boolean
    chevronCenter? : boolean
    checkbox? : boolean
    radio? : boolean
    checked? : boolean
    defaultChecked? : boolean
    name? : string
    value? : string | number | Array<any>
    readonly? : boolean
    required? : boolean
    disabled? : boolean
    itemInput? : boolean
    itemInputWithInfo? : boolean
    inlineLabel? : boolean
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    back? : boolean
    external? : boolean
    force? : boolean
    animate? : boolean
    ignoreCache? : boolean
    pageName? : string
    reloadCurrent? : boolean
    reloadAll? : boolean
    reloadPrevious? : boolean
    routeTabId? : string
    view? : string
    searchbarEnable? : boolean | string
    searchbarDisable? : boolean | string
    searchbarClear? : boolean | string
    searchbarToggle? : boolean | string
    panelOpen? : boolean | string
    panelClose? : boolean | string
    popupOpen? : boolean | string
    popupClose? : boolean | string
    actionsOpen? : boolean | string
    actionsClose? : boolean | string
    popoverOpen? : boolean | string
    popoverClose? : boolean | string
    loginScreenOpen? : boolean | string
    loginScreenClose? : boolean | string
    sheetOpen? : boolean | string
    sheetClose? : boolean | string
    sortableEnable? : boolean | string
    sortableDisable? : boolean | string
    sortableToggle? : boolean | string
    onClick? : (event?: any) => void
    onSwipeoutDeleted? : (event?: any) => void
    onSwipeoutDelete? : (event?: any) => void
    onSwipeoutClose? : (event?: any) => void
    onSwipeoutClosed? : (event?: any) => void
    onSwipeoutOpen? : (event?: any) => void
    onSwipeoutOpened? : (event?: any) => void
    onSwipeout? : (event?: any) => void
    onAccordionClose? : (event?: any) => void
    onAccordionClosed? : (event?: any) => void
    onAccordionOpen? : (event?: any) => void
    onAccordionOpened? : (event?: any) => void
    onChange? : (event?: any) => void
    onInput? : (event?: any) => void
  }
}
declare class F7ListItem extends React.Component<F7ListItem.Props, {}> {
  onClick(event? : any) : unknown
  onSwipeoutDeleted(event? : any) : unknown
  onSwipeoutDelete(event? : any) : unknown
  onSwipeoutClose(event? : any) : unknown
  onSwipeoutClosed(event? : any) : unknown
  onSwipeoutOpen(event? : any) : unknown
  onSwipeoutOpened(event? : any) : unknown
  onSwipeout(event? : any) : unknown
  onAccClose(event? : any) : unknown
  onAccClosed(event? : any) : unknown
  onAccOpen(event? : any) : unknown
  onAccOpened(event? : any) : unknown
  onChange(event? : any) : unknown
  onInput(event? : any) : unknown
  f7SmartSelect: SmartSelectNamespace.SmartSelect
}
export default F7ListItem;