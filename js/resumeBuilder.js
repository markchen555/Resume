var bio = {
    "name": "Mark Chen",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "626-254-3344",
        "email": "markchen555@gmail.com",
        "github": "markchen555",
        "location": "Los Angeles"
    },
    "welcomeMessage": "I'm passionate Front-End Web Developer!",
    "skills": [
        "C-Language", "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", "Knockout.js"
    ],
    "biopic": "images/me.png"
};

var work = {
    "jobs": [{
        "employer": "SHINGLIAN ASSOCIATES",
        "title": "Executive Assistant",
        "dates": "2015 - 2016",
        "location": "West Covina",
        "description": "Maintained and updated data for company website and social media platforms."
    }, {
        "employer": "JL MOTORING",
        "title": "Financial Analyst Associate",
        "dates": "2013-2015",
        "location": "City of Industry",
        "description": "Assisted in updating website and preparing traffic analysis reports."
    }, {
        "employer": "BANK OF AMERICA",
        "title": "Client Associate",
        "dates": "2012-2013",
        "location": "Monterey Park",
        "description": "Managed customer transactions and promoted bank services and products."
    }, {
        "employer": "SHOWOPT",
        "title": "Market Analyst Internship",
        "dates": "2011-2011",
        "location": "Irvine",
        "description": "Managed and maintained vBulleti n forum, website, and social media."
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
        "description": "Building JavaScript portfolio site",
        "url": "https://markchen555.github.io/Portfolio/",
        "images": ["images/Portfolio.png"]
    }, {
        "title": "HTML5 Canvas Game",
        "dates": "2017",
        "description": "Created an online game using HTML5 Canvas",
        "url": "https://markchen555.github.io/Classic-Arcade-Game-Clone-Project/",
        "images": ["images/game.png"]
    }, {
        "title": "Web Optimization",
        "dates": "2017",
        "description": "Optimize website to run at 60fps",
        "url": "https://markchen555.github.io/Website-Optimization-Project/",
        "images": ["images/optimize.png"]
    }, {
        "title": "Neighborhood Map",
        "dates": "2017",
        "description": "Created search function within the neighborhood with Google and Yelp API",
        "url": "https://markchen555.github.io/Neighborhood-Map-Project/public/",
        "images": ["images/Neighborhood.png"]
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
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
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
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
