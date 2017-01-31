var bio = {
    "name": "Mark Chen",
    "role": "Junior Software Engineer",
    "contacts": {
        "mobile": "626-254-3344",
        "email": "markchen555@hotmail.com",
        "github": "markchen555",
        "location": "Los Angeles"
    },
    "welcomeMessage": "I'm passionate Front-End Web Developer",
    "skills": [
        "C-Language", "JavaScript", "HTML", "Linx", "CSS", "jQuery", "Bootstrap", "Knockout.js"
    ],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Shinglian Associates",
        "title": "Assistance",
        "dates": "2015 - 2016",
        "location": "West Covina",
        "description": "Assist VP in the office"
    }, {
        "employer": "JL Motoring",
        "title": "Associate",
        "dates": "2012-2015",
        "location": "City of Industry",
        "description": "General legdture"
    }]
};

var education = {
    "schools": [{
        "name": "42 University",
        "location": "Fremont, CA",
        "degree": "Certification",
        "majors": ["CompSci"],
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
        "title": "JavaScript Basic",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};

var projects = {
    "projects": [{
        "title": "resume1",
        "dates": "2016",
        "description": "Building resume using JavaScript",
        "images": ["images/fry.jpg"]
    }, {
        "title": "resume2",
        "dates": "2016",
        "description": "Building resume using JavaScript",
        "images": ["images/fry.jpg"]
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

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
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
