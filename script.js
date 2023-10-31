const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
//
const openModal = () => {
  console.log("Modal is Open");
  // modal active class ki jo property hogi woh kam karne lagegi
  modal.classList.add("active");
  //overlay active class ki property work karegi
  overlay.classList.add("overlayActive");
};

// Modal close function
const closeModal = () => {
    // yaha par remove ho jayegi property 
  modal.classList.remove("active");
  // same aise hi ovetrlay class ki property remove ho jayegi
  overlay.classList.remove("overlayActive");
};