export const formatNum = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export const scroll = () => {
  const sticky = document.querySelector("#main").offsetTop;
  document.body.scrollTop = sticky - 1; // For Safari
  document.documentElement.scrollTop = sticky - 1;
};

export const openModal = (src) => {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("myImg");

  modal.style.display = "block";
  modalImg.src = src;
};
export const closeModal = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
};
