const gallery_cards = document.querySelectorAll(".project_gallery_card");

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
        gallery_cards[target_index].classList.remove("left", "right");
        active_index = target_index;
    }
}