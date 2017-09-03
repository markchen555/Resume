var bio = {
    "name": "Mark Chen",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "626-254-3344",
        "email": "markchen555@gmail.com",
        "github": "markchen555",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "A passionate Front-End Developer with experience building user-centric and responsive driven websites, using HTML5, CSS3, and various web scripting technologies. With strong knowledge in a various of computer languages as well as current web standards and project development and cooperation tools, I am a highly motivated web professional who is adept at conveying complex technical information to a variety of professional interfaces and lay audiences in a clear and understandable manner.",
    "skills": [
        "HTML5 / CSS3 / APIs", "SCSS / sass", "Javascript / jQuery / AJAX / JSON", "Angular.js / React.js / Backbone.js /Knockout.js", "Bootstrap / Responsive", "Object-Oriented Programming", "Website Optimization", "Cross Browser Compatibility Testing", "C-Language"
    ],
    "biopic": "images/me.png"
};

var work = {
    "jobs": [{
        "employer": "SHINGLIAN ASSOCIATES",
        "title": "Executive Assistant",
        "dates": "2015 - 2016",
        "location": "West Covina, CA",
        "description": ["• Maintained and updated company website and social media platforms.", "• Produced analytic reports on website traffic and targeted customers.", "• Maintained Sage ACT! CRM database with up-to-date real estate records.", "• Conducted marketing materials through Photoshop and Illustrator."]
    }, {
        "employer": "JL MOTORING",
        "title": "Financial Analyst Associate",
        "dates": "2013 - 2015",
        "location": "City of Industry, CA",
        "description": ["• Maintained and updated company website and social media platforms.", "• Leveraged data from Google Analytics for marketing purposes.", "• Generated better revenue by analyzing price differentials from competitors.", "• Analyzed sales to optimize inventory control and predict sales trajectories."]
    }, {
        "employer": "LOTUS UNIKEY (PROJECT)",
        "title": "Consultant",
        "dates": "2012 - 2015",
        "location": "Los Angeles, CA, San Jose, CA",
        "description": ["• Codevelop a supercar key with remote integrated that was originally separated." ,"• Analyzed product price and sales data through market research to help fund-raising for $17,060, which was 156% funded.", "• Assisted with website content and structure for easier update and maintenance."]
    }, {
        "employer": "BANK OF AMERICA",
        "title": "Client Associate",
        "dates": "2012 - 2013",
        "location": "Monterey Park, CA",
        "description": ["• Earned the Browns Award for outstanding performance and achieved perfect score on bank auditing.", "• Managed customer transactions, processed sales referrals, and promoted bank services and product."]
    }, {
        "employer": "SHOWOPT",
        "title": "Market Analyst Internship",
        "dates": "2011 - 2011",
        "location": "Irvine, CA",
        "description": ["• Managed and maintained vBulletin forum, website, and social media platforms.", "• Monitored and analyzed website traffic with vBulletin marketing analysis tool.", "• Presented business value to users and vendors/sponsors via market analysis.", "• Coordinated on-site vendor/sponsor visits and interviews for media publications."]
    }]
};

var education = {
    "schools": [{
        "name": "42 University",
        "location": "Fremont, CA",
        "degree": "Bootcamp",
        "majors": ["Computer Programing"],
        "dates": "2016",
        "url": "https://www.42.us.org/"
    }, {
        "name": "University of California, Irvine",
        "location": "Irvine, CA",
        "degree": "BA",
        "majors": ["Business", "Economic"],
        "dates": "2011",
        "url": "https://uci.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Certification",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "2017",
        "description": "Built and personalized a resume powered by JavaScript and jQuery.",
        "url": "https://markchen555.github.io/Portfolio/",
        "images": ["images/Portfolio.png"]
    }, {
        "title": "HTML5 Canvas Game",
        "dates": "2017",
        "description": "Recreated the classic arcade game Frogger with Object-Oriented Javascript and HTML5 Canvas.",
        "url": "https://markchen555.github.io/Classic-Arcade-Game-Clone-Project/",
        "images": ["images/Game.png"]
    }, {
        "title": "Web Optimization",
        "dates": "2017",
        "description": "Optimized PageSpeed insights score to above 90 and frames per second to 60 fps.",
        "url": "https://markchen555.github.io/Website-Optimization-Project/",
        "images": ["images/Optimize.png"]
    }, {
        "title": "Neighborhood Map",
        "dates": "2017",
        "description": "Developed a single page website to display tea shops around school with Google and Yelp APIs.",
        "url": "https://markchen555.github.io/Neighborhood-Map-Project/",
        "images": ["images/Neighborhood.png"]
    },{
        "title": "Github Battle",
        "dates": "2017",
        "description": "Developed a single page Github score battling website using React.js, Axios Api, Babel, Webpack and Firebase.",
        "url": "https://github-battle-a2f94.firebaseapp.com",
        "images": ["images/github-battle.png"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    formattedContactInfo.forEach(function(contact) {
        $("#topContacts").append(contact);
        $("#footerContacts").append(contact);
    });

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

  work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        //var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        //$(".work-entry:last").append(formattedDescription);

         for(var desc = 0; desc < work.jobs[job].description.length; desc++){
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[desc]);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

work.display();


projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();


education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajors);
        }
            $("#education").append(HTMLonlineClasses);
            for (var online = 0; online < education.onlineCourses.length; online++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
                var formattedOnlineSchools = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchools);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineUrl);
        }
    }
};

education.display();


$("#mapDiv").append(googleMap);
