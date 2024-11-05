import style from './maindiagram.module.css';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'

interface data {
  data_relation: Array<number>,
  data_color: Array<string>,
  data_names: Array<string>
}

const index = ({data_relation, data_color, data_names}: data) => {
  let all_income = 0
  data_relation.forEach((element) => all_income += element)
  return (
    <div className={style.diagram_container}>
      <div className={style.inner_diagram_container}>
      <Doughnut width={550} height={550} data={{
                  labels: data_names,
                  datasets: [{
                    data: data_relation,
                    backgroundColor: data_color,
                    hoverOffset: 4,    
                    borderRadius: 10,
                    spacing: 5
                  }], 
                }} 
                options={
                  {
                    cutout: "90%", 
                    radius: "100%", 
                    plugins:{
                      legend:{
                        display: false
                      }
                    }
                }} plugins={[              
                  {
                  id: 'customPluginName',
                  beforeDraw: function(chart) {
                    const width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                
                    ctx.restore();

                    const fontSize = (height / 290).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    const text = "Расходы",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2 - height/4 + height/10;
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.fillText(text, textX, textY);
                   
                    const fontSize_middle = (height / 190).toFixed(2);
                    ctx.font = fontSize_middle + "em sans-serif";
                    const text_middle = all_income + " ₽",
                    text2X = Math.round((width - ctx.measureText(text_middle).width) / 2),
                    text2Y = height / 2;
                    ctx.fillStyle = "rgba(255, 52, 52, 1)";
                    ctx.fillText(text_middle, text2X, text2Y);

                    const fontSize_bottom = (height / 290).toFixed(2);
                    ctx.font = fontSize_bottom + "em sans-serif";
                    const text_3 = "0 ₽",
                    text3X = Math.round((width - ctx.measureText(text_3).width) / 2),
                    text3Y = height/2 + height/4 - height/10;
                    ctx.fillStyle = "rgba(68, 174, 58, 1)";
                    ctx.fillText(text_3, text3X, text3Y);

                    ctx.save();
                    
                  }
                }
              ]}
                />
        {/* <p className={style.p_center}> Расходы </p>
        <p> 1024 ₽</p>
        <p> 720 ₽</p> */}
      </div>
    </div>
  );
};

export default index;
