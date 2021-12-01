  const flavourCanvas = document.getElementById("flavourChart");
      const ctxP = flavourCanvas.getContext("2d");
      let flag = false;
      const outerArr = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21,
      ];
      const commonArr = [22, 23, 24, 25];
      const saltArr = [19, 20, 21];
      const sweetArr = [16, 17, 18];

      var flavourData = {
        datasets: [
          {
            pieLabel: ["Cá"], //layer 0 finish wheel seafood
            backgroundColor: ["#DCEDED"],
            data: [100],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Thủy sản"], //layer 1
            backgroundColor: ["#7FA6C9"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Gà - Chicken",
              "Bò - Beef",
              "Ba rọi xông \nkhói - Bacon",
              "Khói - Smoky",
              "Thịt - Meaty",
            ], //layer 2 finish wheel meat
            backgroundColor: [
              "#EDE6B8",
              "#FBE3C5",
              "#F5DACB",
              "#EBE7DF",
              "#FBC7BD",
            ],
            data: [20, 20, 20, 20, 20],
            rotate: [40, -70, 0, 70, -40],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Thịt"], //layer 3
            backgroundColor: ["#CD5C5C"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Tiêu - Pepper",
              "Đinh hương\nClove",
              "Ngò\nCoriander",
              "Hoa hồi\nAnise",
              "Húng quế\nBasil",
              "Quế - Cinnamon",
              "Hương thảo\nRosemary",
            ], //layer 4 finish wheel unit
            backgroundColor: [
              "#DBD8D4",
              "#E9E3AD",
              "#EFF1D6",
              "#F3CEC5",
              "#E0F8AE",
              "#F7D2A1",
              "#E4F5D2",
            ],
            data: [14.29, 14.29, 14.29, 14.29, 14.29, 14.29, 14.29],
            rotate: [-70, -20, 50, -90, -40, 20, 70],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Gia vị - rau mùi"], //layer 5
            backgroundColor: ["#CCFF66"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Cam thảo\nLicorice",
              "Hành Tây\nOnion",
              "Cà chua\nTomato",
              "Bí đỏ\nPumpkin",
              "Bắp cải\nCabbage",
              "Bắp -Corn",
              "Cải ngựa\nHorseradish",
              "Cần tây\nCelery",
              "Dưa leo\nCucumber",
            ], //layer 6 finish wheel vegetable
            backgroundColor: [
              "#F8E4C8",
              "#F7E6BD",
              "#FBB7AB",
              "#FFDAB7",
              "#EBD9E7",
              "#F4EFC0",
              "#F5EBCB",
              "#E4FBCA",
              "#EDF5CD",
            ],
            data: [
              11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11,
            ],
            rotate: [-70, -30, 10, 50, -90, -50, -10, 30, 65],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Rau củ"], //layer 7
            backgroundColor: ["#98FB98"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Giấm\nbalsamic",
              "Balsam",
              "Bạc hà",
              "The mát",
              "Thảo mộc",
              "Coumarin",
              "Hương đất mới",
              "Hoa sơn chi",
              "Hoa cam",
              "Hoa dạ\nlan hương",
              "Hoa hồng",
              "Hoa lài",
              "Hoa Lavender",
              "Hoa Lily",
              "Lộc đề xanh",
              "Hoa tử\nđinh hương",
              "Cây phong",
              "Hoa Violet",
              "Hương gỗ",
              "Thuốc lá",
              "Cây xô thơm",
              "Phong lữ",
              "Hương băng phiến",
            ], //layer 8 finish wheel flower
            backgroundColor: [
              "#F4DDDA",
              "#F5EBCB",
              "#ECE4C8",
              "#DFE5AD",
              "#EECECB",
              "#DAE0E6",
              "#D4C794",
              "#EAF6D4",
              "#FDE3C3",
              "#F8ECC8",
              "#FFCCC3",
              "#F4F7C6",
              "#E3E5BF",
              "#E0CED9",
              "#F8E4C8",
              "#E7DBE8",
              "#F5E6CA",
              "#F4D2CC",
              "#FDE6D0",
              "#F4DBD6",
              "#F9E9E5",
              "#FBEBC5",
              "#F7E6BD",
            ],
            data: [
              4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347,
              4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347,
              4.347, 4.347, 4.347, 4.347, 4.347,
            ],
            rotate: [
              -80, -65, -50, -40, -20, 0, 10, 25, 40, 60, 75, -90, -75, -65,
              -50, -30, -10, 10, 20, 30, 50, 65, 85,
            ],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Hoa cỏ"], //layer 9
            backgroundColor: ["#FFC1C1"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Chanh",
              "Cam",
              "Buởi",
              "Anh Đào",
              "Chanh dây",
              "Chuối",
              "Đào",
              "Dâu tây",
              "Dâu rừng",
              "Dừa",
              "Dứa",
              "Dưa hấu",
              "Dưa lưới",
              "Kiwi",
              "Mận",
              "Mơ Châu Âu",
              "Nho",
              "Ổi",
              "Sầu riêng",
              "Táo",
              "Vải",
              "Việt quất",
              "Xoài",
            ], //layer 10 finish wheel sweet
            backgroundColor: [
              "#eaf6d4",
              "#F4CEAA",
              "#fbebc5",
              "#F2C9C2",
              "#f5ebcb",
              "#f7ecc2",
              "#F7B64C",
              "#FDAEAE",
              "#EECECB",
              "#e8e8e8",
              "#F7E6BD",
              "#F2C6BE",
              "#CDD972",
              "#E3E5BF",
              "#D57861",
              "rgba(251, 203, 136, 0.7)",
              "#D9DEB9",
              "#E3E6BE",
              "#F8ECC8",
              "#D2E593",
              "#F6C6BF",
              "#DBE0E6",
              "#E3E6A4",
            ],
            data: [
              4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347,
              4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347, 4.347,
              4.347, 4.347, 4.347, 4.347, 4.347,
            ],
            rotate: [
              -80, -65, -50, -40, -20, 0, 10, 25, 40, 60, 75, -90, -75, -65,
              -50, -30, -10, 10, 20, 30, 50, 65, 85,
            ],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Trái cây"], //layer 11
            backgroundColor: ["#FFA500"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Đậu Phộng",
              "Hạt phỉ",
              "Đường cháy",
              "Bơ",
              "Hạnh nhân\nAlmond",
              "Hương béo\nFatty",
              "Mật ong\nHoney",
              "Óc chó\nWalnut",
              "Phô mai\nCheese",
              "Va ni\nVanilla",
            ], //layer 12 finish wheel vegetable
            backgroundColor: [
              "#FFCB94",
              "#EFDAC7",
              "#F6E2CE",
              "#B7CC8F",
              "#F4DDBE",
              "#E5D8B5",
              "#EEDBB0",
              "#F7D2B3",
              "#DBCBA3",
              "#DED79C",
            ],
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            rotate: [-70, -40, 0, 40, 70, -67, -40, 0, 30, 65],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Bơ, kem và hạt"], //layer 13
            backgroundColor: ["#FFD39B"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Cà phê",
              "Ca cao",
              "Chocolate",
              "Brandy",
              "Bia",
              "Hương cháy\nBumt",
              "Rum",
              "Whiskey",
              "Wine-like",
            ], //layer 14 finish wheel Coffee
            backgroundColor: [
              "#FFDFCD",
              "#FFD9D9",
              "#D4B0A9",
              "#F3E396",
              "#F2D78C",
              "#F8F8F8",
              "#F7EDF8",
              "#FFE6CC",
              "#F4D4CF",
            ],
            data: [
              11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11, 11.11,
            ],
            rotate: [-70, -30, 10, 50, -90, -50, -10, 30, 65],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Coffee, cacao và rượu"], //layer 15
            backgroundColor: ["#DEBC99"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Cà phê",
              "Ca cao",
              "Chocolate",
              "Brandy",
              "Bia",
              "Đậu Phộng",
              "Hạt phỉ",
              "Đường cháy",
              "Bơ",
              "Chanh",
              "Cam",
              "Buởi",
              "Anh Đào",
              "Giấm\nbalsamic",
              "Balsam",
              "Bạc hà",
            ], //layer 16 finish wheel sweet
            backgroundColor: [
              "#FFDFCD",
              "#FFD9D9",
              "#D4B0A9",
              "#F3E396",
              "#F2D78C",
              "#FFCB94",
              "#EFDAC7",
              "#F6E2CE",
              "#B7CC8F",
              "#eaf6d4",
              "#F4CEAA",
              "#fbebc5",
              "#F2C9C2",
              "#F4DDDA",
              "#F5EBCB",
              "#ECE4C8",
            ],
            data: [
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
            ],
            rotate: [
              -75, -60, -30, -10, 10, 30, 50, 75, 105, -60, -40, -10, 10, 30,
              60, 80,
            ],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: [
              "Coffee, cacao và rượu",
              "Bơ, kem và hạt",
              "Trái cây",
              "Hoa cỏ",
            ], //layer 17
            backgroundColor: ["#DEBC99", "#FFD39B", "#FFA500", "#FFC1C1"],
            data: [17.24, 13.792, 13.792, 10.344],
            rotate: [55, -20, 60, -40],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Ngọt"], //layer 18
            backgroundColor: ["#F2994A"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Cam thảo\nLicorice",
              "Hành Tây\nOnion",
              "Cà chua\nTomato",
              "Bí đỏ\nPumpkin",
              "Bắp cải\nCabbage",
              "Bắp -Corn",
              "Tiêu - Pepper",
              "Đinh hương\nClove",
              "Ngò\nCoriander",
              "Gà - Chicken",
              "Bò - Beef",
              "Ba rọi xông \nkhói - Bacon",
              "Cá - Fishy",
            ], //layer 19 finish wheel salt
            backgroundColor: [
              "#F8E4C8",
              "#F7E6BD",
              "#FBB7AB",
              "#FFDAB7",
              "#EBD9E7",
              "#F4EFC0",
              "#DBD8D4",
              "#E9E3AD",
              "#EFF1D6",
              "#EDE6B8",
              "#FBE3C5",
              "#F5DACB",
              "#DCEDED",
            ],
            data: [
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
              3.448, 3.448, 3.448, 3.448,
            ],
            rotate: [-75, -50, -20, 10, 30, 60, 90, -60, -40, 0, 20, 50, 80],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Rau củ", "Gia vị - rau mùi", "Thịt", "Thủy sản"],
            backgroundColor: ["#98FB98", "#CCFF66", "#CD5C5C ", "#7FA6C9"], //layer 20
            data: [20.688, 10.344, 10.344, 3.448],
            rotate: [80, 30, -80, 80],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Mặn"], //layer 21
            backgroundColor: ["#43C6AC"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
          {
            pieLabel: [
              "Cà phê",
              "Ca cao",
              "Chocolate",
              "Brandy",
              "Bia",
              "Đậu Phộng",
              "Hạt phỉ",
              "Đường cháy",
              "Bơ",
              "Chanh",
              "Cam",
              "Buởi",
              "Anh Đào",
              "Giấm\nbalsamic",
              "Balsam",
              "Bạc hà",
              "Cam thảo\nLicorice",
              "Hành Tây\nOnion",
              "Cà chua\nTomato",
              "Bí đỏ\nPumpkin",
              "Bắp cải\nCabbage",
              "Bắp -Corn",
              "Tiêu - Pepper",
              "Đinh hương\nClove",
              "Ngò\nCoriander",
              "Gà - Chicken",
              "Bò - Beef",
              "Ba rọi xông \nkhói - Bacon",
              "Cá - Fishy",
            ], //layer 22 finish first wheel
            backgroundColor: [
              "#FFDFCD",
              "#FFD9D9",
              "#D4B0A9",
              "#F3E396",
              "#F2D78C",
              "#FFCB94",
              "#EFDAC7",
              "#F6E2CE",
              "#B7CC8F",
              "#eaf6d4",
              "#F4CEAA",
              "#fbebc5",
              "#F2C9C2",
              "#F4DDDA",
              "#F5EBCB",
              "#ECE4C8",
              "#F8E4C8",
              "#F7E6BD",
              "#FBB7AB",
              "#FFDAB7",
              "#EBD9E7",
              "#F4EFC0",
              "#DBD8D4",
              "#E9E3AD",
              "#EFF1D6",
              "#EDE6B8",
              "#FBE3C5",
              "#F5DACB",
              "#DCEDED",
            ],
            data: [
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
              3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448, 3.448,
              3.448, 3.448,
            ],
            rotate: [
              -80, -70, -60, -50, -40, -20, -10, 0, 15, 25, 30, 45, 60, 80, 90,
              -80, -70, -55, -40, -25, -15, 0, 10, 25, 30, 45, 55, 70, 86,
            ],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: [
              "Coffee, cacao và rượu ", // has spacing after
              "Bơ, kem và hạt ",
              "Trái cây ",
              "Hoa cỏ ",
              "Rau củ ",
              "Gia vị - rau mùi ",
              "Thịt ",
              "Thủy sản ",
            ], //layer 23
            backgroundColor: [
              "#DEBC99",
              "#FFD39B",
              "#FFA500",
              "#FFC1C1",
              "#98FB98",
              "#CCFF66",
              "#CD5C5C",
              "#7FA6C9",
            ],
            data: [
              17.24, 13.792, 13.792, 10.344, 20.688, 10.344, 10.344, 3.448,
            ],
            rotate: [30, 90, -50, 0, 45, -70, -20, 85],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
              rotation: function (context) {
                return context.dataset.rotate[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Ngọt", "Mặn"], //layer 24
            backgroundColor: ["#F2994A", "#43C6AC"],
            data: [55.168, 44.832],
            datalabels: {
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
          },
          {
            pieLabel: ["Try me"], //layer 25
            backgroundColor: ["#ffffff"],
            data: [100],
            datalabels: {
              color: "#034A46",
              anchor: "start",
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 30);

                return {
                  weight: 700,
                  size: size,
                };
              },
              formatter: function (value, context) {
                return context.dataset.pieLabel[context.dataIndex];
              },
            },
            borderWidth: 0,
          },
        ],
      };

      var options = {
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "center",
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 50);

              return {
                size: size,
              };
            },
          },
          tooltip: {
            enabled: false,
          },
        },
      };

      var pieChart = new Chart(ctxP, {
        type: "pie",
        data: flavourData,
        plugins: [ChartDataLabels],
        options: options,
      });

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
        var slice = pieChart.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          false
        );
        if (!slice.length) return;
        var idx = slice[0].index;
        var label =
          slice[0].element.$datalabels[0].$context.dataset.pieLabel[idx];

        switch (label) {
          case "Mặn":
            flag = !flag;
            if (flag === true) {
              showSlice(saltArr);
              hideSlice(commonArr);
            } else {
              hideSlice(saltArr);
              showSlice(commonArr);
            }
            break;
          case "Ngọt":
            flag = !flag;
            if (flag === true) {
              showSlice(sweetArr);
              hideSlice(commonArr);
            } else {
              hideSlice(sweetArr);
              showSlice(commonArr);
            }
            break;
          // click on first wheel has spacing after
          case "Coffee, cacao và rượu ":
            flag = !flag;
            if (flag === true) {
              showSlice([15, 14]);
              hideSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([15, 14]);
            }
            break;
          case "Bơ, kem và hạt ":
            flag = !flag;
            if (flag === true) {
              showSlice([13, 12]);
              hideSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([13, 12]);
            }
            break;
          case "Trái cây ":
            flag = !flag;
            if (flag === true) {
              showSlice([11, 10]);
              hideSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
            flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,]);
              hideSlice([11, 10]);
            }
            break;
          case "Hoa cỏ ":
            flag = !flag;
            if (flag === true) {
              showSlice([9, 8]);
              hideSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([9, 8]);
            }
            break;
          case "Rau củ ":
            flag = !flag;
            if (flag === true) {
              showSlice([7, 6]);
              hideSlice([ 0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([7, 6]);
            }
            break;
          case "Gia vị - rau mùi ":
            flag = !flag;
            if (flag === true) {
              showSlice([5, 4]);
              hideSlice([ 0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([5, 4]);
            }
            break;
          case "Thịt ":
            flag = !flag;
            if (flag === true) {
              showSlice([3, 2]);
              hideSlice([ 0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([ 0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([3, 2]);
            }
            break;
          case "Thủy sản ":
            flag = !flag;
            if (flag === true) {
              showSlice([1, 0]);
              hideSlice([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              flag = !flag;
            } else {
              showSlice([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25]);
              hideSlice([1, 0]);
            }
            break;
            // click on first wheel
          case "Coffee, cacao và rượu":
            flag = !flag;
            if (flag === false) {
              showSlice([15, 14]);
              hideSlice(sweetArr);
            } else {
              showSlice(sweetArr);
              hideSlice([15, 14]);
            }
            break;
          case "Bơ, kem và hạt":
            flag = !flag;
            if (flag === false) {
              showSlice([13, 12]);
              hideSlice(sweetArr);
            } else {
              showSlice(sweetArr);
              hideSlice([13, 12]);
            }
            break;
          case "Trái cây":
            flag = !flag;
            if (flag === false) {
              showSlice([11, 10]);
              hideSlice(sweetArr);
            } else {
              showSlice(sweetArr);
              hideSlice([11, 10]);
            }
            break;
          case "Hoa cỏ":
            flag = !flag;
            if (flag === false) {
              showSlice([9, 8]);
              hideSlice(sweetArr);
            } else {
              showSlice(sweetArr);
              hideSlice([9, 8]);
            }
            break;
          case "Rau củ":
            flag = !flag;
            if (flag === false) {
              showSlice([7, 6]);
              hideSlice(saltArr);
            } else {
              showSlice(saltArr);
              hideSlice([7, 6]);
            }
            break;
          case "Gia vị - rau mùi":
            flag = !flag;
            if (flag === false) {
              showSlice([5, 4]);
              hideSlice(saltArr);
            } else {
              showSlice(saltArr);
              hideSlice([5, 4]);
            }
            break;
          case "Thịt":
            flag = !flag;
            if (flag === false) {
              showSlice([3, 2]);
              hideSlice(saltArr);
            } else {
              showSlice(saltArr);
              hideSlice([3, 2]);
            }
            break;
          case "Thủy sản":
            flag = !flag;
            if (flag === false) {
              showSlice([1, 0]);
              hideSlice(saltArr);
            } else {
              showSlice(saltArr);
              hideSlice([1, 0]);
            }
            break;
          case "Chanh":
            window.open(
              "/chuyen-muc-huong/chanh-lemon"
            );
            break;
          case "Cam":
            window.open(
              "/chuyen-muc-huong/cam-orange"
            );
            break;
          case "Buởi":
            window.open(
              "/chuyen-muc-huong/buoi-grapefruit"
            );
            break;
          case "Anh Đào":
            window.open(
              "/chuyen-muc-huong/anh-dao-cherry"
            );
            break;
          case "Cà phê":
            window.open(
              "/chuyen-muc-huong/ca-phe-coffee"
            );
            break;
          case "Ca cao":
            window.open(
              "/chuyen-muc-huong/ca-cao-cocoa"
            );
            break;
          case "Chocolate":
            window.open(
              "/chuyen-muc-huong/chocolate"
            );
            break;
          case "Brandy":
            window.open("/chuyen-muc-huong/brandy");
            break;
          case "Bia":
            window.open(
              "/chuyen-muc-huong/bia-beer"
            );
            break;
          case "Hương cháy\nBumt":
            window.open(
              "/chuyen-muc-huong/huong-chay-bumt"
            );
            break;
          case "Rum":
            window.open("/chuyen-muc-huong/rum");
            break;
          case "Whiskey":
            window.open(
              "/chuyen-muc-huong/whiskey"
            );
            break;
          case "Wine-like":
            window.open(
              "/chuyen-muc-huong/wine-like"
            );
            break;
          case "Đậu phộng":
            window.open(
              "/chuyen-muc-huong/dau-phong-peanut"
            );
            break;
          case "Hạt phỉ":
            window.open(
              "/chuyen-muc-huong/hat-phi-hazelnut"
            );
            break;
          case "Đường cháy":
            window.open(
              "/chuyen-muc-huong/duong-chay-caramel"
            );
            break;
          case "Bơ":
            window.open(
              "/chuyen-muc-huong/bo-butter"
            );
            break;
          case "Hạnh nhân\nAlmond":
            window.open(
              "/chuyen-muc-huong/hanh-nhan-almond"
            );
            break;
          case "Hương béo\nFatty":
            window.open(
              "/chuyen-muc-huong/huong-beo-fatty"
            );
            break;
          case "Mật ong\nHoney":
            window.open(
              "/chuyen-muc-huong/oc-cho-walnut"
            );
            break;
          case "Óc chó\nWalnut":
            window.open(
              "/chuyen-muc-huong/oc-cho-walnut"
            );
            break;
          case "Phô mai\nCheese":
            window.open(
              "/chuyen-muc-huong/pho-mai-cheese"
            );
            break;
          case "Va ni\nVanilla":
            window.open(
              "/chuyen-muc-huong/va-ni-vanilla"
            );
            break;
          case "Giấm\nbalsamic":
            window.open(
              "/chuyen-muc-huong/giam-balsamic-balsamic"
            );
            break;
          case "Bạc hà":
            window.open(
              "/chuyen-muc-huong/bac-ha-mint"
            );
            break;
          case "Balsam":
            window.open(
              "/chuyen-muc-huong/nhua-thom-balsam"
            );
            break;
          case "The mát":
            window.open(
              "/chuyen-muc-huong/the-mat-cooling"
            );
            break;
          case "Thảo mộc":
            window.open(
              "/chuyen-muc-huong/thao-moc-grassy"
            );
            break;
          case "Coumarin":
            window.open(
              "/chuyen-muc-huong/coumarin"
            );
            break;
          case "Hương đất mới":
            window.open(
              "/chuyen-muc-huong/huong-dat-moi-earthy"
            );
            break;
          case "Hoa sơn chi":
            window.open(
              "/chuyen-muc-huong/hoa-son-chi-gardenia"
            );
            break;
          case "Hoa cam":
            window.open(
              "/chuyen-muc-huong/hoa-cam-orange-blossom"
            );
            break;
          case "Hoa dạ\nlan hương":
            window.open(
              "/chuyen-muc-huong/hoa-da-lan-huong-hyacinth-flowers"
            );
            break;
          case "Hoa hồng":
            window.open(
              "/chuyen-muc-huong/hoa-hong-rose"
            );
            break;
          case "Hoa lài":
            window.open(
              "/chuyen-muc-huong/hoa-lai-jasmine"
            );
            break;
          case "Hoa Lavender":
            window.open(
              "/chuyen-muc-huong/hoa-lavender-lavender"
            );
            break;
          case "Hoa Lily":
            window.open(
              "/chuyen-muc-huong/hoa-lily-lily"
            );
            break;
          case "Lộc đề xanh":
            window.open(
              "/chuyen-muc-huong/loc-de-xanh-wintergreen"
            );
            break;
          case "Hoa tử\nđinh hương":
            window.open(
              "/chuyen-muc-huong/hoa-tu-dinh-huong-lilac"
            );
            break;
          case "Cây phong":
            window.open(
              "/chuyen-muc-huong/cay-phong-maple"
            );
            break;
          case "Hoa Violet":
            window.open(
              "/chuyen-muc-huong/hoa-violet-violet-flower"
            );
            break;
          case "Hương gỗ":
            window.open(
              "/chuyen-muc-huong/huong-go-woody"
            );
            break;
          case "Thuốc lá":
            window.open(
              "/chuyen-muc-huong/thuoc-la-tobacco"
            );
            break;
          case "Cây xô thơm":
            window.open(
              "/chuyen-muc-huong/cay-xo-thom-sage"
            );
            break;
          case "Phong lữ":
            window.open(
              "/chuyen-muc-huong/phong-lu-geranium"
            );
            break;
          case "Hương băng phiến":
            window.open(
              "/chuyen-muc-huong/huong-bang-phien-camphoraceous"
            );
            break;
          case "Cá - Fishy":
            window.open(
              "/chuyen-muc-huong/ca-fishy"
            );
            break;
          case "Ba rọi xông \nkhói - Bacon":
            window.open(
              "/chuyen-muc-huong/ba-roi-xong-khoi-bacon"
            );
            break;
          case "Bò - Beef":
            window.open(
              "/chuyen-muc-huong/bo-beef"
            );
            break;
          case "Gà - Chicken":
            window.open(
              "/chuyen-muc-huong/ga-chicken"
            );
            break;
          case "Khói - Smoky":
            window.open(
              "/chuyen-muc-huong/khoi-smoky"
            );
            break;
          case "Thịt - Meaty":
            window.open(
              "/chuyen-muc-huong/thit-meaty"
            );
            break;
          case "Ngò\nCoriander":
            window.open(
              "/chuyen-muc-huong/ngo-coriander"
            );
            break;
          case "Đinh hương\nClove":
            window.open(
              "/chuyen-muc-huong/dinh-huong-clove"
            );
            break;
          case "Hoa hồi\nAnise":
            window.open(
              "/chuyen-muc-huong/hoa-hoi-anise"
            );
            break;
          case "Húng quế\nBasil":
            window.open(
              "/chuyen-muc-huong/hung-que-basil"
            );
            break;
          case "Quế - Cinnamon":
            window.open(
              "/chuyen-muc-huong/que-cinnamon"
            );
            break;
          case "Hương thảo\nRosemary":
            window.open(
              "/chuyen-muc-huong/huong-thao-rosemary"
            );
            break;
          case "Tiêu - Pepper":
            window.open(
              "/chuyen-muc-huong/tieu-pepper"
            );
            break;
          case "Bắp -Corn":
            window.open(
              "/chuyen-muc-huong/bap-corn"
            );
            break;
          case "Bắp cải\nCabbage":
            window.open(
              "/chuyen-muc-huong/bap-cai-cabbage"
            );
            break;
          case "Cà chua\nTomato":
            window.open(
              "/chuyen-muc-huong/ca-chua-tomato"
            );
            break;
          case "Cam thảo\nLicorice":
            window.open(
              "/chuyen-muc-huong/cam-thao-licorice"
            );
            break;
          case "Bí đỏ\nPumpkin":
            window.open(
              "/chuyen-muc-huong/bi-do-pumpkin"
            );
            break;

          case "Hành Tây\nOnion":
            window.open(
              "/chuyen-muc-huong/hanh-tay-onion"
            );
            break;
          case "Cải ngựa\nHorseradish":
            window.open(
              "/chuyen-muc-huong/cai-ngua-horseradish"
            );
            break;
          case "Dưa leo\nCucumber":
            window.open(
              "/chuyen-muc-huong/dua-leo-cucumber"
            );
            break;
          case "Cần tây\nCelery":
            window.open(
              "/chuyen-muc-huong/can-tay-celery"
            );
            break;
          case "Anh Đào":
            window.open(
              "/chuyen-muc-huong/anh-dao-cherry"
            );
            break;

          case "Chanh dây":
            window.open(
              "/chuyen-muc-huong/chanh-day-passion-fruit"
            );
            break;

          case "Chuối":
            window.open(
              "/chuyen-muc-huong/chuoi-banana"
            );
            break;

          case "Đào":
            window.open(
              "/chuyen-muc-huong/dao-peach"
            );
            break;

          case "Dâu tây":
            window.open(
              "/chuyen-muc-huong/dau-tay-strawberry"
            );
            break;
          case "Dâu rừng":
            window.open(
              "/chuyen-muc-huong/dau-rung-raspberry"
            );
            break;

          case "Dừa":
            window.open(
              "/chuyen-muc-huong/dua-coconut"
            );
            break;

          case "Dứa":
            window.open(
              "/chuyen-muc-huong/dua-pinapple"
            );
            break;

          case "Dưa hấu":
            window.open(
              "/chuyen-muc-huong/dua-hau-water-melon"
            );
            break;

          case "Dưa lưới":
            window.open(
              "/chuyen-muc-huong/dua-luoi-melon"
            );
            break;

          case "Kiwi":
            window.open("/chuyen-muc-huong/kiwi");
            break;

          case "Mận":
            window.open(
              "/chuyen-muc-huong/man-plum"
            );
            break;
          case "Mơ Châu Âu":
            window.open(
              "/chuyen-muc-huong/mo-chau-au-apricots"
            );
            break;
          case "Nho":
            window.open(
              "/chuyen-muc-huong/nho-grape"
            );
            break;
          case "Ổi":
            window.open(
              "/chuyen-muc-huong/oi-guava"
            );
            break;
          case "Sầu riêng":
            window.open(
              "/chuyen-muc-huong/sau-rieng-durian"
            );
            break;
          case "Táo":
            window.open(
              "/chuyen-muc-huong/tao-apple"
            );
            break;
          case "Vải":
            window.open(
              "/chuyen-muc-huong/vai-lychee"
            );
            break;
          case "Việt quất":
            window.open(
              "/chuyen-muc-huong/viet-quat-blueberry"
            );
            break;
          case "Xoài":
            window.open(
              "/chuyen-muc-huong/xoai-mango"
            );
            break;

          case "Đậu Phộng":
            window.open(
              "/chuyen-muc-huong/dau-phong-peanut"
            );
            break;
        }
      };
