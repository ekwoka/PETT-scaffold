export const patchObjects = (...objects: AnyObject[]): AnyObject => {
  return objects.reduce((acc, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (!acc[key]) acc[key] = {};
      Object.assign(acc[key], value);
    });
    return acc;
  });
};

export type AnyObject = {
  [key: string]: AnyObject | Array<any> | any;
};
