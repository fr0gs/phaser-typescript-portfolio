var Portfolio;
(function (Portfolio) {
    var Gui;
    (function (Gui_1) {
        var Gui = (function () {
            function Gui(aboutScreen) {
                this.aboutScreen = {
                    id: 'about',
                    component: 'Window',
                    header: { id: 'titlebar', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Hello! I am Esteban :)' },
                    draggable: true,
                    position: { x: 100, y: 100 },
                    width: 450,
                    height: 500,
                    children: [
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 0 },
                            width: 450,
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
                            position: { x: 0, y: 50 },
                            width: 450,
                            height: 400,
                            layout: [1, 3],
                            children: [
                                { id: 'frontend', text: 'Frontend', component: 'Button', z: 1, skin: 'hListItem', position: 'center', width: 450, height: 130 },
                                { id: 'backend', text: 'Backend', component: 'Button', skin: 'hListItem', position: 'center', width: 450, height: 130 },
                                { id: 'misc', text: 'Misc', component: 'Button', skin: 'hListItem', position: 'center', width: 450, height: 130 }
                            ]
                        }
                    ]
                },
                    this.frontendScreen = {
                        id: 'frontendScreen',
                        component: 'Window',
                        header: { id: 'frontendTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Frontend Skills' },
                        draggable: true,
                        padding: 0,
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
                                    { id: 'btnBackFrontend', text: 'Back', component: 'Button', position: { x: 8, y: 0 }, width: 60, height: 40 },
                                    null,
                                    { id: 'btnCloseFrontend', text: 'Close', component: 'Button', position: 'right', width: 60, height: 40 },
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
                                    { id: 'frameworks', text: 'Frameworks: Ember, React, jQuery, Phaser', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 75 }
                                ]
                            }]
                    },
                    this.backendScreen = {
                        id: 'backendScreen',
                        component: 'Window',
                        header: { id: 'backendTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Backend Skills' },
                        draggable: true,
                        padding: 0,
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
                                    { id: 'btnBackBackend', text: 'Back', component: 'Button', position: { x: 8, y: 0 }, width: 60, height: 40 },
                                    null,
                                    { id: 'btnCloseBackend', text: 'Close', component: 'Button', position: 'right', width: 60, height: 40 },
                                ]
                            },
                            {
                                id: 'backendList',
                                component: 'List',
                                position: { x: 5, y: 50 },
                                width: 440,
                                height: 400,
                                layout: [1, 3],
                                children: [
                                    { id: 'languages', text: 'Languages: Java, Node.js', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 },
                                    { id: 'databases', text: 'DB: PouchDB, MongoDB, mySQL, PostreSQL', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 },
                                    { id: 'frameworks', text: 'Frameworks: Express.js', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 }
                                ]
                            }]
                    },
                    this.miscScreen = {
                        id: 'miscScreen',
                        component: 'Window',
                        header: { id: 'miscTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'General Skills' },
                        draggable: true,
                        padding: 0,
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
                                    { id: 'btnBackMisc', text: 'Back', component: 'Button', position: { x: 8, y: 0 }, width: 60, height: 40 },
                                    null,
                                    { id: 'btnCloseMisc', text: 'Close', component: 'Button', position: 'right', width: 60, height: 40 },
                                ]
                            },
                            {
                                id: 'miscList',
                                component: 'List',
                                position: { x: 5, y: 50 },
                                width: 440,
                                height: 400,
                                layout: [1, 3],
                                children: [
                                    { id: 'os', text: 'OS: Linux, Windows', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 },
                                    { id: 'cvs', text: 'CVS: Git, SVN, Mercurial', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 },
                                    { id: 'methodologies', text: 'Methodologies: Scrum, Agile', component: 'Button', skin: 'hListItem', position: 'center', width: 430, height: 130 }
                                ]
                            }]
                    };
                this.contactScreen = {
                    id: 'contactScreen',
                    component: 'Window',
                    header: { id: 'contactTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Contact' },
                    draggable: true,
                    padding: 0,
                    position: { x: 100, y: 100 },
                    width: 450,
                    height: 500,
                    children: [
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 0 },
                            width: 450,
                            height: 50,
                            layout: [3, null],
                            children: [
                                { id: 'btnCloseContact', text: 'Close', component: 'Button', position: { x: 5, y: 5 }, width: 60, height: 40 },
                                null,
                                null
                            ]
                        },
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 50 },
                            width: 450,
                            height: 100,
                            layout: [3, null],
                            children: [
                                null,
                                { id: 'github', text: 'Github', component: 'Button', position: 'center', width: 100, height: 40 },
                                null
                            ]
                        },
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 150 },
                            width: 450,
                            height: 100,
                            layout: [3, null],
                            children: [
                                null,
                                { id: 'twitter', text: 'Twitter', component: 'Button', position: 'center', width: 100, height: 40 },
                                null
                            ]
                        },
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 250 },
                            width: 450,
                            height: 100,
                            layout: [3, null],
                            children: [
                                null,
                                { id: 'email', text: 'Email', component: 'Button', position: 'center', width: 100, height: 40 },
                                null
                            ]
                        },
                        {
                            component: 'Layout',
                            padding: 0,
                            position: { x: 0, y: 350 },
                            width: 450,
                            height: 100,
                            layout: [3, null],
                            children: [
                                null,
                                { id: 'linkedin', text: 'Linkedin', component: 'Button', position: 'center', width: 100, height: 40 },
                                null
                            ]
                        }
                    ]
                },
                    this.blogScreen = {
                        id: 'blogScreen',
                        component: 'Window',
                        header: { id: 'blogTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Blog' },
                        draggable: true,
                        padding: 0,
                        position: { x: 150, y: 100 },
                        width: 450,
                        height: 500,
                        children: [
                            {
                                component: 'Layout',
                                padding: 0,
                                position: { x: 0, y: 0 },
                                width: 450,
                                height: 50,
                                layout: [3, null],
                                children: [
                                    { id: 'btnCloseBlog', text: 'Close', component: 'Button', position: { x: 5, y: 5 }, width: 60, height: 40 },
                                    null,
                                    null
                                ]
                            },
                            {
                                component: 'Layout',
                                padding: 0,
                                position: { x: 0, y: 50 },
                                width: 450,
                                height: 350,
                                layout: [1, null],
                                children: [
                                    { id: 'blog', text: 'Click here to see my blog!', component: 'Button', position: 'center', width: 450, height: 350 }
                                ]
                            },
                            {
                                text: 'Esteban Inc.',
                                font: {
                                    size: '20px',
                                    family: 'Arial',
                                    color: '#fff'
                                },
                                component: 'Header',
                                position: { x: 0, y: 400 },
                                width: 450,
                                height: 50
                            }
                        ]
                    },
                    this.experienceScreen = {
                        id: 'experienceScreen',
                        component: 'Window',
                        header: { id: 'blogTitle', skin: 'Header', position: { x: 0, y: 0 }, height: 50, text: 'Experience' },
                        draggable: true,
                        padding: 0,
                        position: { x: 150, y: 100 },
                        width: 450,
                        height: 500,
                        children: [
                            {
                                component: 'Layout',
                                padding: 0,
                                position: { x: 0, y: 0 },
                                width: 450,
                                height: 50,
                                layout: [3, null],
                                children: [
                                    { id: 'btnCloseExperience', text: 'Close', component: 'Button', position: { x: 5, y: 5 }, width: 60, height: 40 },
                                    null,
                                    null
                                ]
                            },
                            {
                                component: 'Layout',
                                padding: 0,
                                position: { x: 0, y: 50 },
                                width: 450,
                                height: 175,
                                layout: [1, null],
                                children: [
                                    { id: 'blog', text: 'Dec. 2015 - Actual\nFrontend Developer\nTenForce', component: 'Button', position: 'center', width: 450, height: 175 }
                                ]
                            },
                            {
                                component: 'Layout',
                                padding: 0,
                                position: { x: 0, y: 225 },
                                width: 450,
                                height: 175,
                                layout: [1, null],
                                children: [
                                    { id: 'blog', text: 'Sept 2015 - Dec 2016\nEnterprise Software Engineer\nDenodo Technologies', component: 'Button', position: 'center', width: 450, height: 175 }
                                ]
                            },
                            {
                                id: 'footerExperience',
                                text: 'No previous experience',
                                font: {
                                    size: '20px',
                                    family: 'Arial',
                                    color: '#fff'
                                },
                                component: 'Header',
                                position: { x: 0, y: 400 },
                                width: 450,
                                height: 50
                            }
                        ]
                    };
            }
            return Gui;
        }());
        Gui_1.Gui = Gui;
    })(Gui = Portfolio.Gui || (Portfolio.Gui = {}));
})(Portfolio || (Portfolio = {}));
