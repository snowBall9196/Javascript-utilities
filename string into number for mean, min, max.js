  //Caculate SS when input is String
  calc_SS_String = (arrOfStr) => {
   
    const arrOfNum = arrOfStr.split(",");
    const data = [];
    arrOfNum.forEach(str => {
        data.push(Number(str));
    });
    let min = data[0];
    let max = data[0];
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] < min) min = data[i];
        if (data[i] > max) max = data[i];
        total += Number(data[i]);
    }
    let mean = total/data.length;
    return ({mean: mean, min: min, max: max});

  }