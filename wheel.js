Chart.register({
      ChartDataLabels
    });
    const flavourCanvas = document.getElementById("flavourChart");
    const ctxP = flavourCanvas.getContext("2d");
    let flag = false;

    var flavourData = {
      datasets: [{
        pieLabel: [
          'Cà phê',
          'Ca cao',
          'Chocolate',
          'Brandy',
          'Bia',
          'Đậu Phộng',
          'Hạt phỉ',
          'Đường cháy',
          'Bơ',
          'Chanh',
          'Cam',
          'Bưởi',
          'Anh Đào',
          'Giấm\nbalsamic',
          'Balsam',
          'Bạc hà'
        ],
        backgroundColor: [
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C'],
        data: [
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448
        ],
        rotate: [
          -75, -60, -30, -10, 10,
          30, 50, 75, 105, -60,
          -40, -10, 10, 30, 60,
          80
        ],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: [
          'Cam thảo\nLicorice',
          'Hành Tây\nOnion',
          'Cà chua\nTomato',
          'Bí đỏ\nPumpkin',
          'Bắp cải\nCabbage',
          'Bắp -Corn',
          'Tiêu - Pepper',
          'Đinh hương\nClove',
          'Ngò\nCoriander',
          'Gà - Chicken',
          'Bò - Beef',
          'Ba rọi xông \nkhói - Bacon',
          'Cá - Fishy'
        ],
        backgroundColor: [
          '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB',
          '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB',
          '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB'],
        data: [
          3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448,
        ],
        rotate: [
          -75, -50, -20, 10,
          30, 60, 90, -60, -40,
          0, 20, 50, 80,
        ],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: ['Coffee, cacao và rượu', 'Bơ, kem và hạt', 'Trái cây', 'Hoa cỏ'],
        backgroundColor: ['#F2AF4B', '#F2AF4B', '#F2AF4B', '#F2AF4B'],
        data: [17.24, 13.792, 13.792, 10.344],
        rotate: [55, -20, 60, -40],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: ['Rau củ', 'Gia vị - rau mùi', 'Thịt', 'Thủy sản'],
        backgroundColor: ['#A2E4AD', '#A2E4AD', '#A2E4AD', '#A2E4AD'],
        data: [20.688, 10.344, 10.344, 3.448],
        rotate: [80, 30, -80, 80],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: ['Ngọt'],
        backgroundColor: ['#F2994A'],
        data: [100],
        datalabels: {
          color: '#034A46',
          anchor: 'start',
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 30);

            return {
              weight: 700,
              size: size
            };
          },
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          }
        },
        borderWidth: 0
      },
      {
        pieLabel: ['Mặn'],
        backgroundColor: ['#43C6AC'],
        data: [100],
        datalabels: {
          color: '#034A46',
          anchor: 'start',
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 30);

            return {
              weight: 700,
              size: size
            };
          },
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          }
        },
        borderWidth: 0
      },
      {
        pieLabel: [
          'Cà phê',
          'Ca cao',
          'Chocolate',
          'Brandy',
          'Bia',
          'Đậu Phộng',
          'Hạt phỉ',
          'Đường cháy',
          'Bơ',
          'Chanh',
          'Cam',
          'Bưởi',
          'Anh Đào',
          'Giấm\nbalsamic',
          'Balsam',
          'Bạc hà',
          'Cam thảo\nLicorice',
          'Hành Tây\nOnion',
          'Cà chua\nTomato',
          'Bí đỏ\nPumpkin',
          'Bắp cải\nCabbage',
          'Bắp -Corn',
          'Tiêu - Pepper',
          'Đinh hương\nClove',
          'Ngò\nCoriander',
          'Gà - Chicken',
          'Bò - Beef',
          'Ba rọi xông \nkhói - Bacon',
          'Cá - Fishy'
        ],
        backgroundColor: [
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C', '#F2C94C',
          '#F2C94C', '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB',
          '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB',
          '#AEFFBB', '#AEFFBB', '#AEFFBB', '#AEFFBB'],
        data: [
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448, 3.448,
          3.448, 3.448, 3.448, 3.448,
        ],
        rotate: [
          -80, -70, -60, -50, -40,
          -20, -10, 0, 15, 25,
          30, 45, 60, 80, 90,
          -80, -70, -55, -40, -25,
          -15, 0, 10, 25, 30,
          45, 55, 70, 86,
        ],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: ['Coffee, cacao và rượu', 'Bơ, kem và hạt', 'Trái cây', 'Hoa cỏ', 'Rau củ', 'Gia vị - rau mùi', 'Thịt', 'Thủy sản'],
        backgroundColor: ['#F2AF4B', '#F2AF4B', '#F2AF4B', '#F2AF4B', '#A2E4AD', '#A2E4AD', '#A2E4AD', '#A2E4AD'],
        data: [17.24, 13.792, 13.792, 10.344, 20.688, 10.344, 10.344, 3.448],
        rotate: [30, 90, -50, 0, 45, -70, -20, 85],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          },
          rotation: function (context) {
            return context.dataset.rotate[context.dataIndex];
          }
        }
      },
      {
        pieLabel: ['Ngọt', 'Mặn'],
        backgroundColor: ['#F2994A', '#43C6AC'],
        data: [55.168, 44.832],
        datalabels: {
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          }
        },
        borderWidth: function () {
          if (flag === true) {
            return 0;
          }

          return 2;
        }
      },
      {
        pieLabel: ["Try me"],
        backgroundColor: ['#ffffff'],
        data: [100],
        datalabels: {
          color: '#034A46',
          anchor: 'start',
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 30);

            return {
              weight: 700,
              size: size
            };
          },
          formatter: function (value, context) {
            return context.dataset.pieLabel[context.dataIndex];
          }
        },
        borderWidth: 0
      }
      ]
    };

    var options = {
      plugins: {
        datalabels: {
          color: '#000000',
          anchor: 'center',
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 50);

            return {
              size: size
            };
          }
        },
        tooltip: {
          enabled: false
        }
      }
    }

    var pieChart = new Chart(ctxP, {
      type: 'pie',
      data: flavourData,
      plugins: [ChartDataLabels],
      options: options,
    });

    const outerArr = [0, 1, 2, 3, 4, 5];
    const commonArr = [6, 7, 8, 9];
    const saltArr = [1, 3, 5];
    const sweetArr = [0, 2, 4];

    function hideSlice(arr) {
      for (let i = 0; i < arr.length; ++i) {
        pieChart.hide(arr[i]);
      }
    }

    function showSlice(arr) {
      for (let i = 0; i < arr.length; ++i) {
        pieChart.show(arr[i]);
      }
    }

    hideSlice(outerArr);

    flavourCanvas.onclick = function (e) {
      var slice = pieChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
      if (!slice.length) return;
      var idx = slice[0].index;
      var label = slice[0].element.$datalabels[0].$context.dataset.pieLabel[idx];

      switch (label) {
        case 'Mặn':
          flag = !flag
          if (flag === true) {
            showSlice(saltArr);
            hideSlice(commonArr);
          } else {
            hideSlice(saltArr);
            showSlice(commonArr);
          }
          break;
        case 'Ngọt':
          flag = !flag
          if (flag === true) {
            showSlice(sweetArr);
            hideSlice(commonArr);
          } else {
            hideSlice(sweetArr);
            showSlice(commonArr);
          }
          break;
          break;
        case 'Trái cây':
          window.open('https://viet-hong.webflow.io/huong/huong-trai-cay');
          break;
        case 'Coffee, cacao và rượu':
          window.open('https://viet-hong.webflow.io/huong/huong-coffee-cacao-ruou');
          break;
        case 'Bơ, kem và hạt':
          window.open('https://viet-hong.webflow.io/huong/huong-bo-kem-hat');
          break;
        case 'Hoa cỏ':
          window.open('https://viet-hong.webflow.io/huong/huong-hoa-co');
          break;
        case 'Thủy sản':
          window.open('https://viet-hong.webflow.io/huong/thuy-san');
          break;
        case 'Thịt':
          window.open('https://viet-hong.webflow.io/huong/thit');
          break;
        case 'Gia vị - rau mùi':
          window.open('https://viet-hong.webflow.io/huong/gia-vi-rau-mui');
          break;
        case 'Rau củ':
          window.open('https://viet-hong.webflow.io/huong/rau-cu');
          break;
        case 'Chanh':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/chanh-lemon');
          break;
        case 'Cam':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/cam-orange');
          break;
        case 'Bưởi':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/buoi-grapefruit');
          break;
        case 'Anh Đào':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/anh-dao-cherry');
          break;
        case 'Cà phê':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ca-phe-coffee');
          break;
        case 'Cacao':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ca-cao-cocoa');
          break;
        case 'Chocolate':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/chocolate');
          break;
        case 'Brandy':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/brandy');
          break;
        case 'Bia':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bia-beer');
          break;
        case 'Đậu phộng':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/dau-phong-peanut');
          break;
        case 'Hạt phỉ':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/hat-phi-hazelnut');
          break;
        case 'Đường cháy':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/duong-chay-caramel');
          break;
        case 'Bơ':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bo-butter');
          break;
        case 'Giấm\nbalsamic':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/giam-balsamic-balsamic');
          break;
        case 'Bạc hà':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/nhua-thom-balsam');
          break;
        case 'Balsam':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/nhua-thom-balsam');
          break;
        case 'Cá - Fishy':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ca-fishy');
          break;
        case 'Ba rọi xông \nkhói - Bacon':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ba-roi-xong-khoi-bacon');
          break;
        case 'Bò - Beef':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bo-beef');
          break;
        case 'Gà - Chicken':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ga-chicken');
          break;
        case 'Ngò\nCoriander':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ngo-coriander');
          break;
        case 'Đinh hương\nClove':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/dinh-huong-clove');
          break;
        case 'Tiêu - Pepper':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/tieu-pepper');
          break;
        case 'Bắp -Corn':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bap-corn');
          break;
        case 'Bắp cải\nCabbage':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bap-cai-cabbage');
          break;
        case 'Cà chua\nTomato':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/ca-chua-tomato');
          break;
        case 'Cam thảo\nLicorice':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/cam-thao-licorice');
          break;
        case 'Bí đỏ\nPumpkin':
          window.open('https://viet-hong.webflow.io/chuyen-muc-huong/bi-do-pumpkin');
          break;
      }
    }