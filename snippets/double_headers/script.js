const chaos = document.getElementById("chaos");

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    chaos.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);
