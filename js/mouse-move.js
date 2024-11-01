const nav = document.getElementById("projects-nav");

for (const link of nav.getElementsByTagName("a")) {
  link.onmousemove = (e) => {
    const rect = link.getBoundingClientRect(),
      img = link.querySelector("img");

    //     img.style.left = `${e.clientX - rect.left}px`;
    //     img.style.top = `${e.clientY - rect.top}px`;
  };
}

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth;

  nav.animate(
    {
      transform: `translateX(${percent * nav.offsetWidth * -1}px)`,
    },
    {
      fill: "forwards",
      duration: 4000,
    }
  );
};
