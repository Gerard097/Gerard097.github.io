import React from 'react'

export const skills = {
    "React" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        category: "Javascript Library",
        tags: ["frontend"]
    },
    "C++" : {
        img: "https://4.bp.blogspot.com/-B0Q_XqC_HEE/V4OrxNXrtII/AAAAAAAAB2Q/RORWYm9FfFM7JR6SWHxRdgajsYDDxMjLwCLcB/s1600/C__.png",
        category: "Programming Language",
        tags: ["frontend", "backend", "gamedev"],
        extraInfo: "Standards 11-17 Learning 20"
    },
    "Javascript" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        //category: "Programming Language",
        category: "Programming Language",
        tags: ["frontend", "backend"]
    },
    "HTML 5" : {
        img: "https://image.flaticon.com/icons/png/512/1216/1216733.png",
        category: "Markup Language",
        tags: ["frontend"]
    },
    "CSS 3" : {
        img: "https://www.logolynx.com/images/logolynx/s_3b/3b9d42a73e06ccac04deb9073e5235ba.png",
        category: "Stylesheet Language",
        tags: ["frontend"]
    },
    "Gatsby" : {
        img: "https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        tags: ["frontend"]
    },
    "Node.js" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        tags: ["backend"]
    },
     "Qt": {
        img: "https://www.stickpng.com/assets/images/58481514cef1014c0b5e4964.png",
        tags: ["frontend", "backend"]
    },
    "Python" : {
        img: "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
        tags: ["backend"]
    },
     "SFML 2": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/SFML_Logo.svg/1200px-SFML_Logo.svg.png",
        tags: ["gamedev"]
    },
    "Cocos2D" : {
        img: "https://developer.si2soluciones.es/wp-content/uploads/2015/06/2dx_icon_512_rounded.png",
        tags: ["gamedev"]
    },
    "Godot" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
        tags: ["gamedev"]
    },
    "Unity" : {
        img: "https://i.ya-webdesign.com/images/unity-logo-white-png.png",
        tags: ["gamedev"]
    },
     "C#" : {
        img: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    	tags: ["gamedev"],
    },
     "Unreal Engine 4" : {
        img: "https://www.richlandcollege.edu/cd/credit/gaming/rlc/student-resources/PublishingImages/UnrealEngine-269x300.png",
    	tags: ["gamedev"],
    },
    "Flask" : {
        img: "https://www.kindpng.com/picc/m/188-1882416_flask-python-logo-hd-png-download.png",
    	tags: ["backend"],
	},
    "Boost" : {
        img: "https://theboostcpplibraries.com/static/main/img/boost-logo.svg",
    	tags: ["backend"],
	},
    "MySql" : {
        img: "https://anthoncode.com/wp-content/uploads/2019/01/mysql-logo-png.png",
    	tags: ["backend"],
	},
    "Visual Studio" : {
        img: "https://visualstudio.microsoft.com/wp-content/uploads/2018/11/vsplogo.png",
    	tags: ["tools"],
    },
    "Visual Studio Code" : {
        img: "https://labarta.es/wp-content/uploads/2019/11/vscode-450x450.png",
    	tags: ["tools"],
    },
    "Qt Creator": {
        img: "https://i1.wp.com/emenda.com/wp-content/uploads/2018/01/qt-creator-logo.png?fit=256%2C256&ssl=1",
        tags: ["tools"]
    },
    "Github" : {
        img: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    	tags: ["tools"],
	},
    "Git" : {
        img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    	tags: ["tools"],
	},
    "Perforce" : {
        img: "https://img.informer.com/icons_mac/png/128/437/437456.png",
    	tags: ["tools"],
	},
    "Toad" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Toad-Original_RGB.png",
    	tags: ["tools"],
	},
    "SQL" : {
        img: "https://alexbruga.files.wordpress.com/2015/12/sql-logo.png?w=640",
    	tags: ["backend"],
	},
    "OpenGL" : {
        img: "https://upload.wikimedia.org/wikipedia/en/f/fb/OpenGL_logo_%28Nov14%29.svg",
    	tags: ["gamedev"],
	},
    "DirectX" : {
        img: "https://i.pinimg.com/originals/33/c2/17/33c217769e64a4ad38331386cd06999a.png",
    	tags: ["gamedev"],
    },
    /* Soft Skills */
    // "Team Player": {

    // },
    // "Creative": {

    // },
    // "Proactive": {

    // }, 
    // "Self Taught": {

    // },
    // "Positive": {

    // },
    // "Planner": {

    // }
}

export const areas = {
    frontend: {
        name: "Frontend",
        skills: ["C++", "Qt", "React", "CSS 3", "HTML 5"]
    },
    backend: {
        name: "Backend",
        skills: ["C++", "Python", "Flask", "Boost", "MySql"]
    },
    gamedev: {
        name: "Game Development",
        skills: ["C++", "SFML", "Unity", "C#", "Cocos2D"]
    },
    tools: {
        
    }
}