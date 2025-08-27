import type { CardProps } from "../data/data";


export const activeExtenions = (data:CardProps[]) => {
  return data?.filter((item) => item.enabled === true);

};

export const inactiveExtensions = (data: CardProps[]) => {
  return data?.filter((item) => item.enabled === false);
};

// export const changeEnable = (title: string, enb: boolean) => {
//   const ext = extensions.find(i => i.title === title);
//   if (ext) {
//     ext.enabled = enb;
//     return true;
//   }
//   return false;
// }

export const removeExtension =(i:number)=>{
    const data = extensions;
    const length = data.length;

    if(i < 0) return "invalid index"
    let pre_array = data.slice(0,i);
    let post_array = data.slice(i+1,length-1);
    return [...pre_array,...post_array];
}
