export const conditions = {
  // themes
  cerberusTheme: '[data-panda-theme=cerberus] &',
  acheronTheme: '[data-panda-theme=acheron] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',
  systemMode: '[data-color-mode=system] &, &.system, .system &',

  // states
  open: '&:is([open], [data-open], [data-state=open])',
  closed: '&:is([closed], [data-closed], [data-state=closed])',
  modalOpen: '&:is([data-modal-open=true])',
  placeholderShown: '&:is([data-placeholder-shown])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
  isOver: '&:is([data-over=true])',
  isDropped: '&:is([data-dropped=true])',
  isComplete: '&:is([data-complete=true])',
  disabled: '&:is(:disabled, [disabled], [data-disabled], [aria-disabled])',
  invalid: '&:is(:invalid, [data-invalid], [aria-invalid])',
  userInvalid: '&:is(:user-invalid, [aria-invalid])',
  groupInvalid: '.group:is([data-invalid] &, [aria-invalid]) &',
  groupChecked: '.group:is([data-checked="true"] &, [aria-checked="true"]) &',

  // dates
  today: '&:is([data-today=true], [data-date=today])',
  pastDay: '&:is([data-past-day=true], [data-date=past])',
  inRange: '&:is([data-in-range])',
  startRange: '&:is([data-range-start])',
  endRange: '&:is([data-range-end])',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',

  // elements
  notify: '&:is([data-notify=true])',
  startIcon: '&:is([data-start-icon=true])',
  tooltip: '&:is([data-tooltip=true])',

  // roles
  admin: '&:is([data-role=admin])',
  student: '&:is([data-role=student])',
  user: '&:is([data-role=user])',

  // highlights
  highlight: '&:is(::selection)',
  spellingError: '&:is(::spelling-error)',
  grammarError: '&:is(::grammar-error)',

  // palettes
  pagePalette: '&:is([data-palette=page])',
  actionPalette: '&:is([data-palette=action])',
  secondaryActionPalette: '&:is([data-palette=secondaryAction])',
  infoPalette: '&:is([data-palette=info])',
  successPalette: '&:is([data-palette=success])',
  warningPalette: '&:is([data-palette=warning])',
  dangerPalette: '&:is([data-palette=danger])',
}
