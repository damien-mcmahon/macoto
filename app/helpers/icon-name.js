import Ember from 'ember';
const iconSuffix = '-square';
const awkwardOne = 'skype';

export function iconName(params) {
  let [iconName] = params;
  iconName = iconName.toLowerCase();
  return iconName === awkwardOne ? iconName : `${iconName}${iconSuffix}`;
}

export default Ember.Helper.helper(iconName);
