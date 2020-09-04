const startBtnRef = document.querySelector('button[data-action=start]');
const stopBtnRef = document.querySelector('button[data-action=stop]');
const body = document.querySelector('body');

export default  function () {
  const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const changeColor = {

    intervalID: null,
    isActive: false,

    start(){
      if (this.isActive) return;
      this.isActive = true;
      startBtnRef.disabled = true
      this.intervalID = setInterval(()=>{
        let colorID = randomIntegerFromInterval(1, colors.length);
        body.style.backgroundColor = colors[colorID];
      }, 100)

    },

    stop(){
      clearInterval(this.intervalID);
      this.isActive = false
      startBtnRef.disabled = false
    }


  }

  startBtnRef.addEventListener('click', changeColor.start.bind(changeColor));
  stopBtnRef.addEventListener('click', changeColor.stop.bind(changeColor));

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

