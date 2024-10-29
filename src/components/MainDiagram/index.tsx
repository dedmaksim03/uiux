import style from './maindiagram.module.css';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'
// import Chart from 'chart.js/auto';
// import 'chartjs-plugin-labels'; // Импортируем плагин

const index = () => {
  // Chart.register({
  //   id: 'customPluginName',
  //   beforeDraw: function(chart) {
  //     const width = chart.width,
  //         height = chart.height,
  //         ctx = chart.ctx;
  
  //     ctx.restore();
  //     const fontSize = (height / 114).toFixed(2);
  //     ctx.font = fontSize + "em sans-serif";
  //     ctx.textBaseline = "middle";
  
  //     const text = "75%",
  //         textX = Math.round((width - ctx.measureText(text).width) / 2),
  //         textY = height / 2;
  
  //     ctx.fillText(text, textX, textY);
  //     ctx.save();
  //   }
  // });
  return (
    <div className={style.diagram_container}>
      <div className={style.inner_diagram_container}>
      <Doughnut width={550} height={550} data={{
                  labels: [
                    'Red',
                    'Blue',
                    'fsdf', 'sdfsf'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 150],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4     
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
                    const fontSize = (height / 250).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                
                    const text = "Расходы",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2 - height/4 + height/16;
                    
                    const text_2 = "1520 ₽",
                    text2X = Math.round((width - ctx.measureText(text_2).width) / 2),
                    text2Y = height / 2;

                    const text_3 = "1520 ₽",
                    text3X = Math.round((width - ctx.measureText(text_3).width) / 2),
                    text3Y = height/2 + height/4 - height/16;
                
                    ctx.fillText(text, textX, textY);
                    ctx.fillText(text_2, text2X, text2Y);
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
