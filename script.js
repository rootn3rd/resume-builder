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

  setupSkills();
  setupInterests();
  setupLanguages();
  setupEducation();
  setupCertifications();
});
