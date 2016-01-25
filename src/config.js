export default function($mdThemingProvider) {
  let themesConstant = '_THEMES';
  let palettesConstant = '_PALETTES';
  let defaultPaletteName = $mdThemingProvider[themesConstant].default.colors.accent.name;
  let defaultPalette = $mdThemingProvider.extendPalette(defaultPaletteName, {
    '500': $mdThemingProvider[palettesConstant][defaultPaletteName][50],
    contrastDefaultColor: 'dark'
  });

  $mdThemingProvider.definePalette('defaultPalette', defaultPalette);
  $mdThemingProvider.theme('alternate-header').primaryPalette('defaultPalette');
}
