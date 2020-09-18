import React from 'react'

export const skills = {
    "React" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        category: "Javascript Library",
        tags: ["frontend"],
    	rate: 4,
	},
    "C++" : {
        img: "https://4.bp.blogspot.com/-B0Q_XqC_HEE/V4OrxNXrtII/AAAAAAAAB2Q/RORWYm9FfFM7JR6SWHxRdgajsYDDxMjLwCLcB/s1600/C__.png",
        category: "Programming Language",
        tags: ["frontend", "backend", "gamedev"],
        extraInfo: "Standards 11-17 Learning 20",
    	rate: 5,
	},
    "Javascript" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        //category: "Programming Language",
        category: "Programming Language",
        tags: ["frontend", "backend"],
    	rate: 4,
	},
    "HTML 5" : {
        img: "https://image.flaticon.com/icons/png/512/1216/1216733.png",
        category: "Markup Language",
        tags: ["frontend"],
    	rate: 4.5,
	},
    "CSS 3" : {
        img: "https://www.logolynx.com/images/logolynx/s_3b/3b9d42a73e06ccac04deb9073e5235ba.png",
        category: "Stylesheet Language",
        tags: ["frontend"],
    	rate: 4,
	},
    "Gatsby" : {
        img: "https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png",
        tags: ["frontend"],
    	rate: 4,
	},
    "Node.js" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        tags: ["backend"],
    	rate: 3.5,
    },
    "Firebase": {
        img: "https://www.gstatic.com/devrel-devsite/prod/vc0bb6d163e24d3b3e0961a17422a4975b4069aa6cfc1baff269f5aa415a63d55/firebase/images/touchicon-180.png",
        tags: ["backend"],
        rate: 3.5
    },
     "Qt": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1280px-Qt_logo_2016.svg.png",
        tags: ["frontend", "backend"],
    	rate: 4.5,
	},
    "Python" : {
        img: "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png",
        tags: ["backend"],
    	rate: 4,
	},
     "SFML 2": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/SFML_Logo.svg/1200px-SFML_Logo.svg.png",
        tags: ["gamedev"],
    	rate: 4.5,
	},
    "Cocos2D" : {
        img: "https://developer.si2soluciones.es/wp-content/uploads/2015/06/2dx_icon_512_rounded.png",
        tags: ["gamedev"],
    	rate: 4,
	},
    "Godot" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
        tags: ["gamedev"],
    	rate: 3.5,
	},
    "Unity" : {
        img: "https://i.ya-webdesign.com/images/unity-logo-white-png.png",
        tags: ["gamedev"],
    	rate: 4,
	},
     "C#" : {
        img: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    	tags: ["gamedev"],
    	rate: 3.5,
	},
     "Unreal Engine 4" : {
        img: "data:image/png;base64,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",
    	tags: ["gamedev"],
    	rate: 4,
	},
     "Playcanvas" : {
        img: "data:image/png;base64,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",
    	tags: ["gamedev"],
    	rate: 4.5,
	},
    "Flask" : {
        img: "https://www.kindpng.com/picc/m/188-1882416_flask-python-logo-hd-png-download.png",
    	tags: ["backend"],
		rate: 3.5,
	},
    "Boost" : {
        img: "https://theboostcpplibraries.com/static/main/img/boost-logo.svg",
    	tags: ["backend"],
		rate: 3.5,
	},
    "MySql" : {
        img: "https://anthoncode.com/wp-content/uploads/2019/01/mysql-logo-png.png",
    	tags: ["backend"],
		rate: 4,
	},
    "Visual Studio" : {
        img: "https://visualstudio.microsoft.com/wp-content/uploads/2018/11/vsplogo.png",
    	tags: ["tools"],
    	rate: 4.5,
	},
    "Visual Studio Code" : {
        img: "https://labarta.es/wp-content/uploads/2019/11/vscode-450x450.png",
    	tags: ["tools"],
    	rate: 4.5,
	},
    "Qt Creator": {
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Qt_logo_2013.svg",
        tags: ["tools"],
    	rate: 4.5,
    },
    "Heroku": {
        img: "https://blog.desafiolatam.com/wp-content/uploads/2015/09/43sHKeth.png",
        tags: ["tools"],
        rate: 3.5
    },
    "Github" : {
        img: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    	tags: ["tools"],
		rate: 4,
	},
    "Git" : {
        img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    	tags: ["tools"],
		rate: 4,
	},
    "Ionic" : {
        img: "https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084",
    	tags: ["tools"],
		rate: 4,
	},
    "Perforce" : {
        img: "https://img.informer.com/icons_mac/png/128/437/437456.png",
    	tags: ["tools"],
		rate: 4,
	},
    "Toad" : {
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Toad-Original_RGB.png",
    	tags: ["tools"],
		rate: 4,
	},
    "VMware" : {
        img: "https://www.muycomputerpro.com/wp-content/uploads/2015/02/vmware-logo.png",
    	tags: ["tools"],
		rate: 3.5,
	},
    "Linux" : {
        img: "https://image.flaticon.com/icons/svg/226/226772.svg",
    	tags: ["tools"],
		rate: 3.5,
    },
    "Windows" : {
        img: "https://image.flaticon.com/icons/svg/888/888882.svg",
    	tags: ["tools"],
		rate: 4,
    },
    "SQL" : {
        img: "https://alexbruga.files.wordpress.com/2015/12/sql-logo.png?w=640",
    	tags: ["backend"],
		rate: 4,
	},
    "OpenGL" : {
        img: "https://upload.wikimedia.org/wikipedia/en/f/fb/OpenGL_logo_%28Nov14%29.svg",
    	tags: ["gamedev"],
		rate: 4,
	},
    "DirectX" : {
        img: "https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/directx_89859d36.png",
    	tags: ["gamedev"],
    	rate: 4,
	},
    /* Soft Skills */
    "Team Player": {
        img: "https://image.flaticon.com/icons/svg/476/476715.svg",
        tags:["softskills"],
    	rate: 5,
	},
    "Creative": {
        img: "https://image.flaticon.com/icons/svg/401/401645.svg",
        tags:["softskills"],
    	rate: 4,
	},
    "Proactive": {
        img: "https://image.flaticon.com/icons/svg/942/942781.svg",
        tags:["softskills"],
    	rate: 4.5,
	}, 
    "Self Taught": {
        img: "https://image.flaticon.com/icons/svg/567/567026.svg",
        tags:["softskills"],
    	rate: 5,
	},
    "Positive": {
        img: "https://image.flaticon.com/icons/svg/2598/2598784.svg",
        tags:["softskills"],
    	rate: 5,
	},
    "Planner": {
        img: "https://image.flaticon.com/icons/svg/681/681611.svg",
        tags:["softskills"],

    	rate: 4.5,
	},
    "Clear Communication": {
        img: "https://image.flaticon.com/icons/svg/942/942745.svg",
        tags:["softskills"],
    	rate: 4.5,
	},
    "Time Managment": {
        img: "https://image.flaticon.com/icons/svg/2618/2618051.svg",
        tags:["softskills"],
    	rate: 4.5,
	},
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