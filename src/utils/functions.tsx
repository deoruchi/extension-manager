import type { CardProps } from "../data/data";


export const activeExtenions = (data:CardProps[]) => {
  return data?.filter((item) => item.enabled === true);

};

export const inactiveExtensions = (data: CardProps[]) => {
  return data?.filter((item) => item.enabled === false);
};

