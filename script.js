console.log('hello!');
$(() => {
  console.log('Document loaded');

  const setup = (data, containerPath, clonerPath, sort) => {
    const container = $(containerPath);
    const cloneObj = $(clonerPath);
    let sorted = sort ? data.sort() : data;
    sorted.forEach((s) => {
      cloneObj.clone().text(s).appendTo(container);
    });
    cloneObj.remove();
  };

  const setupSkills = () => {
    const skills = [
      'C#',
      'ASP.NET',
      'ASP.NET Core',
      'Azure',
      'Angular',
      '.NET5',
      'MSAL',
      'SCSS',
      'Docker',
      'Reactive Programming',
      'Agile',
      'REST API',
      'OpenID Connect',
      'Dotnetcore',
      'MultiThreading',
      'TPL',
      'Windows Services',
      'HTML',
      'CSS',
    ];

    setup(
      skills,
      '.skills .skills-container',
      '.skills .skills-container .skill',
      true
    );
  };

  const setupInterests = () => {
    const interests = [
      'Music',
      'Computer research',
      'Binge watching',
      'Reading',
    ];
    setup(
      interests,
      '.interests .interests-container',
      '.interests .interests-container .interest',
      false
    );
  };

  const setupLanguages = () => {
    const languages = [
      { lang: 'English', prof: 'Full Professional Proficiency' },
      { lang: 'Hindi', prof: 'Native Proficiency' },
      { lang: 'Marathi', prof: 'Elementary Proficiency' },
    ];

    const container = $('.languages .languages-container');
    const cloneObj = $('.languages .languages-container .language');

    let cloner = $(cloneObj).children();
    let lang = $(cloner[0]);
    let prof = $(cloner[1]);

    languages.forEach((l) => {
      lang.text(l.lang);
      prof.text(l.prof);
      cloneObj.clone().appendTo(container);
    });
    cloneObj.remove();
  };

  const setupEducation = () => {
    const degrees = [
      {
        degree: 'BE (Information Technology) (06/2009 - 06/2011)',
        college: 'KJ Somaiya College Of Engineering, Mumbai',
      },
      {
        degree: 'Higher Secondary School (HSC) (06/2007 - 06/2009)',
        college: 'Kishinchand Chellaram College, Mumbai',
      },
    ];

    const container = $('.education .education-container');
    const cloneObj = $('.education .education-container .entry');

    let cloner = $(cloneObj).children();
    let deg = $(cloner[0]);
    let collg = $(cloner[1]);

    degrees.forEach((d) => {
      deg.text(d.degree);
      collg.text(d.college);
      cloneObj.clone().appendTo(container);
    });
    cloneObj.remove();
  };

  const setupCertifications = () => {
    const certs = [
      {
        title:
          'Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3',
        duration: '03/2013-Present',
      },
      {
        title:
          'Microsoft® Certified Technology Specialist: .NET Framework 4, Windows Applications',
        duration: '09/2012-Present',
      },
    ];

    const container = $('.certifications .certifications-container');
    const cloneObj = $(
      '.certifications .certifications-container .certification'
    );

    let cloner = $(cloneObj).children();
    let title = $(cloner[0]);
    let dur = $(cloner[1]);

    certs.forEach((c) => {
      title.text(c.title);
      dur.text(c.duration);
      cloneObj.clone().appendTo(container);
    });
    cloneObj.remove();
  };

  const setupWorkExperience = () => {
    const workex = [
      {
        company: 'Morgan Stanley',
        title: 'Senior Manager',
        duration: '07/2014 - Present',
        location: 'Mumbai, India',

        projects: [
          {
            title: 'Infrastructure Framework Development',
            details: [
              'This project is one of the Morgan Stanley enterprise wide initiative to adopt public cloud-base development which focuses on improving development productivity using cloud tools such as Microsoft Azure, Azure DevOps, Azure Test Manager, Pipelines etc. ',
              'This engagement performing research and development on building cloud (Microsoft Azure) capability for .NET Core based applications, setting up core infrastructure to enable various cloud-based development within organization.',
              'This includes identity management on cloud, service discovery, application monitoring, identity federation, integration with Microsoft ADAL and MSAL libraries for .net application to adopt Openid Connect.',
            ],
            technologies: [
              'C#',
              'ASP.NET',
              'Azure',
              'ASP.NET Core',
              'MSAL',
              'OAuth',
              'OpenIDConnect',
            ],
          },
          {
            title: 'Realtime Debit Card transaction management',
            details: [
              'Windows service development that interfaces with external entity which delivers real time debit card transactions as an ISO8583 message. ',
              'Implemented as a .NET service interfacing with external client to recieve notifications and then processs them in realtime to downstream systems.',
            ],
            technologies: [
              'C#',
              'Windows Services',
              'XML',
              'SQL',
              'Socket Programming',
            ],
          },
          {
            title: 'Debit Card & Cheques Ordering System',
            details: [
              'Web application development (Angular, ngrx) that enables back office to place debit card orders and cheques. ',
              'This provides CFA(s) a one-stop solution for handling new debit cards & cheque book orders.',
            ],
            technologies: [
              'Angular',
              'ngrx',
              'HTML',
              'CSS',
              'Responsive web design',
            ],
          },
          {
            title: 'Stateful angular library for master-detail applications',
            details: [
              'Data sourced from a single backend database and then delivered to the passenger applications as an event that they can subscribe to, in order to fetch other relevant details helped passenger applications to be decoupled from the data delivery & mechanics of the library.',
            ],
            technologies: [
              'Angular',
              'ngrx',
              'HTML',
              'CSS',
              'Responsive web design',
            ],
          },
          ,
          {
            title: 'Desktop application development',
            details: [
              'Desktop application development (WPF) that hosts passenger applications used by financial advisors. This provides a unified view to the FA(s) & CSA(s) encompassing 300+ applications',
              'Along with UI elements, this also required enabling server side (ASP.NET WebAPI(s)) & backend development (SQL) to ensure shared contextual information between applications',
            ],
            technologies: [
              'C#',
              'WPF',
              'ASP.NET',
              'SQL',
              'Core Javascript',
              'Prism',
            ],
          },
        ],
      },

      {
        id: 'company2',
        company: 'Infosys Technologies',
        title: 'Senior Systems Engineer',
        duration: '08/2011 - 07/2014',
        location: 'Pune, India',

        projects: [
          {
            title: 'AssistEdge Product Suite',
            details: [
              'Design and implementation of UI automation product suite aimed at improving customer services',
              'Integration of Managed Extensibility Framework (MEF) to support plugin based development',
              'WPF UI re-design to conform to product requirements',
            ],
            technologies: ['C#', 'WPF', 'SQL', 'XML'],
          },
        ],
      },
    ];

    const container = $('.work-experience .work-experience-container');
    const cloneObj = $(
      '.work-experience .work-experience-container .work-experience-entry'
    );

    let cloner = $(cloneObj);
    let title = $(cloner.find('.detail > .title'));
    let company = $(cloner.find('.detail > .company'));
    let duration = $(cloner.find('.detail > .duration_location > .duration'));
    let location = $(cloner.find('.detail > .duration_location > .location'));

    workex.forEach((w) => {
      title.text(w.title);
      company.text(w.company);
      duration.text(w.duration);
      location.text(w.location);

      let currentCompanyObj = cloneObj.clone();
      currentCompanyObj.appendTo(container);

      let projectsContainer = $(currentCompanyObj.find('.detail > .projects'));
      let moduleObj = $(
        currentCompanyObj.find('.detail > .projects > .module')
      );

      let moduleDetailTitle = $(
        moduleObj.find('.module-details > .module-title')
      );
      let moduleDetailTech = $(moduleObj.find('.module-details > .tech'));

      w.projects.forEach((p) => {
        moduleDetailTitle.text(p.title);
        moduleDetailTech.text('Technologies - ' + p.technologies.join(', '));

        let customModuleObj = moduleObj.clone();
        customModuleObj.appendTo(projectsContainer);

        let moduleDetailContainer = $(
          customModuleObj.find('.module-details > .details-container')
        );
        let moduleDetail = $(moduleDetailContainer.find('.detail'));
        let moduleDetailText = $(moduleDetail.find('.text'));

        p.details.forEach((d) => {
          moduleDetailText.text(d);
          moduleDetail.clone().appendTo(moduleDetailContainer);
        });
        moduleDetail.remove();
      });
      moduleObj.remove();
    });
    cloneObj.remove();
  };

  setupSkills();
  setupInterests();
  setupLanguages();
  setupEducation();
  setupCertifications();
  setupWorkExperience();
});
