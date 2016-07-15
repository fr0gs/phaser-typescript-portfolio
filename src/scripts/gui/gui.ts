module Portfolio.Gui {
    export class Gui {
        aboutScreen: any;

        constructor(aboutScreen?: any) {
            this.aboutScreen = {
                // this ID must be unique, it'll help you easily access the gui component throught EZGUI.components.myWindow
                id: 'about',

                //this the component ID, EZGUI define those components: Window, Button, Checkbox, Slider, Radio...
                //but you can create your own components or extend existing
                component: 'Window',
                header: { id: 'titlebar', skin: 'blueheader', position: { x: 0, y: 0 }, height: 50, text: 'Hello! I am Esteban :)' },
                //when a header is defined, and the window is draggable,
                //the drag handler is set to the header
                draggable: true,

                //This is the padding space from the component borders
                padding: 0,

                //component position relative to parent. In this case compred to the game's div.
                position: { x: 100, y: 100 },

                //layout: [1, 2],

                width: 450,
                height: 500,
                children: [
                  {
                    component: 'Layout',

                    padding: 0,
                    position: { x: 0, y: 0 },
                    width: 440,
                    height: 50,
                    layout: [3, null],
                    children: [
                		  { id: 'btnClose', text: 'Close', component: 'Button', position: { x: 5, y: 5 }, width: 60, height: 40 },
                			{ id: 'btnFullstack', text: 'Fullstack Developer', component: 'Button', position: 'center', width: 200, height: 40 },
                			null
                    ]
                	},
                  {
                      id: 'mylist',
                      component: 'List',
                      position: { x: 5, y: 50 },
                      width: 440,
                      height: 400,
                      layout: [1, 3],
                      children: [
                        { id: 'frontend', text: 'Frontend', component: 'Button', z: 1, skin: 'hListItem', position: 'center', width: 430, height: 130 },
                        { id: 'backend', text: 'Backend', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 },
                        { id: 'misc', text: 'Misc', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 }
                      ]
                  }
                ]
            }
            this.frontendScreen = {
              id: 'frontendScreen',
              component: 'Window',
              header: { id: 'frontendTitle', skin: 'blueheader', position: { x: 0, y: 0 }, height: 50, text: 'Frontend Skills' },
              draggable: true,

              //This is the padding space from the component borders
              padding: 0,

              //component position relative to parent. In this case compred to the game's div.
              position: { x: 100, y: 100 },

              width: 450,
              height: 500,
              children: [
                {
                  component: 'Layout',

                  padding: 0,
                  position: { x: 0, y: 0 },
                  width: 440,
                  height: 50,
                  layout: [3, null],
                  children: [
                    { id: 'btnCloseFrontend', text: 'Close', component: 'Button', position: { x: 5, y: 5 }, width: 60, height: 40 },
                    null,
                    null
                  ]
                },
                {
                    id: 'frontendList',
                    component: 'List',
                    position: { x: 5, y: 50 },
                    width: 440,
                    height: 400,
                    layout: [1, 5],
                    children: [
                      { id: 'html', text: 'HTML5', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 },
                      { id: 'css', text: 'CSS3', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 },
                      { id: 'bootstrap', text: 'Bootstrap', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 },
                      { id: 'languages', text: 'Javascript, Coffeescript, Typescript', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 },
                      { id: 'frameworks', text: 'Frameworks: Ember, React, React Native', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 }
                    ]
                }
            }
        }
    }
}
