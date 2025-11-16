import { TransformFunction } from '../types';

export const renameFields: TransformFunction = (data, fieldMap) => {
  return data.map(item => {
    const newItem = {};
    for (const key in item) {
      newItem[fieldMap[key] || key] = item[key];
    }
    return newItem;
  });
};

export const formatDates: TransformFunction = (data, dateField, format) => {
  return data.map(item => {
    if (item[dateField]) {
      item[dateField] = new Date(item[dateField]).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      });
    }
    return item;
  });
};

export const filterData: TransformFunction = (data, predicate) => {
  return data.filter(predicate);
};