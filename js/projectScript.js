const projects = [
  {
    name: "Kathmandu Bus Routes",
    links: [
      {
        name: "(Git)",
        url: "https://github.com/SayujKuickel/kathmandu-bus-routes",
      },
      {
        name: "(Website)",
        url: "https://bus-routes.sayuj.com.np/",
      },
      {
        name: "(Details)",
        url: "https://www.notion.so/2002054224e68038b8f1dd5e64f0a636?v=2002054224e681548951000c5b4845fc",
      },
    ],
  },
  {
    name: "Branch Management System",
    links: [
      {
        name: "(Git)",
        url: "https://github.com/SayujKuickel/manage-branch",
      },
      {
        name: "(Demo)",
        url: "https://manage-branch.vercel.app",
      },
      {
        name: `(Details)`,
        url: "https://github.com/SayujKuickel/branch-management-dashboard/blob/main/README.md",
      },
    ],
  },
  {
    name: "Churchill Institute of Higher Education (CHIE), NSW Australia",
    links: [
      {
        name: "(Website)",
        url: "https://churchill.nsw.edu.au/",
      },
      {
        name: "(Student Hub Website)",
        url: "https://student.churchill.nsw.edu.au/",
      },
      {
        name: "(Agent Hub Website)",
        url: "https://agent.churchill.nsw.edu.au/",
      },
    ],
  },
  {
    name: "CHIE Attendance Management Dashboard (Frontend)",
    links: [
      {
        name: "(Website)",
        url: "https://attendance.churchill.nsw.edu.au/",
      },
    ],
  },
  {
    name: "Other Projects",
    links: [
      {
        name: "ADS Electrical Australia",
        url: "https://www.adselectrical.com.au/",
      },
      {
        name: "Collcat AE",
        url: "https://collcat.vercel.app/",
      },
      {
        name: "Aced Electrical",
        url: "https://aced-electrical-astro.vercel.app/",
      },
    ],
  },
];

const projectsUl = document.getElementById("projectsUl");
const projectsUlHomePage = document.getElementById("projectsUlHomePage");

if (projectsUl) {
  projects.forEach((project) => {
    projectsUl.appendChild(getListItem(project));
  });
}

if (projectsUlHomePage) {
  projects.slice(0, 4).forEach((project) => {
    projectsUlHomePage.appendChild(getListItem(project));
  });
  projectsUlHomePage.appendChild(getViewAllItem());
}

function getListItem(project) {
  const li = document.createElement("li");

  const nameText = document.createTextNode(project?.name || "");
  li.appendChild(nameText);

  project.links?.forEach((link) => {
    const space = document.createTextNode(" ");
    li.appendChild(space);
    li.appendChild(getListUrlText(link?.url, link?.name));
  });

  return li;
}

function getListUrlText(url, text) {
  const a = document.createElement("a");
  a.href = url;
  a.className = "text-base underline sm:text-nowrap";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = text || "Link";
  return a;
}

function getViewAllItem() {
  const li = document.createElement("li");
  li.className = "text-base md:text-xl mt-4";

  const a = document.createElement("a");
  a.href = "/projects.html";
  a.innerHTML = `<i class="fi fi-br-share-square"></i> View All`;
  a.className = "underline";

  li.appendChild(a);
  return li;
}
