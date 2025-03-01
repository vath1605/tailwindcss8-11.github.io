/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont:[
          "Sigmar","serif"
        ],
        mainFont:[
          "Paytone One", "serif"
        ]
      },
      textColor:{
        primary:[
          "RGB(138 180 248)"
        ], 
      },
      height:{
        navheight:[
          "75px"
        ],
      },
      width:{
        navwidth:[
          "85%"
        ],
        secWidth:[
          "25%"
        ],
        largeWidth:[
          "50%"
        ]
      },
      borderRadius:{
        radiusTop:[
          "40px",
        ]
      },
      backgroundColor:{
        darkcolor: [
          "rgb(1,0,0)"
        ]
      }
    },
  },
  plugins: [],
}

