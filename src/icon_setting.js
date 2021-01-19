import MyIcon from './img/my_icon.jpg';
import CatIcon from './img/angry_cat.jpg';
import OtherIcon from './img/kaomoji_icon.png';

export const icon_setting = (name) => {
  const iconPath = (name === "masato kitamura") ? MyIcon
                 : (name === "cat") ? CatIcon
                 : OtherIcon;
  return iconPath;
};