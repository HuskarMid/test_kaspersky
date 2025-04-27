import { IData_TrafficItem } from "../types/types";

export const FormatTopCountry = (traffic: IData_TrafficItem[]) => {
  const s = (num: number) => Number(num/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0}); 
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
      Top traffic: 
      {traffic.map((item, index) => (
        <div key={index}>
          {item.value} <span>{s((item.count*100))}</span>
        </div>
      ))}
    </div>
  );
};