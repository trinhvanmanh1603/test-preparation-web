import { menuData } from '@/store/menuStore';

export const useMenuData = () => {
  const getMenuSection = (sectionId) => {
    return menuData.find(section => section.id === sectionId);
  };

  const getMenuChildren = (sectionId) => {
    const section = getMenuSection(sectionId);
    return section ? section.children : [];
  };

  const getAllMenuSections = () => {
    return menuData;
  };

  const addDescriptions = (items, descriptions = {}) => {
    return items.map(item => ({
      ...item,
      description: descriptions[item.id] || descriptions[item.title] || `Truy cập ${item.title.toLowerCase()}`
    }));
  };

  return {
    getMenuSection,
    getMenuChildren,
    getAllMenuSections,
    addDescriptions,
    menuData
  };
};
