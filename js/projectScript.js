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
    ],
  },
  {
    name: "ADS Electrical, NSW Australia",
    links: [
      {
        name: "(Website)",
        url: "https://www.adselectrical.com.au/",
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
    ],
  },
  {
    name: "CHIE Attendance Management Dashboard",
    links: [
      {
        name: "(Website)",
        url: "https://attendance.churchill.nsw.edu.au/",
      },
    ],
  },
  {
    name: "Aced Electrical",
    links: [
      {
        name: "(Demo)",
        url: "https://aced-electrical-astro.vercel.app/",
      },
    ],
  },
  {
    name: "Collcat AE",
    links: [
      {
        name: "(Demo)",
        url: "https://collcat.vercel.app/",
      },
    ],
  },
];

const projectsUl = document.getElementById("projectsUl");
const projectsUlHomePage = document.getElementById("projectsUlHomePage");

if (projectsUl) {
  projects.forEach((project) => {
    const listItem = getListItem(project);
    projectsUl.appendChild(listItem);
  });
}

if (projectsUlHomePage) {
  projects.slice(0, 4).forEach((project) => {
    const listItem = getListItem(project);
    projectsUlHomePage.appendChild(listItem);
  });

  const viewAllLi = getViewAllItem();
  projectsUlHomePage.appendChild(viewAllLi);
}

function getListItem(item) {
  const li = document.createElement("li");
  li.textContent = item?.name;

  item.links.forEach((link) => {
    li.appendChild(getListUrlText(link?.url, link?.name));
  });

  return li;
}

function getListUrlText(url, textContext) {
  const a = document.createElement("a");
  a.href = url;
  a.className = "ml-1 text-base underline";
  a.target = "_blank";
  a.textContent = textContext;
  return a;
}

function getViewAllItem() {
  const viewAllLi = document.createElement("li");
  const viewAllLink = document.createElement("a");
  viewAllLink.href = "/projects.html";
  viewAllLink.innerHTML = `<i class="fi fi-br-share-square"></i> View All`;
  viewAllLi.appendChild(viewAllLink);

  return viewAllLi;
}
