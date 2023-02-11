const gallery_cards = document.querySelectorAll(".project_gallery_card");
const gallery_dots = document.getElementById("card-dots").children;
const gallery_arrows = document.querySelectorAll(".project_gallery_arrow_wrapper");

let active_index = 0;
const max_index = gallery_cards.length - 1;

function change_index(diff) {
    const target_index = active_index + diff;
    let target_class;
    if (target_index >= 0 && target_index <= max_index) {
        if (diff > 0) {
            target_class = "left";
        } else {
            target_class = "right";
        }
        gallery_cards[active_index].classList.add(target_class);
        gallery_dots[active_index].classList.remove("active");
        gallery_cards[target_index].classList.remove("left", "right");
        gallery_dots[target_index].classList.add("active");
        active_index = target_index;
        if (active_index === 0) {
            gallery_arrows[1].classList.remove("hidden");
            gallery_arrows[0].classList.add("hidden");
        } else if (active_index === max_index) {
            gallery_arrows[0].classList.remove("hidden");
            gallery_arrows[1].classList.add("hidden");
        } else {
            gallery_arrows[0].classList.remove("hidden");
            gallery_arrows[1].classList.remove("hidden");
        }
    }
}